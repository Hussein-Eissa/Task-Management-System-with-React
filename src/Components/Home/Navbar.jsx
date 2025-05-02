// import React, { useState } from "react";
// import { FiSearch, FiMenu } from "react-icons/fi";
// import styles from "../../styles/home/Section.module.css";
// import logo from "../../assets/22a3ab16269821.562a8602153f7.png"; // Ensure the path is correct

// const Navbar = ({ onSearchChange }) => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearchChange = (e) => {
//     const value = e.target.value;
//     setSearchQuery(value);
//     onSearchChange(value);
//   };

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.navLeft}>
//         <div className={styles.logo}>
//           <span className={styles.logoIcon}><img src={logo} alt="Logo" style={{height:'30px'}} /></span>
//           <span className={styles.logoText}>TaskManager</span>
//         </div>
//         {/* <button className={styles.menuButton}>
//           <FiMenu size={20} />
//         </button> */}
//       </div>

//       <div className={styles.searchBar}>
//         <FiSearch className={styles.searchIcon} />
//         <input
//           type="text"
//           placeholder="Search tasks..."
//           value={searchQuery}
//           onChange={handleSearchChange}
//         />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState, useContext } from "react";
import { FiSearch, FiSun, FiMoon } from "react-icons/fi";
import styles from "../../styles/home/Section.module.css";
import logo from "../../assets/22a3ab16269821.562a8602153f7.png";
import { ThemeContext } from "../../Context/ThemeContext"; // تأكد من المسار

const Navbar = ({ onSearchChange }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { darkMode, toggleTheme } = useContext(ThemeContext); // ← هنا نجيب الثيم

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearchChange(value);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>
            <img src={logo} alt="Logo" style={{ height: '30px' }} />
          </span>
          <span className={styles.logoText}>TaskManager</span>
        </div>
      </div>

      <div className={styles.searchBar}>
        <FiSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* 🔘 زر الوضع الليلي/النهاري */}
      <div className={styles.themeToggle}>
        <button
          onClick={toggleTheme}
          className="btn btn-sm btn-outline-secondary ms-3"
          title={darkMode ? "Light Mode" : "Dark Mode"}
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

