



interface buttonProps{
    btnName:string;
    btnType: any;
}

const LoginButton: React.FC<buttonProps> = ({btnName, btnType}) => {
    return(
        <button type={btnType ? btnType :"button"} className="mt-4 text-white bg-blue-700 hover:bg-blue-900 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 w-full">
            {btnName}
        </button>
    )
}






export {LoginButton};