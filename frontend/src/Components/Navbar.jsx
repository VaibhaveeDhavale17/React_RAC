import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

//react-icons
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    //toggle menu
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY > 100){
                setIsSticky(true);
            }

            else{
                setIsSticky(false);
            }
        }

        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.addEventListener("scroll", handleScroll);
        }
    },[])

    //NAV ITEMS
    const navItems = [
        {
            link:"Home", path:"/"
        },
        {
            link:"Signup", path:"/signup"
        },
        {
            link:"Login", path:"/login"
        },
        {
            link:"Create Product", path:"/user/new"
        },


    ]

  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
        <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-red-300":""}`}>
           
            <div className='flex justify-between items-center gap-8'>
            <Link to="/" className='text-2x1 font-bold text-blue-700 flex items-center gap-2' ><FaBlog className='inline-block' />RAC</Link>
           

            {/* NAV ITEMS FOR LARGE  DEVICES  */}

            <ul className='md:flex space-x-12 hidden'>
                {
                    navItems.map(({link, path})=><Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>{link}</Link>)
                }
            </ul>

            <div className='space-x hidden lf:flex itemss-center'>
                <button><FaBarsStaggered className='w-5 hover:text-blue-700'/></button>
            </div>

            <div className='md:hidden'>
                <button onClick={toggleMenu} className='text-black focus:outline-none'>
                    {
                        isMenuOpen ? <FaXmark className='h-5 w-5 text-black' /> : <FaBarsStaggered />
                    }
                </button>
            </div>
          
            
            <div className={`space-y-4 px-4 mt-16 pt-7 bg-red-700 ${isMenuOpen ? "block finxed top-0 right-0 left-0":"hidden"}`}>
                {
                    navItems.map(({link,path})=> <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer hover:text-gray-700'>{link}</Link>)
                }
            </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar