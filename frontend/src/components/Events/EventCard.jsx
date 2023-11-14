import React from 'react'
import styles from '../../styles/styles';
import CountDown from "./CountDown";

const EventCard = ({active}) => {
  return (
    <div className={`w-full block bg-white rounded-lg ${active ? "unset" : "mb-12"} lg:flex p-2`}>
      <div className="w-full lg:-w[50%] m-auto">
        <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt="" />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>Iphone 14 pro max 8/256gb</h2>
        <p>
        Elevate your mobile experience with the iPhone 8 Pro Max 8/256GB. Combining blazing-fast performance driven by an octa-core processor and 8GB of RAM, a stunning 6.7-inch Super Retina XDR display, and a cutting-edge triple-camera system for professional-grade photos and videos, this flagship device redefines smartphone capabilities. With 256GB of storage, you'll have ample room for all your memories and media. Its sleek design, advanced security features like Face ID, and long-lasting battery life make it the ultimate companion for both work and play, delivering a new level of innovation and style to your hands.
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className='font-[500] text-[18px] text-[#d55b45] pr-3 line-through '>
              67000₹
            </h5>
            <h5 className='font-bold text-[20px] text-[#333] font-Roboto '>
              57000₹
            </h5>
          </div>
          <span className='pr-3 font-[400] text-[17px] text-[#44a55e] '>120 sold</span>
        </div>
        <CountDown />
      </div>
      
    </div>
  )
}

export default EventCard
