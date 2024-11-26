const Heading = ({ heading, subheading }) => {
  return (
    <div
      data-aos="fade-down-right"
      className="text-black text-3xl sm:text-4xl md:text-5xl sm:px-4 pt-10 pb-8 font-bold"
    >
      <span>{heading} </span>
      <span className="bg-gradient-to-r from-[#9E4952] to-[#DC926E] bg-clip-text text-transparent">
        {subheading}
      </span>
    </div>
  );
};

export default Heading;
