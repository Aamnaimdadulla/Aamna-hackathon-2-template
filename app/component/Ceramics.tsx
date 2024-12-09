// import React from 'react'
// import Image from 'next/image'

// export const Ceramics = () => {
//   return (
//     <div>
//       <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-12 md:mt-16">
//         {[1, 2, 3, 4].map((item) => (
//           <div
//             key={item}
//             className=" w-[90%] sm:w-[416px] bg-[#F7F7F7] p-4 "
//           >
//             {/* Image for each item */}
//             <div className="flex justify-center">
//               <Image
//                 src={`/chair${item}.jpeg`}  // Assuming images are named chair1.jpeg, chair2.jpeg etc. 
//                 alt={`image-${item}`}
//                 height={200} // Adjusted height
//                 width={300}  // Adjusted width
//                 objectFit="contain"  // Ensures image fits inside without stretching, no background
//                 className=""  // Optional, to round the image corners
//               />
//             </div>

//             <div className="flex items-center mt-6 justify-between">
//               <h3>Category {item}</h3>
//               <div className="flex items-center mr-2">
//                 <Image
//                   src="/rating.png"  // Assuming rating image is in the public folder too
//                   alt="rating"
//                   width={20}
//                   height={20}
//                 />
//                 <p className="font-bold ml-2">5.0</p>
//               </div>
//             </div>

//             <h1 className="text-[18px] sm:text-[24px] font-bold mt-3">
//               Course Title {item}
//             </h1>
//             <p className="text-[14px] sm:text-[16px] mt-3">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//               Suspendisse varius enim in eros.
//             </p>

//             <div className="flex items-center justify-between mt-6">
//               <button className="border border-black rounded px-4 py-2">
//                 Enroll Now
//               </button>
//               <span className="ml-4 font-bold">$400</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };













// import React from 'react'
// import Image from 'next/image'

// export const Ceramics = () => {
//   return (
//     <div>
//       <div className="flex justify-center items-center gap-6 mt-12 md:mt-16">
        
//           <div
        
//             className=" w-[200px] h-[300px] flex flex-col items-center bg-transparent p-4 shadow-md"
//           >
//             {/* Image for each item */}
//             <div className="flex justify-center mb-4">
//               <Image
//                 src={`/chair.jpeg`}  // Assuming images are named chair1.jpeg, chair2.jpeg etc. 
//                 alt={`image-`}
//                 height={150} // Adjusted height for smaller size
//                 width={150}  // Adjusted width for smaller size
//                 objectFit="cover"  // Ensures image fits properly without background
                
            
//               />
//             </div>

//             {/* Category & Rating */}
//             <div className="flex items-center justify-between mb-4 w-full">
//               <h3> </h3>
//               <div className="flex items-center">
//                 <Image
//                   src="/rating.png"  // Assuming rating image is in the public folder too
//                   alt="rating"
//                   width={20}
//                   height={20}
//                 />
//                 <p className="font-bold ml-2"></p>
//               </div>
//             </div>

//             {/* Title and Description */}
//             <h1 className="text-[16px] sm:text-[20px] font-bold mb-2">
              
//             </h1>
//             <p className="text-[12px] sm:text-[14px] mb-4">
             
//             </p>

//             {/* Price Display */}
//             <div className="flex items-center justify-between mt-2 w-full">
//               <span className="ml-4 font-bold">$400</span>  {/* Only price shown */}
//             </div>
//           </div>
        
//       </div>
//     </div>
//   );
// };






































import React from 'react'
import Image from 'next/image'

export const Ceramics = () => {
  return (
    <div className='flex  justify-center gap-6'>
        {[1, 2, 3, 4].map((item) => (
            <div key={item} className='flex-col flex items-center p-5 w-[200px] h-[300px]'>
         {/* image */}
         <div  className='flex justify-center '>
            <Image 
            src={`/chair${item}.jpeg`}
            alt={`image-${item}`}
            height={800}  // Adjusted height for larger size
            width={800}   // Adjusted width for larger size
            objectFit="contain"  // Ensures image fits without stretching or covering
            
            />
         </div>
         

            </div>

        ))}
    
    </div>
  )
}




