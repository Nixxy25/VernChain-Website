import whatsapp from "../../assets/Images/ri_whatsapp-line.png";
import facebook from "../../assets/Images/ri_facebook-fill.png";
import instagram from "../../assets/Images/ri_instagram-line.png";
import X from "../../assets/Images/Frame 92.png";
import vernchainLogo from "../../assets/Images/vernchain.png";

const Footer = () => {
  return (
    <div className="mt-12 px-24 pt-12  pb-6 flex flex-col gap-10 border-t border-[#c9fa49] bg-[#2A2A2A] max-sm:px-8">
        <div className="justify-between flex lg:items-center max-sm:flex-col gap-8">
            <div className="flex gap-6 flex-col w-2/5 max-sm:w-full">
                <div className="w-64 max-sm:w-48"><img src={vernchainLogo}></img></div>
                <h3 className="text-lg leading-8 tracking-widest">Lorem ipsum dolor sit amet consectetur. Fusce nisl lacus elementum neque.</h3>
            </div>

            <div className="flex gap-6 flex-col">
                <h1 className="font-bold text-xl tracking-widest">Contact Us</h1>

                <div className="text-lg  tracking-widest">
                    <h3>(524) 333 6565</h3>
                    <h3>example@email.com</h3>
                </div>
            </div>
        </div>

        <div>
            <div>
                <div className=" grid grid-cols-6  items-center border-b border-gray-400 pb-4 max-sm:grid-cols-1 max-sm:gap-6">
                    <ul className="col-start-1 col-span-3 text-xl font-bold max-sm:col-span-2">
                        <div className="flex justify-between tracking-widest max-sm:flex-col max-sm:gap-4">
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Price</li>
                            <li>News</li>
                        </div>
                    </ul>
                    

                    <div className="col-start-5 col-span-7 max-sm:col-span-2 max-sm:pb-6">
                        <div className="flex lg:justify-end  gap-5">
                            <img className="max-sm:h-10" src={whatsapp}></img>
                            <img className="max-sm:h-10" src={X}></img>
                            <img className="max-sm:h-10" src={facebook}></img>
                            <img className="max-sm:h-10" src={instagram}></img>
                        </div>
                    </div>
                </div>

                <div className="flex pt-4 justify-between lg:text-lg tracking-widest max-sm:flex-col gap-4">
                    <div>© 2024 Vernchain Template  •  All Rights Reserved</div>
                    <div className="flex gap-6">
                        <p>Terms</p>
                        <p>Privacy</p>
                    </div>
                </div>
            </div>

            <div></div>
        </div>
    </div>
  )
}

export default Footer;