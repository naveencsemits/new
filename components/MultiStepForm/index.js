import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Transition = ({ data, nextStep }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      nextStep();
    }, 2000);
    return () => clearTimeout(timer);
  }, [nextStep]);

  return (
    <div className="flex flex-col items-start justify-center space-y-6">
      <img src={data.image} alt={data.title} className="w-[80px]" />
      <h2 className="text-3xl text-dark_beige font-bold" data-aos="fade-up">
        {data.title}
      </h2>
    </div>
  );
};

const PersonalDetails = () => {
  const [formData, setFormData] = useState({
    state: "",
    slot: "",
    name: "",
    email: "",
    phone: "",
  });

  const states = ["California", "Texas", "Florida", "New York", "Illinois"];
  const today = new Date();
  const slots = Array.from({ length: 5 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    return date.toISOString().split("T")[0]; // Format: YYYY-MM-DD
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted successfully!");
    window.location.href = "/";
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" h-[400px] flex flex-col justify-center w-full "
    >
      <h1 className="text-2xl font-semibold text-gray-700 mb-6">
        Schedule Appointment
      </h1>

      {/* State Selection */}
      <div className="mb-4">
        <label htmlFor="state" className="block text-gray-700 font-medium mb-2">
          Select State
        </label>
        <select
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="w-full border border:none bg-transparent p-2 rounded-lg outline-none"
          required
        >
          <option value="" disabled>
            Choose a state
          </option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      {/* Slot Selection */}
      <div className="mb-4">
        <label htmlFor="slot" className="block text-gray-700 font-medium mb-2">
          Select Slot
        </label>
        <select
          id="slot"
          name="slot"
          value={formData.slot}
          onChange={handleChange}
          className="w-full border border:none bg-transparent p-2 rounded-lg outline-none"
          required
        >
          <option value="" disabled>
            Choose a date
          </option>
          {slots.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      </div>

      {/* Name */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border:none bg-transparent p-2 rounded-lg outline-none"
          placeholder="Enter your name"
          required
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border:none bg-transparent p-2 rounded-lg outline-none"
          placeholder="Enter your email"
          required
        />
      </div>

      {/* Phone */}
      <div className="mb-6">
        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border:none bg-transparent p-2 rounded-lg outline-none"
          placeholder="Enter your phone number"
          required
        />
      </div>

      <button
        type="submit"
        className="border font-medium py-2 px-4 rounded-lg  block  mx-auto "
      >
        Submit
      </button>
    </form>
  );
};

const Question = ({ data, handleOptionSelect }) => {
  return (
    <div className="h-[400px] flex flex-col justify-center">
      <svg
        width="69.75539568345324"
        height="24"
        viewBox="0 0 404 139"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#BD7558">
          <path d="M328.3,120.5 C328.3,114.6 331.9,110.7 339,110.7 C347.3,110.7 349.7,113.6 352.6,125.6 C353.6,129.7 356.1,132.2 362.6,132.2 C371.4,132.2 376.2,127.4 376.2,120.3 C376.2,114.1 369.9,109.1 357.6,101.3 C344.1,93 336.7,85.1 336.7,73.5 C336.7,55.5 356.7,44.7 375,44.7 C395.6,44.7 403.5,53.5 403.5,61.8 C403.5,67.3 399.9,70.3 393.7,70.3 C385.9,70.3 383.5,67.2 380.9,57.9 C379.7,53.2 377.3,51.3 372.6,51.3 C365.2,51.3 360.2,55.1 360.2,62 C360.2,68.6 366.7,72.7 381,81.7 C394.5,89.6 400.5,98.3 400.5,108.5 C400.5,125.3 382.4,138.9 359.8,138.9 C337.3,138.6 328.3,129.4 328.3,120.5"></path>
          <path d="M9.9,42.7 C9.9,38.8 9.9,26.7 9.5,24.3 C8.9,21 8,20.8 2.8,19.5 C1,19.1 0.6,17.8 0.6,16.4 C0.6,14.6 0.8,14.4 6.3,13.3 C17.1,10.8 26.2,7.1 35,2 C36.8,0.7 37.2,0.7 37.6,0.7 C39.1,0.7 39.1,2.4 39.1,4.6 L39.1,24 L38.9,55.6 C38.9,57.6 38.9,58.6 39.8,58.6 C40,58.6 40.4,58.6 42.8,56.4 C51.3,49.2 60.9,44.9 72,44.9 C80.3,44.9 87.9,47.5 93.6,53.6 C98.6,58.8 99.3,66.5 99.3,75 L99.3,124.3 C99.3,128.7 100.2,130.4 105.8,131.9 C105.8,131.9 107.3,132.6 110.6,132.6 C113.9,132.6 115.2,132.1 115.2,132.1 C121.3,130.3 121.3,128 121.3,118.4 L121.1,94.4 C121.1,90.5 120.9,71.1 120.5,68.7 C119.9,65.4 119,65.2 113.8,63.9 C112,63.5 111.6,62.2 111.6,60.8 C111.6,59 111.8,58.8 117.3,57.7 C128,55.3 137.1,51.6 145.9,46.4 C147.7,45.1 148.1,45.1 148.5,45.1 C150,45.1 150,46.8 150,49 L150,119.9 C150,128.6 150.7,130.2 157,131.9 C157,131.9 159,132.6 162.7,132.6 C166.3,132.6 168.3,131.9 168.3,131.9 C175.7,130.1 175.7,127.5 175.7,118.6 C175.7,103.1 175.7,83.1 175.1,72 C174.9,65.3 174.7,65.2 165.9,63.7 C163.7,63.3 163.5,62.2 163.5,60.7 C163.5,58.5 164.4,58.3 167.7,57.7 C175.5,56 187.5,52.9 198,46.8 C201.3,44.8 201.7,44.8 202.2,44.8 C203.5,44.8 203.5,46.3 203.5,47.4 L203.5,55.3 C203.5,57.1 203.5,57.9 204.4,57.9 C205,57.9 205.3,57.9 206.6,56.6 C215.7,48.5 223.6,44.6 233.8,44.6 C243,44.6 250.4,47.6 255.8,54.9 C258.6,58.6 258.8,58.8 259.5,58.8 C259.9,58.8 260.2,58.8 263.6,55.7 C269.3,50.3 278.9,44.4 291.5,44.4 C293.2,44.4 309.4,44.6 315.9,56 C318.3,60.2 319.6,62.5 319.6,87 L319.6,123.8 C319.6,126.9 319.6,129.9 325.5,131.4 C327.7,132 329,132.3 329,134.9 C329,136.6 328.6,137.7 326,137.9 L320.5,137.9 L300.2,137.9 L285.1,137.9 C283.3,137.9 281,137.5 281,134.4 C281,132.6 282.1,132.2 284.1,131.6 C287.8,130.5 290.2,129.9 290.2,120.9 L290.2,103 C290.2,97.8 290.2,74.4 289.8,71.2 C289.6,68.1 288.7,57.2 276.3,57.2 C272.6,57.2 261.7,60 261.7,70.3 L261.7,123.3 C261.7,128.7 262.6,130 268.5,131.4 C270.5,132 271.8,132.3 271.8,134.4 C271.8,137.5 270.1,137.9 265.2,137.9 L249.1,137.9 L228,137.9 C225.4,137.9 223.4,137.7 223.4,134.8 C223.4,133 224.1,132.6 226,132 C232.7,130 232.7,127.4 232.7,119.1 C232.7,110.4 232.7,74.4 231.8,68.5 C230.5,60.9 224,58.5 219.1,58.5 C212.8,58.5 206.7,62.9 204.9,67.6 C204.3,69.1 204.3,88.7 204.3,91.8 C204.3,97.3 204.3,121.2 204.7,124.9 C205.1,129.9 209.1,131 213,131.9 C214.8,132.5 215.8,132.6 215.8,134.9 C215.8,137.9 213.4,138 210.8,138 L189.6,138 L171,138 L153.6,138 L137.2,138 L116.1,138 L106.3,138 L101,138 L84.2,138 L67.9,138 L62.7,138 C61.2,137.8 60.7,136.3 60.7,135 C60.7,133.2 61.6,132.6 63.3,132.2 C66.1,131.5 67.9,130.9 68.7,128.9 C69.6,126.3 69.6,121.3 69.8,117.4 C70,99.3 70,98.9 70,78.6 C70,70.7 70,57.9 56.1,57.9 C49.8,57.9 45.2,61.6 43.7,63.1 C40.2,66.4 38.9,67.7 38.9,74.6 L38.9,123.7 C38.9,128.3 39.5,130.2 45.7,131.8 C47.4,132.2 49.2,132.5 49.2,134.4 C49.2,137.7 46.8,137.9 43.5,137.9 L28.2,137.9 L5.5,137.9 C2.2,137.9 0.7,137.9 0.7,134.9 C0.7,133.1 1.8,132.7 3.8,132.1 C9.9,129.9 9.9,127.5 9.9,118.4 L9.9,96 L9.9,56.3 L9.9,42.7 Z"></path>
          <path d="M135.8,7.5 C126.7,7.5 119.9,15.3 119.9,23.6 C119.9,33.8 128,39.1 135.2,39.1 C143.5,39.1 151.1,32.3 151.1,22.8 C151.1,14.7 144.6,7.5 135.8,7.5"></path>
        </g>
      </svg>
      <br />

      <h2
        className="text-3xl text-black font-bold mb-4"
        data-aos="zoom-in-right"
      >
        {data.question}
      </h2>
      <ul className="space-y-2">
        {data.options.map((item, idx) => (
          <li
            key={idx}
            onClick={() => handleOptionSelect(idx)}
            className="px-3 py-4 border hover:border-black rounded-[1rem] cursor-pointer"
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

const MultiStepForm = ({ data: questions }) => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
    AOS.refresh();
  }, []);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const handleOptionSelect = (selectedOption) => {
    console.log(`Option ${selectedOption + 1} selected`);
    nextStep(); // Automatically move to the next step on selection
  };

  const currentData = questions?.find((item) => item.id === step);

  if (!currentData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-3xl font-bold" data-aos="fade-in">
          Thank you for completing the form!
        </h2>
      </div>
    );
  }

  const isTransition = questions.some(
    (item) => item.id === step && item.type === "transition"
  );
  const backgroundColor = isTransition ? "bg-beige" : "bg-white";
  const color = isTransition ? "text-dark_beige" : "text-black";
  return (
    <div
      className={`flex items-center justify-center h-screen ${backgroundColor} ${color}`}
    >
      <div className="flex flex-col items-center justify-center relative w-full lg:max-w-[45%] h-[100%] px-6 pb-4">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          style={{ width: "100%" }}
        >
          {questions
            .filter((item) => item.id === step)
            .map((item) =>
              item.type === "question" ? (
                <div key={item.id}>
                  <Question
                    data={item}
                    handleOptionSelect={handleOptionSelect}
                  />
                </div>
              ) : item.type == "form" ? (
                <PersonalDetails />
              ) : (
                <div key={item.id}>
                  <Transition data={item} nextStep={nextStep} />
                </div>
              )
            )}
        </motion.div>
      </div>
    </div>
  );
};

export default MultiStepForm;
