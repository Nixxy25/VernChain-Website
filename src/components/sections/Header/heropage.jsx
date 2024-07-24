import Navbar from "../Header/navbar";
import { PrimaryButtons } from "../../Buttons/buttons";
import { SecondaryButtons } from "../../Buttons/buttons";
import HeroImage from "../../../assets/Images/vernchain-image.png";
import logo1 from "../../../assets/Images/Logo (3).png";
import logo2 from "../../../assets/Images/Logo (4).png";
import logo3 from "../../../assets/Images/Logo (5).png";
import logo4 from "../../../assets/Images/Logo (6).png";


const Heropage = () => {
  return (
    <div className="">
        <Navbar />

        <div className="relative flex max-sm:flex-col pb-64 max-sm:pb-40 max-lg:pb-32 max-sm:ml-8">
            <div className="mx-24 my-6  flex flex-col gap-12 mt-40 z-10 w-1/2 max-lg:w-full max-sm:mx-0 max-sm:mt-10  max-lg:mt-16 max-lg:mx-16">
                <h1 className="text-6xl font-bold text-white tracking-wider leading-[4rem] max-lg:text-5xl max-sm:text-3xl">Trusted Crypto Preservation</h1>
                <p className="text-xl font-[400] tracking-widest leading-[2rem] w-10/12" >Lorem ipsum dolor sit amet consectetur. Duis morbi scelerisque lectus sodales rhoncus.</p>
                <div className="flex gap-8">
                    <SecondaryButtons>Get Started</SecondaryButtons>
                    <PrimaryButtons>Learn More</PrimaryButtons>
                </div>
            </div>

            <div className="absolute top-0  -right-0 w-3/4 max-sm:w-full max-sm:top-96 max-lg:top-12 lg:-z-10"><img className="" src={HeroImage}></img></div>
        </div>

        <div className="mx-6 max-sm:pt-40 ">
            <div className="grid grid-cols-4 px-4 py-8 rounded-md justify-around items-center bg-[#c9fa49] max-sm:grid-cols-4 max-sm:gap-4 max-sm:py-4 max-lg:gap-8 ">
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