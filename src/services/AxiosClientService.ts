import axios from "axios";



const https = axios.create({
    baseURL: process.env.REACT_APP_DEV_KEY,
    headers: {
        "Content-Type": "application/json"
    }
});


// axios Request 

https.interceptors.request.use((config) => {
    const Auth_Token = localStorage.getItem('token');
    if (Auth_Token) {
        config.headers.Authorization = `Bearer ${Auth_Token}`;
    }
    return config;
},
    (error) => {
        return Promise.reject(error);
    }
);



// function to get Refresh Token

const refreshToken = async () => {
    try {
        const response = await https.post('/api/v1/auth/refresh-token');
        return response.data.token;
    } catch (error) {
        console.error('Error Refreshing token:', error);
        throw error;
    }
}




let isRefreshing: boolean = false;
let failedQueue: any[] = [];


const processQueue = (error: any, token = null) => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error);
        } else {
            prom.reject(token);
        }
    });

    failedQueue = [];
}


// axios response


https.interceptors.response.use(response => {
    return response;
},
    async error => {
        const currentRequest = error.config;

        if (error.response && error.response.status === 401 && !currentRequest._retry) {
            if (isRefreshing) {
                try {
                    const token = await new Promise((resolve, reject) => {
                        failedQueue.push({ resolve, reject });
                    });
                    currentRequest.headers.Authorization = `Bearer ${token}`;
                    return https(currentRequest);
                } catch (err) {
                    return Promise.reject(err);
                }
            }
            currentRequest._retry = true;
            isRefreshing = true;

            try {
                const newToken = await refreshToken();

                https.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
                currentRequest.headers.Authorization = `Bearer ${newToken}`;

                processQueue(null, newToken);
                return https(currentRequest);
            } catch (refreshError) {
                processQueue(refreshError, null);

                return Promise.reject(refreshError);

            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    }
);



export default https;