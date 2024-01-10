import LoginCss from '../../styles/modules/LoginCss.module.css';
import LoginImage from '../../assets/images/loginPage.png';
import brandLogo from '../../assets/images/logo.png'
import { InputWithIcon } from '../../components/element/Input';
import { LoginButton } from '../../components/element/Button';




const Login = () =>{
    return(
        <div className={`${LoginCss.background}`} >
            <div className={`${LoginCss.glassOverLay}`}>
                <div className='grid grid-cols-2 gap-4 bg-white py-8'>
                    <div className='h-96 flex items-center justify-center content-center   w-96'>
                    
                            <img src={LoginImage} alt="Login Image" className={LoginCss.logoStyle} />
                     
                    </div>
                    <div className=' border-l-2 border-gray-400 px-14 pt-6'>
                        <div className='flex-row flex justify-center content-center align-middle items-center'>
                            <img src={brandLogo} alt="Brand Logo" className={LoginCss.brandLogo} />
                            <div className='ml-2 font-semibold text-xl'>PrimeSyS Track</div>
                        </div>
                        <p className='text-center text-xs mt-2 font-extralight'>"Empower. Track. Thrive:PrimeSyS Track-Path to Efficiency"</p>
                        <div className='pt-4'>
                                <InputWithIcon placeHolder={'username'} labelName={'Username'} inputType='text' />
                                <InputWithIcon placeHolder={'••••••••'} labelName={'Password'} inputType='password'/>
                                <LoginButton btnType={'button'} btnName='Login'/>
                        </div>
                        <div className='text-center text-sm cursor-pointer  '>
                            <span >Forgot Password?</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Login;