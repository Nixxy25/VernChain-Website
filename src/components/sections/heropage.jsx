import Navbar from "./navbar";
import Buttons from "../buttons";
import HeroImage from "../../assets/Images/vernchain-image.png";
import logo1 from "../../assets/Images/Logo (3).png";
import logo2 from "../../assets/Images/Logo (4).png";
import logo3 from "../../assets/Images/Logo (5).png";
import logo4 from "../../assets/Images/Logo (6).png";


const Heropage = () => {
  return (
    <div className="">
        <Navbar />

        <div className="relative flex justify-between items-center pb-60 ">
            <div className="mx-24 my-6  flex flex-col gap-12 w-1/2 mt-40 z-10">
                <h1 className="text-7xl font-bold">Trusted Crypto Preservation</h1>
                <p className="text-xl font-bold">Lorem ipsum dolor sit amet consectetur. Duis morbi scelerisque lectus sodales rhoncus.</p>
                <div className="flex gap-8">
                    <Buttons />
                    <Buttons />
                </div>
            </div>

            <div className="absolute top-0 -right-0 w-3/4 -z-10"><img className="" src={HeroImage}></img></div>
        </div>

        <div className="mx-6 ">
            <div className="flex px-4 py-8 rounded-md justify-around bg-[#c9fa49] ">
                <img src={logo1} alt="logo1"></img>
                <img src={logo2} alt="logo2"></img>
                <img src={logo3} alt="logo3"></img>
                <img src={logo4} alt="logo4"></img>
            </div>
        </div>
    </div>
  )
}

export default Heropage;