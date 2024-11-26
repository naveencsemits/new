import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";

const SubMenu = ({ data }) => {
  const { pathname } = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <>
      {/* SubMenu Header */}
      <li
        className={`link ${
          pathname.includes(data.name) ? "text-blue-600" : ""
        }`}
        onClick={() => setSubMenuOpen(!subMenuOpen)}
        aria-expanded={subMenuOpen}
      >
        <data.icon size={23} className="min-w-max" />
        <p className="flex-1 capitalize">{data.name}</p>
        <IoIosArrowDown
          className={`transition-transform duration-200 ${
            subMenuOpen ? "rotate-180" : ""
          }`}
        />
      </li>

      {/* SubMenu Items */}
      <motion.ul
        animate={
          subMenuOpen
            ? { height: "fit-content", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        initial={{ height: 0, opacity: 0 }}
        className="flex flex-col pl-14 text-[0.8rem] font-normal overflow-hidden transition-all duration-300"
      >
        {data.menus?.map((menu) => (
          <li key={menu}>
            <NavLink
              to={`/${data.name}/${menu}`}
              className={`link !bg-transparent capitalize ${
                pathname.includes(menu) ? "text-blue-600 font-medium" : ""
              }`}
            >
              {menu}
            </NavLink>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default SubMenu;
