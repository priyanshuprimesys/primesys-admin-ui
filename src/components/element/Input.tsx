import { FaUser } from "react-icons/fa";
import { FaEye } from "react-icons/fa";





interface InputProps{
    labelName: string;
    placeHolder:string | any;
    inputType:string;
}



const InputBox: React.FC<InputProps> = ({labelName,placeHolder,inputType}) =>{
    return(
        <>
            <label htmlFor={labelName} className="block pl-1 text-sm font-medium text-gray-700">{labelName}</label>
            <input type={inputType ? inputType : 'text'} id={labelName} placeholder={placeHolder} className="bg-gray-100 border border-gray-400 text-gray-900 text-sm rounded-lg w-full p-2.5" required  />
        </>
    )
}


const InputWithIcon: React.FC<InputProps> = ({labelName,placeHolder,inputType}) =>{
    return(
        <>
        <label htmlFor="input-group" className="block mb-2 text-sm font-medium text-gray-900">{labelName}</label>
            <div className="relative mb-6">
                <div  className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                   {inputType == 'password' ? <FaEye size={15} color={'gray'}/> : <FaUser size={15} color={'gray'} />} 
                </div>
                <input type={inputType ? inputType : 'text'} className="bg-gray-50 border block w-full ps-10 p-2.5 border-gray-300 text-gray-900 text-sm rounded-lg" id='input-group' placeholder={placeHolder}   />
            </div>
        </>

    )
}






export {InputBox,InputWithIcon};