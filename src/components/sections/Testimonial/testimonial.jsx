import abbrvStart from "../../../assets/Images/Vector (1).png";
import abbrvEnd from "../../../assets/Images/Frame 45.png";


const Testimonial = ({ name,company,description,image} ) => {
  return (
    <div className="grid grid-cols-2 items-center max-sm:grid-cols-1">

       <div className=""><img src={image}></img></div>

       <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-[#c9fa49] uppercase tracking-[0.4rem]">Testimonials</h2>
            <h1 className="text-4xl font-bold tracking-widest max-sm:text-2xl">Client Stories, Vernchain Success</h1>
          </div>

          <div className="text-xl flex flex-col gap-4 max-sm:pb-4">
            <div><img src={abbrvStart} className=""></img></div>
            <p className="px-6 pb-4 max-sm:px-0 text-lg leading-8 tracking-widest max-sm:text-sm">{description}</p>
            <div className="flex justify-between pl-6 max-sm:pl-0">
              <div className="flex gap-4 max-sm:text-sm max-sm:gap-2">
                <h2 className="font-bold tracking-widest">{name}</h2>  
                <span className="font-bold">/</span>
                <h3 className="tracking-widest">{company}</h3>
              </div>
              <div  className="cols-start-4 col-span-5"><img src={abbrvEnd}></img></div>
            </div>
          </div>
       </div>

       
    </div>
  )
}

export default Testimonial;