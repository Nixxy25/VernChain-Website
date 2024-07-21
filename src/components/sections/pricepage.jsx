import { priceData } from "../../data";
import Buttons from "../Buttons/buttons";
import check from "../../assets/Images/material-symbols_check.png";

const PricePage = () => {
  return (
    <div className="mx-24 my-12 ">
        <h1 className="text-[#c9fa49] font-bold text-xl pb-4">PRICE</h1>

        <div className="grid grid-cols-5 gap-6">
            <div className="flex flex-col col-start-1 col-span-2 gap-4">
                <h2 className="font-bold text-5xl pb-4">Flexible Pricing for Every Project</h2>
                <p className="pb-6 text-xl">Lorem ipsum dolor sit amet consectetur. Sapien tortor purus vivamus mi non commodo 
                pellentesque iaculis. Enim pellentesque maecenas mauris varius.</p>
                <Buttons />
            </div>

            <div className="flex col-start-3 col-span-7 gap-8">
                {priceData.map((items) => (
                    <div key={items.id} className="border bg-[#191919] border-[#c9fa49] text-lg p-8 rounded-3xl h-[32rem] flex flex-col gap-8 items-center text-center">
                        <h3 className="font-bold text-xl">{items.title}</h3>
                        <div className="flex items-end">
                            <span className="font-bold text-5xl">$</span>
                            <h2 className="text-6xl font-bold pr-2">{items.price}</h2>
                            <span className="text-xl font-bold">/prj</span>
                        </div>
                        <p>{items.description}</p>
                        <ul className="pb-8 flex flex-col gap-2">
                            {items.detail.map((details, index) => (
                                <li key={index}>
                                    <div className="flex gap-2">
                                        <img src={check}></img>
                                        <h3>{details}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className=""><Buttons /></div>
                    </div>
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default PricePage;