import vernchainLogo from "../../../assets/Images/vernchain.png"
import { PrimaryButtons } from "../../Buttons/buttons";
import AnchorTemporaryDrawer from "./sidebar";

const Navbar = () => {
    return(
        <nav className="">
            <div className="flex items-center justify-between px-24 py-6 pb-8 max-sm:px-8">
                <div><img className="w-64 max-sm:w-40 cursor-pointer" src={vernchainLogo}></img></div>
                
                <div className="max-sm:hidden">
                    <ul className="flex text-lg tracking-widest gap-10 font-[400] cursor-pointer items-center"> 
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Price</li>
                        <li>News</li>
                        <li><PrimaryButtons>Get Started</PrimaryButtons></li>
                    </ul>
                </div>
                
                <div className="lg:hidden">
                   

                    <AnchorTemporaryDrawer/>
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar;