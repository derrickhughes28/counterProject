import React from 'react'



 const Add = (props) =>{
     const {countUp} = props
 
        return (
        <div className='container'>
           <button className='center ' onClick ={countUp}> Add </button>
        </div>

    )
}    

export default Add