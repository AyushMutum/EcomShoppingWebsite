import React from "react";
import styles from "../../../styles/styles";
import HeroBanner from "../../../Assests/wallpaper.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
    className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage: `url(${HeroBanner})`,
        backgroundSize: 'cover'
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1 className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#f1ecec] font-[600] capitalize`}>
          Best Collection for<br />Shopping Items
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#fffdfdf9]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati atque, nihil reiciendis doloribus libero earum ducimus eius saepe eveniet repellat!
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button_shopnow} mt-5`}>
            <span className="text-black font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
