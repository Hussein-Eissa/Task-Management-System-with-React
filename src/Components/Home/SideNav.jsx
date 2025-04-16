import React from 'react'
import { useState } from 'react'
import styles from './styles/SideNav.module.css'
import { FiAlignJustify, FiX  } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { TbCategoryPlus } from "react-icons/tb";
import CategoryModal from './CategoryModal';
import { useModal } from "../../Context/CategoryContext";
import ItemList from "../../Context/ItemList";


const SideNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const { openModal } = useModal();
    
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
                            <a href="/tasks" ><button className={styles.dash}><FaHome / > All Tasks</button></a>
                            </li>
                            <li>
                                <button className={styles.ListOfcat}><TbCategoryPlus /> Category</button>
                                <div className="container">
                                    <ItemList />
                                    <CategoryModal />
                                </div>
                            </li>
                            <li>
                            <button className={  styles.popup } onClick={() => openModal()} ><FaPlusCircle />  Add Category </button>
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
