import { services } from "../../data";

const ServicesPage = () => {
  return (
    <div className="flex flex-col mx-24 my-12 pb-32 gap-12">
        <div className="text-center flex flex-col gap-2">
            <h1 className="uppercase text-xl text-[#c9fa49] font-bold tracking-[0.4rem]">Services</h1>
            <h2 className="text-4xl tracking-widest  font-bold">Innovate with Blockchain Technology</h2>
        </div>
      
        <div className="grid grid-cols-3 gap-10 items-center ">
            {services.map((item) => (
                <div key={item.id} className="flex flex-col text-center gap-6 items-center" >
                    <img src={item.imageUrl} className=""/>
                    <div className="font-bold text-lg tracking-widest">{item.title}</div>
                    <div className="px-2 text-lg leading-8 tracking-widest">{item.description}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ServicesPage;