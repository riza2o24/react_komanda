import React from 'react'
import Frame from "../../assets/Frame.png"
import { Link } from 'react-router-dom'
import { IoCartOutline } from 'react-icons/io5'
import { FcLike } from 'react-icons/fc'
import { FiSearch } from 'react-icons/fi'
import { FaRegUser } from 'react-icons/fa'
import Home from '../home/Home'
const Header = () => {
  return (
    <div className='w-[1440px]  px-[55px] h-[80px] bg-[#FFFFFF] flex items-center justify-between m-auto'>
        <img src={Frame} alt="" />

        <nav>
            <ul className='flex items-center gap-[75px]'>
                <Link to={"/"}>Home</Link>
                <Link to={"/shop"}>Shop</Link>
                <Link>About</Link>
                <Link>Contact</Link>
            </ul>
        </nav>

        <div className='flex items-center gap-[50px]'>
            <FaRegUser />
            <FiSearch/>
            <FcLike color='#000'/>
            <IoCartOutline />
        </div>
    </div>
  )
}

export default Header
