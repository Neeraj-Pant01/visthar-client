import React from 'react'
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai"
import { MdOutlinePerson2 } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CatItem from '../catItem/CatItem';
import SideMenu from './SideMenu';
import { Navcategories } from '../../data';

const Navbar = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState("")
    const [showCat, setShowCat] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    const handleClose = () => {
        setShowCat(false)
    }

    return (
        <div className='flex z-50 bg-[white] h-[80px] border py-4 px-10 items-center justify-between sticky top-0 md:gap-20'>
            <div className='relative'>
                {
                    showMenu &&
                    <SideMenu setShowMenu={setShowMenu} />
                }
            </div>
            <AiOutlineMenu className='md:hidden text-xl font-bold cursor-pointer mr-2' onClick={() => setShowMenu(true)} />
            <Link to={`/visthar`} className='flex cursor-pointer items-center justify-center md:text-3xl font-semibold w-fit'>
                VISTHAR
            </Link>
            <div className='hidden md:flex gap-10 md:text-[18px] text-[rgba(0,0,0,0.8)] flex-[2] relative'>
                {
                    showCat &&
                    <div className="absolute hidden md:flex bottom-[-330px] px-8 bg-[white] rounded-lg border w-[80%] py-6 flex-wrap gap-5" onMouseEnter={() => setShowCat(true)} onMouseLeave={() => setShowCat(false)}>
                        {
                            Navcategories.map((c, i) => 
                                <CatItem c={c} key={i} />)
                        }
                        <CatItem c={{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRG_hzE6tlnNcQxab-k8SEOl5cKID_RC2lh2ag0Oaqg&s",title:"DataCables"}} />
                        <CatItem c={{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRG_hzE6tlnNcQxab-k8SEOl5cKID_RC2lh2ag0Oaqg&s",title:"DataCables"}} />
                        <CatItem c={{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRG_hzE6tlnNcQxab-k8SEOl5cKID_RC2lh2ag0Oaqg&s",title:"DataCables"}} />
                        {/* <CatItem c={{img:"", title:""}} /> */}
                        {/* <CatItem /> */}

                    </div>
                }
                <Link to={`/products?cat=${category}`} className='flex items-center gap-2' onMouseEnter={() => setShowCat(true)} onMouseLeave={handleClose}>
                    Categories <IoIosArrowDown className='cursor-pointer' />
                </Link>
                <Link to={'/products'} className='flex items-center'>
                    All Products
                </Link>
                <Link to={`/orders`} className='flex items-center'>
                    Orders
                </Link>
                <Link to={`/products?cat=trending`} className='flex items-center'>
                    Trending Products
                </Link>
                <div className='flex items-center gap-2'>
                    More <IoIosArrowDown className='cursor-pointer' />
                </div>
            </div>
            <div className='flex items-center justify-end md:justify-normal gap-4 flex-1'>
                <div className='hidden md:flex items-center bg-[#edecec] px-4 py-2 rounded-lg gap-1'>
                    <AiOutlineSearch className='md:text-xl' />
                    <input type='text' className='outline-none bg-[transparent] md:w-[250px]' placeholder='search an item' />
                </div>
                <AiOutlineSearch className='text-2xl md:hidden' />
                <MdOutlinePerson2 className='text-2xl' />
                <IoBagOutline className='text-2xl cursor-pointer' onClick={() => navigate('/cart')} />
            </div>
        </div>
    )
}

export default Navbar
