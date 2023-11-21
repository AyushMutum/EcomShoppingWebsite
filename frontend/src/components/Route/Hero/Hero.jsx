import React from "react";
import styles from "../../../styles/styles";
import HeroBanner from "../../../Assests/banner.jpeg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
<<<<<<< HEAD
    className={`relative min-h-[70vh] 800px:min-h-[60vh] 800px:min-w-full bg-no-repeat bg-cover md:max-w-[600px ] banner-mb ${styles.noramlFlex}`}
    style={{
      backgroundImage: `url(${HeroBanner})`,
    }}
  >
  
=======
    className={`relative min-h-[70vh] 800px:min-h-[60vh] 800px:min-w-full bg-no-repeat bg-cover md:max-w-[600px ] banner-mb ${styles.noramlFlex}`}
    style={{
      backgroundImage: `url(${HeroBanner})`,
    }}
  >
  
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1 className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#f1ecec] font-[600] capitalize`}>
          Best Collection for<br />Shopping Items
=======
>>>>>>> b01c1c952eb4d4f9bbedf2fa3ec4a03302e8fcbf
>>>>>>> a348bad12ad64bf86bddf2ee3c3cd59a477f3659
      <div className={` pt-48 ${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1 className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#f1ecec] font-[600] capitalize p`}>
          Best Collection for<br />Fashion, E-Gadgets ...
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#fffdfdf9]">
        Fashion Meets Innovation - Explore the Ultimate Collection of E-Gadgets and Trendy Styles.
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
