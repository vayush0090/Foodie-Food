import React, { useState } from 'react'
import {IoMdClose} from 'react-icons/io'
import ItemCard from './ItemCard'
import { useSelector } from 'react-redux'
import { FaShoppingCart } from 'react-icons/fa'



const Cart = () => {
    const[activeCart,setactiveCart]= useState(false)

    const cartItems = useSelector((state)=>state.cart.cart)
    // console.log(cartItems);
    const totalQty = cartItems.reduce((totalQty,item)=> totalQty+item.qty,0)
    const totalPrice = cartItems.reduce((total,item)=> total+item.qty*item.price,0)
    
  return (
    <>
        <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white ${activeCart?"translate-x-0":"translate-x-full"} transition-all duration-500 z-50` }>
            <div className='flex justify-between items-center my-3'>
                <span className='font-bold text-xl text-gray-800'>My Order</span>
                <IoMdClose onClick={()=>setactiveCart(!activeCart)} className='border-2 border-gray-600 text-gray-6000 p-1 text-xl font-bold rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer' />
            </div>

            {cartItems.length>0?cartItems.map((food)=>{
                return <ItemCard key={food.id} id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty} />
            }): <h2 className='text-center text-xl font-bold text-gray-800'>Your Cart is empty</h2>}
            
            

            <div className='absolute bottom-0'>
                <h3 className='font-semibold text-gray-800'>Items :{totalQty}</h3>
                <h3 className='font-semibold text-gray-800'>Total Amount :{totalPrice}</h3>
                <hr className='w-[90vw] lg:w-[18vw] my-2' />
                <button className='bg-green-500 px-3 py-2 w-[90vw] lg:w-[18vw] text-white rounded-lg text-xl mb-5'>Checkout</button>
            </div>
        </div>
        <FaShoppingCart onClick={()=> setactiveCart(!activeCart)} className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 cursor-pointer ${totalQty>0 && "animate-bounce delay-500 transition-all"}`} />
    </>
  )
}

export default Cart