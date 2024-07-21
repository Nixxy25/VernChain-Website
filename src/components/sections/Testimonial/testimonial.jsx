import abbrvStart from "../../../assets/Images/Vector (1).png";
import abbrvEnd from "../../../assets/Images/Frame 45.png";


const Testimonial = ({ name,company,description,image} ) => {
  return (
    <div className="grid grid-cols-2 items-center">

       <div className=""><img src={image}></img></div>

       <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-[#c9fa49] uppercase">Testimonials</h2>
            <h1 className="text-5xl font-bold">Client Stories, Vernchain Success</h1>
          </div>

          <div className="text-xl flex flex-col gap-4">
            <div><img src={abbrvStart} className=""></img></div>
            <p className="px-6 pb-4">{description}</p>
            <div className="flex justify-between pl-6">
              <div className="flex gap-4">
                <h2 className="font-bold">{name}</h2>  
                <span className="font-bold">/</span>
                <h3>{company}</h3>
              </div>
              <div  className="cols-start-4 col-span-5"><img src={abbrvEnd}></img></div>
            </div>
          </div>
       </div>

       
    </div>
  )
}

export default Testimonial;