import { useState, useEffect } from "react";
import {FiX } from "react-icons/fi";
import { GoSidebarCollapse } from "react-icons/go";
import { TbCategoryPlus } from "react-icons/tb";
import { useModal } from "../../Context/CategoryContext";
import CategoryModal from "./CategoryModal";
import ItemList from "../../Context/ItemList";
import styles from "../../styles/home/SideNav.module.css";

const SideNav = ({ onCategorySelect }) => {
  const { openModal } = useModal();
  const [isOpen, setIsOpen] = useState(window.innerWidth > 992);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSideNav = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCategoryClick = (category) => {
    if (onCategorySelect) {
      onCategorySelect(category);
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column justify-content-between">
      {/* زر الـ toggle */}
      <button
        className={`${styles.toggleButton}`} 
        onClick={toggleSideNav}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <FiX size={24} /> : <GoSidebarCollapse size={24} />} 
      </button>

      {/* الـ Sidebar */}
      <section className={`${styles.sideNav} ${isOpen ? styles.open : ""}`}>
        <div>
          <div>
            <h4 style={{ textAlign: "center", fontSize: "30px" }}>
              Categories
            </h4>
          </div>
          <div>
            <div>
              <ul className={styles.list}>
                <li className="nav-item dropdown">
                  <button
                    className={`nav-link dropdown-toggle ${styles.ListOfcat}`}
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    id="categoryDropdown"
                  >
                    <TbCategoryPlus className="m-2" /> Select Category
                  </button>
                  <div
                    className="dropdown-menu w-100"
                    aria-labelledby="categoryDropdown"
                  >
                    <div className="container w-100 p-0">
                      <ItemList
                        onCategoryClick={handleCategoryClick}
                        style={{ border: "none" }}
                      />
                    </div>
                  </div>
                  <CategoryModal />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SideNav;