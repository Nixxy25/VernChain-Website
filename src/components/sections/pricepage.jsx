import { priceData } from "../../data";
import { PrimaryButtons } from "../Buttons/buttons";
import { BlackButtons } from "../Buttons/buttons";
import check from "../../assets/Images/material-symbols_check.png";

const PricePage = () => {
  return (
    <div className="mx-24 my-12 max-sm:mx-8 max-lg:mx-16">
        <h1 className="text-[#c9fa49] font-bold text-xl pb-4 tracking-[0.4rem]">PRICE</h1>

        <div className="grid grid-cols-5 gap-6 max-lg:grid-cols-1">
            <div className="flex flex-col col-start-1 col-span-2 gap-4 max-lg:col-span-2">
                <h2 className="font-bold text-4xl pb-4 tracking-widest max-sm:text-2xl">Flexible Pricing for Every Project</h2>
                <p className="pb-6 text-lg leading-8 tracking-widest">Lorem ipsum dolor sit amet consectetur. Sapien tortor purus vivamus mi non commodo 
                pellentesque iaculis. Enim pellentesque maecenas mauris varius.</p>
                <PrimaryButtons>Learn More</PrimaryButtons>
            </div>

            <div className="flex col-start-3 col-span-7 gap-8 max-lg:col-span-2 max-sm:flex-col">
                {priceData.map((items, index) => (
                    <div key={index} className={` ${index === 1 ? "bg-[#c9fa49] text-[#191919] font-[300]" : "bg-[#191919]"}  border border-[#c9fa49] text-lg p-8 rounded-3xl h-[32rem] flex flex-col gap-8 items-center text-center`}>
                        <h3 className="font-bold text-xl tracking-wider">{items.title}</h3>
                        <div className="flex items-end">
                            <span className="font-bold text-5xl">$</span>
                            <h2 className="text-6xl font-bold pr-2">{items.price}</h2>
                            <span className="text-xl font-bold">/prj</span>
                        </div>
                        <p className="">{items.description}</p>
                        <ul className="pb-8 flex flex-col gap-2">
                            {items.detail.map((details, detailsIndex) => (
                                <li key={detailsIndex}>
                                    <div className="flex gap-2">
                                        <img className={`${index === 1 ? "check-icon" : ""}`} src={check}></img>
                                        <h3>{details}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="">
                        {index === 1 
                            ? <BlackButtons>Get Started</BlackButtons>
                            : <PrimaryButtons>Get Started</PrimaryButtons>
                        }
                            </div>
                    </div>
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default PricePage;