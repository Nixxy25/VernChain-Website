import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { newsData } from '../../data';
import more from "../../assets/Images/Vector (5).png"
import Buttons from '../Buttons/buttons';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const NewsPage = () => {
  return (
    <div className='my-24 flex flex-col gap-12'>
        <div className='flex justify-center items-center flex-col gap-2'>
            <h3 className='font-bold text-xl text-[#c9fa49] tracking-[0.4rem] uppercase'>News</h3>
            <h1 className='font-bold text-3xl tracking-widest max-sm:text-2xl max-sm:text-center'>Dive into Our Dynamic News Feed</h1>
        </div>

        <div className='flex flex-col gap-10'>
            <Carousel 
                className=' flex items-center px-2'
                responsive={responsive} 
                showDots={true}
                removeArrowOnDeviceType={["tablet", "mobile","desktop","superLargeDesktop"]}
                swipeable={true}
                draggable={true}
                infinite={true}
                // renderDotsOutside={true}
                
            >
            {newsData.map((items)=> (
                <div key={items.id} className='flex justify-evenly items-center'>
                    <div className='border border-[#c9fa49] bg-[#2A2A2A] w-3/4 h-[32rem] rounded-2xl pb-8'>
                        <img src={items.imageUrl} className='rounded-t-2xl '></img>
                        <div className='p-6 flex flex-col gap-6 bg-[#2A2A2A] rounded-b-2xl'>
                            <h2 className='font-bold  tracking-widest'>{items.title}</h2>
                            <p className='tracking-widest text-sm'>{items.description}</p>
                            <div className='flex justify-between'>
                                <h3 className='tracking-widest'>{items.date}</h3>
                                <div className='flex items-center gap-4'>
                                    <h3 className='font-bold text-[#c9fa49] tracking-widest'>See more</h3>
                                    <div className=''><img src={more}></img></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </Carousel>

            <div className='flex justify-center items-center'><Buttons /></div>
        </div>
    </div>
  )
}

export default NewsPage;