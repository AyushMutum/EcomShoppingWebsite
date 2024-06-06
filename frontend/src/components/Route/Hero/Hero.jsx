import React from "react";
import styles from "../../../styles/styles";
import HeroBanner from "../../../Assests/banner.jpeg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    // <div
    //   className={`relative min-h-[90vh] 800px:min-h-[60vh] 800px:min-w-full bg-no-repeat bg-cover md:max-w-[600px] banner-mb ${styles.noramlFlex}`}
    //   style={{
    //     backgroundImage: `url(${HeroBanner})`,
    //   }}
    // >
    //   <div className={`${styles.section} w-[90%]  800px:w-[60%] pt-56`}>
    //     <h1 className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#f1ecec] font-[600] capitalize`}>
    //       Best Collection for<br />Fashion, E-Gadgets ...
    //     </h1>
    //     <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#fffdfdf9]">
    //       Fashion Meets Innovation - Explore the Ultimate Collection of E-Gadgets and Trendy Styles.
    //     </p>
    //     <Link to="/products" className="inline-block">
    //       <div className={`${styles.button_shopnow} mt-5`}>
    //         <span className="text-black font-[Poppins] text-[18px]">
    //           Shop Now
    //         </span>
    //       </div>
    //     </Link>
    //   </div>
    // </div>


    <div
    className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
    style={{
      backgroundImage:
        "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
    }}
  >
    <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
      <h1
        className={`text-[35px] leading-[1.2] 800px:text-[40px] text-[#3d3a3a] font-[600] capitalize`}
      >
        
Explore a World of Wonders: Unveiling a Diverse Array of Products from Clothing to Electronics! and to <br /> home Decoration
      </h1>
      <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
        assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
        quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
        <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
      </p>
      <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
               <span className="text-[#fff] font-[Poppins] text-[18px]">
                  Shop Now
               </span>
          </div>
      </Link>
    </div>
  </div>

  );
};

export default Hero;
