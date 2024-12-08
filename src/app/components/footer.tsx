import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Parent container with justify-between */}
        <div className="flex flex-col md:flex-row justify-between mb-8">
          {/* First div with 3 columns */}
          <div className="flex flex-col lg:gap-16 md:flex-row space-y-6 md:space-x-32 md:space-y-0">
            <div>
              <ul className="space-y-4 text-[12px]">
                <li>FIND A STORE</li>
                <li>BECOME A MEMBER</li>
                <li>SIGN UP FOR EMAIL</li>
                <li>SEND US FEEDBACK</li>
                <li>STUDENT DISCOUNTS</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4 text-[12px]">
                <li>GET HELP</li>
                <li>Order Status</li>
                <li>Delivery</li>
                <li>Return</li>
                <li>Payment Options</li>
                <li>Contact Us on Nike.com inquiries</li>
                <li>Contact Us on all other inquiries</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4 text-[12px]">
                <li>ABOUT NIKE</li>
                <li>News</li>
                <li>Careers</li>
                <li>Investors</li>
                <li>Sustainability</li>
              </ul>
            </div>
          </div>

          {/* Second div with 1 column for social icons */}
          <div className="mt-6 md:mt-0">
            <div className="flex gap-4 justify-center md:justify-start">
              <AiFillTwitterCircle className="text-[30px] hover:cursor-pointer" />
              <FaFacebook className="text-[30px] hover:cursor-pointer" />
              <SiYoutubemusic className="text-[30px] hover:cursor-pointer" />
              <FaInstagramSquare className="text-[30px] hover:cursor-pointer" />
            </div>
          </div>
        </div>
      </div>


    <div className="sm:flex justify-between">

        <div className="flex gap-4 justify-center items-center">
        <IoLocationSharp />
        <span className="font-bold text-[12px]">India</span>
        <p className="text-[12px]">© 2023 Nike, Inc. All Rights Reserved</p>
        </div>
        <div>
            <ul className="text-[12px] md:flex gap-4">
                <li>Guides</li>
                <li>Terms of Sale</li>
                <li>Terms to Use</li>
                <li>Nike Privacy Policy</li>
            </ul>
        </div>
    </div>


    </div>
  );
}
