// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import styles from "../../styles/styles";
// import EventCard from "./EventCard";

// const Events = () => {

//   const {allEvents, isLoading} = useSelector((state)=> state.events)

// // useEffect(( ) => {
// //   const data = allEvents && allEvents.find((a, b) => a.sold_out - b.sold_out)
// //   console.log(data)

// // }, [allEvents])

//   return (
//     <div>
//      {
//       !isLoading && (
//         <div className={`${styles.section}`}>
//         <div className={`${styles.heading}`}>
//           <h1>Popular Events</h1>
//         </div>
//         <div className="w-full grid ">
//           <EventCard data={allEvents && allEvents[0]} />
//         </div>
//       </div>
//       )
//      }
//     </div>
//   );
// };

// export default Events;

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/styles";
import EventCard from "./EventCard";

const Events = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);

  return (
    <div>
      {!isLoading && (
        <div className={`${styles.section}`}>
          <div className={`${styles.heading}`}>
            <h1>Popular Events</h1>
          </div>
          <div className="w-full grid">
            {allEvents.length !== 0 ? (
              <EventCard data={allEvents && allEvents[0]} />
            ) : (
              <h4 className="text-center bg-white p-20 text-lg">
                No Events have!
              </h4>
            )}
          </div>
          {/* 
      <div className="w-full grid">
         {
          allEvents.length !== 0 && (
            <EventCard data={allEvents && allEvents[0]} />
          )
         }
         <h4 className='text-center bg-white p-20 text-lg'>{
           allEvents?.length === 0 && (
            'No Events have!'
           )
          }

         </h4>
      </div> */}
        </div>
      )}
    </div>
  );
};

export default Events;
