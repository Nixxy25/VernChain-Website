import vernchainLogo from "../../assets/Images/vernchain.png"
import Buttons from "../buttons";

const Navbar = () => {
    return(
        <nav className="">
            <div className="flex items-center justify-between px-24 py-6 pb-8">
                <div><img className="w-64" src={vernchainLogo}></img></div>
                
                <div>
                    <ul className="flex text-xl gap-12 items-center"> 
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Price</li>
                        <li>News</li>
                        <li><Buttons /></li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;