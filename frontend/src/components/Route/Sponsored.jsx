import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl `}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png"
            alt=""
            style={{ width: "150px", objectFit: "contain" }}
          />
        </div>
        <div className="flex items-start">
          <img src="https://logos-world.net/wp-content/uploads/2020/08/Dell-Logo-1989-2016.png"
           alt=""
           style={{width:"150px", objectFit:"contain"}}
          />
        </div>
        <div className="flex items-start">
          <img src="https://th.bing.com/th/id/R.b87c3069e47bc70a48144e2bdb4508b2?rik=c3u0ApcCrrn1Ow&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f03%2fLG-Symbol.jpg&ehk=Vuinc%2fp%2bXUrQAXYrY50hbFGs4ESomie8ThhjNbTyEGk%3d&risl=&pid=ImgRaw&r=0" 
          alt="" 
          style={{width:"150px", objectFit:"contain"}}
          />
        </div>
        <div className="flex items-start">
          <img src="https://th.bing.com/th/id/OIP.ZCfalRX6vpZZHWH9nv4orwAAAA?pid=ImgDet&rs=1" 
          alt="" 
          style={{width:"150px", objectFit:"contain"}}
          />
        </div>
        <div className="flex items-start">
          <img src="" 
          alt="" 
          style={{width:"150px", objectFit:"contain"}}
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
