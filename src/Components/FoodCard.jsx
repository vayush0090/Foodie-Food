import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Redux/slices/CartSlice'

const FoodCard = ({id,name,price,desc,rating,img}) => {
    const dispatch = useDispatch()
  return (
    <div className='font-bold w-[250px] bg-white rounded-lg flex flex-col p-5 gap-2'>
        <img src={img} alt=""
        className='w-auto h-[130px] cursor-grab hover:scale-110 transition-all duration-500 ease-in-out ' />
        <div className='text-sm flex justify-between items-center'>
            <h2>{name}</h2>
            <span className='text-green-500'>₹{price}</span>
        </div>
        <p className='text-sm font-normal'>{desc.slice(0,50)}...</p>
        <div className='flex justify-between items-center'>
            <span className='flex justify-center items-center
            '>
            <AiFillStar className='mr-1 text-yellow-400' /> {rating}
            </span> 
            <button onClick={()=>{
                dispatch(addToCart({id,name,price,rating,img,qty:1}))
            }} className='p-1 bg-green-500 hover:bg-green-600 text-sm text-white rounded-lg'>Add to cart</button>
        </div>
    </div>
  )
}

export default FoodCard