import { services } from "../../data";

const ServicesPage = () => {
  return (
    <div className="flex flex-col mx-24 my-12 pb-32 gap-12">
        <div className="text-center">
            <h1 className="uppercase text-xl text-[#c9fa49] font-bold">Services</h1>
            <h2 className="text-2xl font-bold">Innovate with Blockchain Technology</h2>
        </div>
      
        <div className="grid grid-cols-3 gap-10">
            {services.map((item) => (
                <div key={item.id} className="flex flex-col text-center gap-6 items-center" >
                    <img src={item.imageUrl} className=""/>
                    <div className="font-bold text-xl">{item.title}</div>
                    <div className="px-2 text-gray-400">{item.description}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ServicesPage;