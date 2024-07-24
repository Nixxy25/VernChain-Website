import vernchainLogo from "../../../assets/Images/vernchain.png"
import { PrimaryButtons } from "../../Buttons/buttons";

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
                    <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;