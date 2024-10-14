import React from 'react'
import Navbar from '../Components/Navbar'
import CategoryMenu from '../Components/CategoryMenu'
import Fooditems from '../Components/FoodItems'
import Cart from '../Components/Cart'

const Home = () => {
  return (
    <>
        <Navbar/>
        <CategoryMenu />
        <Fooditems />
        <Cart />
    </>
  )
}

export default Home