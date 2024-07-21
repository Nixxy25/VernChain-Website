import aboutImg from "../../assets/Images/Frame 29.png";
import Buttons from "../Buttons/buttons";


const AboutUs = () => {
  return (
    <div>
        <div className="flex items-center justify-between gap-6 mr-16">
            <div className="w-full"><img src={aboutImg} alt="aboutImg"></img></div>

            <div className="w-3/4">
                <h2 className="uppercase text-[#c9fa49] font-bold text-xl pb-2">About Us</h2>
                <h2 className="text-5xl font-bold pb-10">Crypto Saving Base of Your Choice</h2>
                <p className="pb-10 text-xl leading-8">Lorem ipsum dolor sit amet consectetur. Pharetra mi quis arcu felis porttitor eget consectetur. Sed amet ridiculus sit nullam euismod. At mattis diam dui duis felis sem posuere lectus. Tincidunt a 
                quis ornare mauris mauris aliquet interdum. Ac volutpat dolor quam adipiscing amet vitae in.</p>
                <Buttons />
            </div>
        </div>
    </div>
  )
}

export default AboutUs;