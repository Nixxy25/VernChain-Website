import aboutImg from "../../assets/Images/Frame 29.png";
import { PrimaryButtons } from "../Buttons/buttons";


const AboutUs = () => {
  return (
    <div className="my-20 pb-20">
        <div className="grid grid-cols-2 justify-between gap-20 max-lg:gap-10 max-sm:gap-20 items-center lg:mr-16 mr-10 max-sm:grid-cols-1 max-sm:flex max-sm:flex-col-reverse ">
            <div className="max-sm:mr-16"><img src={aboutImg} alt="aboutImg"></img></div>

            <div className="max-sm:pl-8 max-sm:mr-0">
                <h2 className="uppercase text-[#c9fa49] tracking-[0.4rem] font-bold text-xl pb-2">About Us</h2>
                <h2 className="text-4xl font-bold pb-10 tracking-widest leading-[3rem] text-white max-lg:text-2xl">Crypto Saving Base of Your Choice</h2>
                <p className="pb-10 lg:text-lg tracking-widest leading-[2rem]">Lorem ipsum dolor sit amet consectetur. Pharetra mi quis arcu felis porttitor eget consectetur. Sed amet ridiculus sit nullam euismod. At mattis diam dui duis felis sem posuere lectus. Tincidunt a 
                quis ornare mauris mauris aliquet interdum. Ac volutpat dolor quam adipiscing amet vitae in.</p>
                <PrimaryButtons>Learn More</PrimaryButtons>
            </div>
        </div>
    </div>
  )
}

export default AboutUs;