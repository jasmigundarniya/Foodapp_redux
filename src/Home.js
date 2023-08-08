import React from 'react'
import Navbar from './Navbar'
import Foods from './Foods'
import CartDrawer from './CartDrawer'
import Foods1 from './Foods1'

const Home = () => {
  return (
    <>
    <Navbar />
      <Foods1/>
      {/* <Foods/> */}
      <CartDrawer/>
    </>
  )
}

export default Home