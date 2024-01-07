import recat from 'react'


const TwoLineTitle = (props) => {
    return (

        <div className='w-full flex flex-col py-[60px] items-center text-center px-[10%]'>
            <span className='text-xl text-[#737373] capitalize'>{props.top}</span>
            <span className='text-3xl font-bold text-[rgb(37,43,66)] uppercase'>{props.main}</span>      
        </div>
        );
    };
    
    export default TwoLineTitle