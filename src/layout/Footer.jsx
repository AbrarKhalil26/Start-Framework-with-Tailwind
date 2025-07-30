import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiGlobalFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <>
      <div className="text-white bg-dark text-center py-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5 py-4">
            <div>
              <h3 className="text-2xl font-medium uppercase mb-2">Location</h3>
              <p className="mb-2">2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div>
              <h3 className="text-2xl font-medium uppercase mb-2">Around the web</h3>
              <ul className="social list-unstyled flex gap-2 justify-center">
                <li className="w-9 h-9 border rounded-full text-xl flex justify-center items-center">
                  <FaFacebook />
                </li>
                <li className="w-9 h-9 border rounded-full text-xl flex justify-center items-center">
                  <FaTwitter />
                </li>
                <li className="w-9 h-9 border rounded-full text-xl flex justify-center items-center">
                  <FaLinkedinIn />
                </li>
                <li className="w-9 h-9 border rounded-full text-xl flex justify-center items-center">
                  <RiGlobalFill />
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-medium uppercase mb-2">ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark-blue text-center py-6 text-white">
        Copyright © Your Website 2021
      </div>
    </>
  );
};
