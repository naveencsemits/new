
import Carousel from "../Caraousel";
import CarouselItem from "../Caraousel/CarouselItem";
import { images } from "../Caraousel/seed";


export default function People() {
  return (
   
       <div className="p-8 bg-[#faf8f2]"> 
      <h2 className="text-black text-[3rem] px-2 py-4 font-bold">
    Happy {" "}
    <span
      style={{
        backgroundImage:
          "linear-gradient(222deg, rgb(158, 73, 82), rgb(220, 146, 110))",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      Customer
    </span>
  </h2>
      
      <Carousel className="  sm:h-[80vh] ">
     
        {images.map((image, index) => (

        <CarouselItem className=" flex items-center justify-center text-white">
       
      
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-[80vw] h-[30vh]flex-shrink-0 object-cover rounded m-auto"
          />
         
        
           </CarouselItem>
        ))}
       
      
      </Carousel>
    </div>
  );
}
