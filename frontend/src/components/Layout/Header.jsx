import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import brandlogo from "../../Assests/logo-png.png";
import "../../App.css";
import { categoriesData, productData } from "../../static/data";
import {AiOutlineHeart, AiOutlineSearch, AiOutlineShopping} from 'react-icons/ai';
import {IoIosArrowDown, IoIosArrowForward} from 'react-icons/io';
import {BiMenuAltLeft} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import DropDown from "./DropDown";
import Navbar from "./Navbar";

const Header = ({activeHeading}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active,setActive] = useState(false);
  const [dropDown,setDropDown] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };

  window.addEventListener("scroll", () =>{
    if(window.screenY > 70){
      setActive(true);
    } else{
      setActive(false);
    }
  });
  

  return (
  <>
 
    <div className={`${styles.section}`}>
      <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
        <div className="logo">
          <Link to="">
            <img className="logo-img" src={brandlogo} alt="Logo" />
          </Link>
        </div>
        {/* search box */}
        <div className="w-[50%] relative">
          <input
            type="text"
            placeholder="search product"
            value={searchTerm}
            onChange={handleSearchChange}
            className='h-[40px] w-full px-2 border-[#db3946] border-[2px] rounded-md'
          />
          <AiOutlineSearch size={30} className='absolute right-2 top-1.5 cursor-pointer' />
          {
            searchData && searchData.length !== 0 ? (
                <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                    {searchData && searchData.map((i, index) => {
                        const d = i.name;

                        const Product_name = d.replace(/\s+/g, "-" )
                        return(
                            <Link to={`/product/${Product_name}`}>
                                <div className="w-full flex items-start py-3">
                                    <img src={i.image_Url} alt=""
                                    className="w-[40px] h-[40px] mr=[10px]" />
                                </div>
                            </Link> 
                        )
                    })}
                </div>
            ): null
          }
        </div>

        <div className={`${styles.button}`}>
            <Link to='/seller'>
                <h1 className="text-[#fff] flex items-center">
                    Become Seller <IoIosArrowForward className="ml-1" />
                </h1>
            </Link>
        </div>
      </div>
      </div>
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition hidden 800px:flex items-center justify-between w-full bg-[#c82121] h-[70px]`}
      >
      <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
        >
          {/* categories */}
        
          <div onClick={() => setDropDown(!dropDown)}>
            <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block">
              <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
              <button
                className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
              >
                All Categories
              </button>
              <IoIosArrowDown
                size={20}
                className="absolute right-2 top-4 cursor-pointer"
                onClick={() => setDropDown(!dropDown)}
              />
              {dropDown ? (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              ) : null}
              
            </div>
          </div>
          {/* navItems */}
          <div className={`${styles.noramlFlex}`}>
            <Navbar active={activeHeading} />
          </div>
          <div className="flex">
            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                <AiOutlineHeart
                  size={30}
                  color="rgb(255 2555 255 / 83%)"
                />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center ">
                  0
                </span>
              </div>
              
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                <AiOutlineShopping
                  size={30}
                  color="rgb(255 2555 255 / 83%)"
                />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center ">
                  1
                </span>
              </div>
              
            </div>
            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                <Link to="/login">
                <CgProfile size={30} color="rgb(255 2555 255 / 83%)"/>
                </Link>
      
              </div>
              
            </div>
          </div>
          </div>
        </div>
      





    
  </>
  );
};

export default Header;
