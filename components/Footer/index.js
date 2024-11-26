import styles from "./styles";
import { footerLinks } from "./static";
import { AiOutlineYoutube as Youtube } from "react-icons/ai";
import { IoLogoInstagram as Instagram } from "react-icons/io5";
import { GrLinkedinOption as Linkedin } from "react-icons/gr";

const Footer = () => (
  <section
    className={`${styles.flexCenter} ${styles.paddingY} flex-col  px-10 mx-auto bg-green_gradient w-[100%] rounded-t-3xl`}
  >
    <div
      className={`${styles.flexStart} md:flex-row flex-col mb-8 mx-auto sm:w-[80vw] w-[90vw] `}
    >
      <div className="flex-[1] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className="font-poppins text-[18px] leading-[27px]  text-white font-semibold">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className=" flex justify-between items-center md:flex-row flex-col gap-5 pt-6 border-t-[1px]  mx-auto sm:w-[90%] w-[100%] border-t-[#3F3E45]">
      <p className="font-poppins font-normal  text-[18px] leading-[27px] text-white md:w-[25%] w-[100%] text-center md:text-left">
        Injection
      </p>

      <div className="flex flex-col gap-3 items-center">
        <strong className="text-white text-2xl font-bold">
          Health Commerce
        </strong>
        <div className="flex gap-5 items-center">
          <Youtube className=" text-white text-[2rem] cursor-pointer" />
          <Instagram className=" text-white text-[1.5rem] cursor-pointer" />
          <Linkedin className=" text-white text-[1.5rem] cursor-pointer" />
        </div>
      </div>

      <div className="flex flex-col sm:gap-0 gap-4 ">
        <p className="font-poppins  text-center sm:text-[18px] text-[16px] leading-[27px] text-white font-bold">
          <span>About us</span>&nbsp;|&nbsp;<span>Privacy Policy</span>
          &nbsp;|&nbsp;<span>Terms Of Use</span>
        </p>
        <p className="font-poppins font-bold text-center text-[18px] leading-[27px] text-white">
          © 2024 private limited
        </p>
      </div>
    </div>
  </section>
);

export default Footer;
