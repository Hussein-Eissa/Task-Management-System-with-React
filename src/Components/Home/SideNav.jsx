import { useState,useEffect } from "react";
import { FiAlignJustify, FiX } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { TbCategoryPlus } from "react-icons/tb";
import { useModal } from "../../Context/CategoryContext";
import CategoryModal from "./CategoryModal";
import ItemList from "../../Context/ItemList";
import styles from "../../styles/home/SideNav.module.css";


const SideNav = () => {
  
  const { openModal } = useModal();

  const [isOpen, setIsOpen] = useState(window.innerWidth > 425);  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  useEffect(() => {
    if (windowWidth <= 425) {
      setIsOpen(false);
    } else {
      setIsOpen(true); 
    }
  }, [windowWidth]);

  // const toggleSideNav = () => {
  //   setIsOpen(!isOpen);
  // };

  const toggleSideNav = () => {
    setIsOpen((prev) => !prev);
  };

  // const togglePopup = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div>
       <button 
        className={`${styles.popup} ${styles.toggleButton}`} 
        onClick={toggleSideNav}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <FiX size={24} /> : <FiAlignJustify size={24} />}
      </button>
      
      {/* <button className={styles.popup} onClick={togglePopup}>
        {isOpen ? <FiX size={24} /> : <FiAlignJustify size={24} />}
      </button> */}
      {/* {isOpen && ( */}
        {isOpen && (
          <section className={styles.sideNav}>
          <div>
            <div>
              <h4 style={{ textAlign: "center", fontSize: "30px" }}> List </h4>
            </div>

            <div>
              <div>
                <ul className={styles.list}>
                  {/* <li>
                    <button className={styles.ListOfcat}>
                      <TbCategoryPlus /> Category
                    </button>
                    <div className="container">
                      <ItemList />
                      <CategoryModal />
                    </div>
                  </li> */}

<li className="nav-item dropdown">
      <button
        className={`nav-link dropdown-toggle ${styles.ListOfcat}`}
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        id="categoryDropdown"
        
      >
        <TbCategoryPlus className="m-2  " /> All Category
      </button>
      <div className="dropdown-menu" aria-labelledby="categoryDropdown">
        <div className="container p-3">
          <ItemList style={{border:'none'}} />
        </div>
      </div>
          <CategoryModal />
    </li>


                </ul>
              </div>
            </div>
          </div>
        </section>
       )} 
    </div>
  );
};

export default SideNav;




