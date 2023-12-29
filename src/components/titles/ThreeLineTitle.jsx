import recat from 'react'


const ThreeLineTitle = (props) => {
    return (

        <div className='w-full flex flex-col py-[60px] items-center text-center px-[9.895833333333333%]'>
            <span className='text-xl text-[#737373] capitalize'>{props.top}</span>
            <span className='text-3xl font-bold text-[rgb(37,43,66)] uppercase'>{props.main}</span>
            <span className='text-md text-[#737373] normal-case'>{props.bottom}</span>           
        </div>
        )
    }
    
    export default ThreeLineTitle