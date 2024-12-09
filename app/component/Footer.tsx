import React from "react";

const Footer = () => {
  return (
    <div className=" bg-[#2A254B] h-96  ">
      <div className="flex pt-10  space-x-8  pl-20">
        <div>
          <h1 className="text-white text-lg  font-Clash Display">Menu</h1>
          <p className="text-white mt-4 text-sm">New arrivals</p>
          <p className="text-white mt-4 text-sm">Best seller</p>


          <p className="text-white mt-4 text-sm">Recently Viewed</p>
          <p className="text-white mt-4 text-sm">Popular this week</p>
          <p className="text-white mt-4 text-sm">All Products</p>
        </div>



        <div    >
          <h1 className="text-white text-lg font-Clash Display ml-20">
            Catergory
          </h1>
          <p className="text-white mt-4 text-sm ml-20">Crockery</p>


                   
                   <p className="text-white mt-4 text-sm ml-20">Furniture</p>
          <p className="text-white mt-4 text-sm ml-20">Homeware</p>


          <p className="text-white mt-4 text-sm ml-20">Plants pot</p>
          <p className="text-white mt-4 text-sm ml-20">Chiar</p>
          <p className="text-white mt-4 text-sm ml-20">Crockery</p>
        </div>
        <div className="pl-28">


                <h1 className="text-white text-lg font-Clash Display">Our Company</h1>
               <p className="text-white mt-4 text-sm ">About Us</p>
          <p className=" mt-4 text-sm text-white ">Vacancies</p>
          <p className="text-white mt-4 text-sm ">Contact Us</p>
          <p className="text-white mt-4 text-sm ">Privacy</p>
          <p className="text-white mt-4 text-sm ">Return Policy</p>
        </div>
        <div className="pl-28">
          <h1 className="text-white text-lg font-Clash Display">
            Join our mailing list

          </h1>
          <input
            type="text"
            placeholder="you@gmail.com"
            className="bg-input-bg w-80 mt-5 h-12 p-5 rounded-sm"
          />
          <button className=" h-12 w-32 rounded-sm   bg-white  mt-1">
            Sign Up
          </button>
        </div>
      </div>
      <div className="border-t-2   w-11/12  m-auto  my-8"> 
      
      <p className="text-white mt-4 text-sm ">Copyright 2022 Avion LTD</p>



      <img src="/images/social Links.png" alt="      "       />

      </div>


    </div>

  );
  
};

export default Footer;