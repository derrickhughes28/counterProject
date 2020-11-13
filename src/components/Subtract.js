import React from 'react'



 const Subtract = (props) =>{
     const {countDown} = props
 
        return (
        <div className='container'>
           <button className='center' onClick={countDown}> Subtract </button>
        </div>

    )
}    

export default Subtract