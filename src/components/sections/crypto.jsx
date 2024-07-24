import image1 from "../../assets/Images/Frame.png";
import image2 from "../../assets/Images/Group 441 (1).png";
import image3 from "../../assets/Images/Group 442.png";
import image4 from "../../assets/Images/Group 440.png";


const CryptoPage = () => {
  return (
    <div className="bg-[#c9fa49] relative my-20 -z-10">
        <div className="absolute bottom-0 max-sm:w-20 max-lg:w-44"><img src={image1}></img></div>
        <div className="absolute right-0 max-lg:w-64 max-sm:w-32"><img src={image2}></img></div>
        <div className="absolute max-sm:w-64 max-lg:w-[32rem]"><img src={image3}></img></div>
        <div className="absolute bottom-0 right-0 max-sm:w-64 max-lg:w-[32rem]"><img src={image4}></img></div>

        <div className="flex justify-center items-center h-[28rem] max-sm:h-[20rem] ">
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-[#191919] text-4xl tracking-wider pb-6 max-sm:text-xl">Start Your Crypto Odyssey With Us</h1>
                <h3 className="text-lg text-[#1a1a1a] font-[500] w-3/4 max-sm:w-10/12 text-center pb-12 tracking-widest max-sm:text-sm">Lorem ipsum dolor sit amet consectetur. Duis morbi scelerisque lectus sodales rhoncus.</h3>
                <div className="flex gap-6 items-center">
                <button className="rounded-3xl cursor-pointer text-lg text-[#b3de43] bg-[#2A2A2A] tracking-widest text-[#b3de43] px-4 py-2 max-sm:text-sm px-4">Get Started</button>
                  <button className="rounded-3xl cursor-pointer text-lg text-black font-[400] border border-[#2A2A2A] tracking-widest text-[#b3de43] max-sm:text-sm px-4 py-2">Learn More</button>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default CryptoPage;