import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>

      <div className="flex-1 flex flex-col items-center justify-start mr-10">
        <img src={logo} alt="bankly" className="w-[96px] h-[96px]" /> 
        <span className="font-poppins font-bold text-4xl text-white ml-2">Bankly</span>
      
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">

            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerLink.title}
            </h4>

            <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] cursor-pointer text-dimWhite hover:text-secondary ${index !== footerLink.links.lenght - 1 ? 'mb-4' : 'mb-0'}`}>
                  {link.name}
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>

    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">

      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">2024 Bankly. All Rights Reserved.</p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img key={social.id} src={social.icon} alt={social.id} className={`w-[25px] h-[25px] object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-125 ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}/>
        ))}
      </div>

    </div>

  </section>
)

export default Footer