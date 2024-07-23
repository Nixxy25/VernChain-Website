import aboutImg from "../../assets/Images/Frame 29.png";
import Buttons from "../Buttons/buttons";


const AboutUs = () => {
  return (
    <div>
        <div className="grid grid-cols-2 justify-between gap-20 items-center mr-16 max-sm:grid-cols-1 ">
            <div className=""><img src={aboutImg} alt="aboutImg"></img></div>

            <div className="max-sm:pl-8">
                <h2 className="uppercase text-[#c9fa49] tracking-[0.4rem] font-bold text-xl pb-2">About Us</h2>
                <h2 className="text-4xl font-bold pb-10 tracking-widest leading-[3rem] text-white max-sm:text-2xl">Crypto Saving Base of Your Choice</h2>
                <p className="pb-10 lg:text-lg tracking-widest leading-[2rem]">Lorem ipsum dolor sit amet consectetur. Pharetra mi quis arcu felis porttitor eget consectetur. Sed amet ridiculus sit nullam euismod. At mattis diam dui duis felis sem posuere lectus. Tincidunt a 
                quis ornare mauris mauris aliquet interdum. Ac volutpat dolor quam adipiscing amet vitae in.</p>
                <Buttons />
            </div>
        </div>
    </div>
  )
}

export default AboutUs;