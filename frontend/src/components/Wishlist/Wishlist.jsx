import React, {useState} from 'react'
import { RxCross1 } from 'react-icons/rx'
import {IoBagHandleOutline} from 'react-icons/io5'
import {BsCartPlus} from 'react-icons/bs'

import styles from '../../styles/styles'
import { Link } from 'react-router-dom'
import { AiOutlineHeart } from 'react-icons/ai'


const Wishlist = ({setOpenWishlist}) => {


    const cartData = [
    {
        name : 'Iphone 14 pro max 256 gb ssd and 8gb ram pink colour',
        description: 'test',
        price: 69000,
    },
    {
        name : 'Iphone 14 pro max 256 gb ssd and 8gb ram pink colour',
        description: 'test',
        price: 9000,
    },
    {
        name : 'Iphone 14 pro max 256 gb ssd and 8gb ram pink colour',
        description: 'test',
        price: 6000,
    }
    ]


  return (
    <div className='fixed top-0 left-0 w-full bg-#1c09094a h-screen z-10'>
        <div className="fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between shadow-sm">
            <div>
                <div className="flex w-full justify-end pt-5 pr-5">
                    <RxCross1
                    size={25}
                    className="cursor-pointer"
                    onClick={() => setOpenWishlist(false)}
                    />
                </div>
                {/* Items length */}
                <div className={`${styles.noramlFlex} p-4`}>
                    <AiOutlineHeart size={25} />
                    <h5 className='pl-2 text-[20px] font-[500]'>
                        3 items
                    </h5>
                </div>

                {/* cart single items */}
                <br />
                <div className='w-full border-t'>
                    {
                        cartData && cartData.map((i,index) => (
                            <CartSingle key={index} data={i} />
                        ))
                    }

                </div>
            </div>

        </div>
    </div>
  )
}

const CartSingle = ({data}) => {

    const [value, setValue] = useState(1);
    const totalPrice = data.price * value

    return (
        <div className='border-b p-4'>
            <div className='w-full flex items-center'>
                <RxCross1 className='cursor-pointer' />
                <img src='https://www.aptronixindia.com/media/catalog/product/cache/31f0162e6f7d821d2237f39577122a8a/m/b/mbp14-spacegray-select-202110-removebg-preview_2__1.png' alt=""
             className='w-[80px] h-[80px] ml-2' />

                
            
             <div className='pl-[5px]'>
                <h1>{data.name}</h1>
                <h4 className='font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto'>IND₹{totalPrice}</h4>
             </div>
                <div>
                    <BsCartPlus size={20} className="cursor-pointer" title="Add to cart" />
                </div>
            </div>
        </div>
    )
}

export default Wishlist