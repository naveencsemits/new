import { openLink } from "./methods";

const outer = {
  title1: `Tuning into your body, `,
  title2: "one step at a time.",
  decrypTexts: ["Health Commerce", "Weight Management"],
  arr: [
    {
      title1: "Personalised health",
      title2: "sessions",
      primaryColor: "white",
      background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",

      gradient:
        "linear-gradient(127deg, rgb(72, 50, 139) 12.55%, rgb(134, 94, 255) 100%)",
      image:
        "https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit/Hims/homepage/STOR-5569/hp_dashboard_tiles/Hims_Homepage_Last_Longer_Default.png",
    },
    {
      title1: "Supervised",
      title2: "prescriptions",
      primaryColor: "white",
      gradient:
        "linear-gradient(127deg, rgb(0, 119, 78) 12.55%, rgb(0, 167, 110) 84.61%)",
      image:
        "https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit/Hims/homepage/STOR-5569/hp_dashboard_tiles/Hims_Homepage_Tackle_Anxiety_Default.png",
    },
    {
      title1: "Highly rated",
      title2: "Doctors",
      primaryColor: "white",
      background: "linear-gradient(90deg, #11998e 0%, #38ef7d 100%)",
      // background: "linear-gradient(90deg, #f7971e 0%, #ffd200 100%)",
      gradient:
        "linear-gradient(127deg, rgb(172, 119, 88) 12.55%, rgb(255, 188, 148) 84.61%)",
      image:
        "https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit/Hims/homepage/STOR-5569/hp_dashboard_tiles/Hims_Homepage_Smoother_Skin_Default.png",
    },
  ],
  //   desciption: `A dedicated and disciplined Full Stack engineer who love to create things for internet, having more than 4 years of field experience I've delivered projects to many happy clients over globe.`,
  button: {
    label: "Contact me!",
    onClick: () => openLink("mailto:afzalimdad9@gmail.com?subject=Hello"),
  },
};

export default outer;
