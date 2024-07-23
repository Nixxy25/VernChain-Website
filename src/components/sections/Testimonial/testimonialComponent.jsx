import { testimonial } from "../../../data";
import Testimonial from "./testimonial";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TestimonialButtonGroup from "./testimonialButton";


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
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

const TestimonialComponent = () => {
    return(
        <div className="mr-24 ml-8 my-20 ">

            <Carousel 
                responsive={responsive} 
                customButtonGroup={<TestimonialButtonGroup />} 
                removeArrowOnDeviceType={["tablet", "mobile","desktop","superLargeDesktop"]}
                renderButtonGroupOutside
                swipeable={true}
                draggable={true}
                infinite={true}

            >
            {testimonial.map((items) => (
                <Testimonial 
                    key={items.id}
                    description={items.description}
                    name={items.name}
                    company={items.company}
                    image={items.imageUrl}
                />
            ))}
            </Carousel>
        </div>
    )
}

export default TestimonialComponent;