import image1 from "../../assets/Images/Frame.png";
import image2 from "../../assets/Images/Group 441 (1).png";
import image3 from "../../assets/Images/Group 442.png";
import image4 from "../../assets/Images/Group 440.png";
import { BlackButtons } from "../Buttons/buttons";
import { UniqueBlackButtons } from "../Buttons/buttons";

const CryptoPage = () => {
  return (
    <div className="bg-[#c9fa49] relative my-20 ">
        <div className="absolute bottom-0 max-sm:w-32"><img src={image1}></img></div>
        <div className="absolute right-0 max-sm:w-32"><img src={image2}></img></div>
        <div className="absolute max-sm:w-32"><img src={image3}></img></div>
        <div className="absolute bottom-0 right-0 max-sm:w-32"><img src={image4}></img></div>

        <div className="flex justify-center items-center h-[28rem] max-sm:h-[20rem]  ">
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-[#191919] text-4xl tracking-wider pb-6 max-sm:text-2xl">Start Your Crypto Odyssey With Us</h1>
                <h3 className="text-lg text-[#1a1a1a] font-[500] w-3/4 text-center pb-12 tracking-widest max-sm:text-sm">Lorem ipsum dolor sit amet consectetur. Duis morbi scelerisque lectus sodales rhoncus.</h3>
                <div className="flex gap-6 items-center">
                  <BlackButtons>Get Started</BlackButtons>
                  <UniqueBlackButtons>Learn More</UniqueBlackButtons>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default CryptoPage;