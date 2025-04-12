import React from 'react'
import { useState } from 'react'
import styles from './styles/SideNav.module.css'
import { FiAlignJustify, FiX  } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { TbCategoryPlus } from "react-icons/tb";



const SideNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const togglePopup = () => {
      setIsOpen(!isOpen);
    };
    return (
        
        <div>
            <button className={styles.popup}  onClick={togglePopup}>
            {isOpen ? <FiX size={24} /> : <FiAlignJustify size={24} />}
      </button>
            {isOpen && (
            <section className={styles.sideNav}>
                <div>
                    
                </div>
                <div >
                    <div>
                        <h1> List </h1>
                    </div>
                    
                    <div>
                    <div>
                       <ul className={styles.list}>
                            <li>
                            <a href="#" ><button className={styles.dash}><FaHome / > Dashboard</button></a>
                            </li>
                            <li>
                            <a href="#" ><button className={styles.ListOfcat}><TbCategoryPlus /> Category</button></a>
                            </li>
                            <li>
                            <a href="#"><button className={  styles.popup } ><FaPlusCircle />  Add Category </button></a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
                
            </section>)}

        </div>
    )
}

export default SideNav
