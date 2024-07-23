
import leftArrow from "../../../assets/Images/Frame 41.png";
import rightArrow from "../../../assets/Images/Frame 42.png";

const TestimonialButtonGroup = ({ next, previous }) => {
    
    return (
      <div className="carousel-button-group  flex justify-end gap-6"> 
        <button  onClick={() => previous()} > <img src={leftArrow}></img></button>
        <button onClick={() => next()} > <img src={rightArrow}></img></button>
      
      </div>
    );
  };

  export default TestimonialButtonGroup;

