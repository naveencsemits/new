import { useRouter } from "next/router";

import { ParallaxProvider } from "react-scroll-parallax";

import FAQ from "../../../components/Faq";
import Footer from "../../../components/Footer";

import StepProcess from "../../../components/StepProcess";
import HeroBanner from "../../../components/HeroBanner/HeroBanner";
import MovableCard from "../../../views/MoveCard";
import Header from "../../../components/Header";
import Strip from "../../../components/Strip";


import Video from "../../../components/Video/Video";
import data from "../../../utils/seed";
import People from "../../../components/People";
import ProductMedia from "../../../components/ProductMedia";
import TimeLine from "../../../components/TimeLine/TimeLine";
import Compound from "../../../components/Compound";
import { reviews } from "../../../utils";
import Reviews from "../../../views/Reviews";
import Treatments from "../../../components/Home/Treatments";
import Measurement from "../../../components/Measurement";
import CertificateOfGuarantee from "../../../components/Certificate";
// import "/styles/projects.scss";
const ViewElement = ({ children, id }) => (
  <div id={id} className="view-element">
    {children}
  </div>
);
function Product({ data }) {
  console.log("data is-----", data);
  return (
    <>
      {/* <FullPageScroll/> */}
      {/* <DetailPageScroll/> */}

      <ParallaxProvider>
        <Strip />
        <Header />
        <ViewElement>
          <HeroBanner data={data["hero_banner"]} />
        </ViewElement>
        
        <ProductMedia />
        <ViewElement>
          <MovableCard data={data["cards"]} />
        </ViewElement>
        <ViewElement>
          <People/>
        </ViewElement>

        
        <ViewElement id="treatments">
          {/* <Treatments data={data["treatments"]} /> */}
          <Treatments/>
        </ViewElement>
        {/* <ViewElement>
          <StepProcess />
        </ViewElement> */}
        


        
        {/* <Certifications data={certifications} /> */}

        {/* <ViewElement>
          <TimeLine/>
        </ViewElement>  */}

        

        <ViewElement>
          <Video data={data["videos"]} />
        </ViewElement>
      
        <ViewElement>
        <Compound/>
        </ViewElement>

        <ViewElement>
          <CertificateOfGuarantee/>
        </ViewElement>
       
        <ViewElement id="reviews">
          <Reviews data={reviews} />
        </ViewElement>

        <ViewElement>
          <FAQ data={data["faqs"]} />
        </ViewElement>
        <Footer />
     
      </ParallaxProvider>
    </>
  );
}

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  if (!id) {
    return <div>Loading...</div>;
  }
  return data[id] ? <Product data={data[id]} /> : <h2>Product not found</h2>;
};

export default ProductPage;
