import Heading from "../../components/Heading";
import Marquee from "../../components/Reviews/Marquee";
import ReviewCarousel from "../../components/Reviews/ReviewCaraousel";

const reviews = [
    { text: "Amazing product! Highly recommend it.Amazing product! Highly recommend it.Amazing product! Highly recommend it.", author: "John Doe", rating: 5 },
    { text: "Fantastic customer service and quality.", author: "Jane Smith", rating: 4 },
    { text: "Exceeded all my expectations!", author: "Emily Davis", rating: 5 },
    { text: "Great value for money.", author: "Michael Brown", rating: 4 },
  ];
  
  export default function Reviews() {
    return (
      <div className="p-8">
        {/* <h2 className="text-black text-[3rem] px-2 py-4 font-bold">
        Customer{" "}
        <span
          style={{
            backgroundImage:
              "linear-gradient(222deg, rgb(158, 73, 82), rgb(220, 146, 110))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Reviews
        </span>
      </h2> */}
      <Heading heading={"Customer"} subheading={"Reviews"}/>
        <ReviewCarousel reviews={reviews} />
      </div>
    );
  }

