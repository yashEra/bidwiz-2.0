import recat from 'react'


const ThreeLineTitle = (props) => {
    return (

        <div className='w-full flex flex-col py-[60px] items-center'>
            <span className='text-xl text-[#737373]'>{props.top}</span>
            <span className='text-3xl font-bold text-[#252B42]'>{props.main}</span>
            <span className='text-md text-[#737373]'>{props.bottom}</span>           
        </div>
        )
    }
    
    export default ThreeLineTitle