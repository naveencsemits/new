import { ParallaxProvider } from "react-scroll-parallax";
import Contact from "../views/Contact";
import FullPageScroll from "../components/FullPageScroll";
import Header from "../components/Header";
import MapsContribution from "../views/MapsContribution";
import MySelf from "../views/MySelf";
import Outer from "../views/Outer";
import Projects from "../views/Projects";
import Reviews from "../views/Reviews";
import SideElements from "../components/SideElements";
import TopScrolledBar from "../components/TopScrolledBar";
import Works from "../views/Works";
import {
  contact,
  graphics,
  header,
  mapsContribution,
  mySelf,
  outer,
  projects,
  reviews,
  works,
} from "../utils";
import sideElements from "../utils/sideElements";
import Cursor from "../components/Cursor";
import PreLoader from "../components/PreLoader";
import Certifications from "../views/Certifications";
import certifications from "../utils/certifications";
import WaterMark from "../components/WaterMark";
import Carousel from "../views/Carousel";
import HeroBanner from "../components/Home/HeroBanner";
import Products from "../components/Home/Products";
import Treatments from "../components/Home/Treatments";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Strip from "../components/Strip";
import FAQ from "../components/Faq";
import BackgroundVideo from "../components/BackgroundVideo";
import People from "../components/People";
import HeroBanner2 from "../components/Home/HeroBanner2";
import ContinuousScroll from "../components/Reviews/Continous";
import StepProcess from "../components/StepProcess";
import TimeLine from "../components/TimeLine/TimeLine";

const ViewElement = ({ children, id }) => (
  <div id={id} className="view-element">
    {children}
  </div>
);

export default function Home() {
  return (
    <>
      {/* <PreLoader /> */}

      {/* <Cursor /> */}
      <ParallaxProvider>
        {/* <Sidebar /> */}
        {/* <TopScrolledBar /> */}

        <FullPageScroll />
        <Strip />
        <Header />

        <ViewElement id="hero">
          <HeroBanner2 />
          {/* <BackgroundVideo
            Component={HeroBanner}
            videoUrl={`videos/hero.mp4`}
          /> */}
        </ViewElement>
        {/* <SideElements data={sideElements} /> */}

        <ViewElement id="home">
          <Outer data={outer} />
        </ViewElement>
        {/* <img src="https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit/cms/hims/home/09-20-24/Hims-WL-HP-Special-Discounts-d" /> */}
        <ViewElement id="products">
          <Products />
        </ViewElement>
        <ViewElement id="treatments">
          <Treatments />
        </ViewElement>
        
      
    
        <ViewElement>
          <FAQ />
        </ViewElement>

        <ViewElement id="reviews">
          <Reviews data={reviews} />
        </ViewElement>

        <ViewElement>
          <Footer />
        </ViewElement>
        <WaterMark />
      </ParallaxProvider>
    </>
  );
}
