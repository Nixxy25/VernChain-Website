import Heropage from "./components/sections/Header/heropage";
import AboutUs from "./components/sections/aboutUs";
import ServicesPage from "./components/sections/servicespage";
import PricePage from "./components/sections/pricepage";
import TestimonialComponent from "./components/sections/Testimonial/testimonialComponent";
import CryptoPage from "./components/sections/crypto";
import NewsPage from "./components/sections/newspage";
import Footer from "./components/sections/footer";
import "./App.css";
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};



const App = (props) => {
  return (
    <div >
      <div id="back-to-top-anchor" />
      
      <Heropage />
      <AboutUs />
      <ServicesPage />
      <PricePage />
      <TestimonialComponent />
      <CryptoPage />
      <NewsPage />
      <Footer />

      <ScrollTop {...props}>
      <Fab size="small" aria-label="scroll back to top" className="">
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollTop>
    </div>
  )
}

export default App;