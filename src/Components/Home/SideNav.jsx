import { useState } from 'react'
import { FiAlignJustify, FiX } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { TbCategoryPlus } from "react-icons/tb";
import { useModal } from "../../Context/CategoryContext";
import CategoryModal from './CategoryModal';
import ItemList from "../../Context/ItemList";
import styles from '../../styles/home/SideNav.module.css'
import { Link } from 'react-router-dom';

const SideNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { openModal } = useModal();

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button className={styles.popup} onClick={togglePopup}>
                {isOpen ? <FiX size={24} /> : <FiAlignJustify size={24} />}
            </button>
            {isOpen && (
                <section className={styles.sideNav}>
                    <div>
                        <div>
                            <h4 style={{ textAlign: "center", fontSize: "30px" }}> List </h4>
                        </div>

                        <div>
                            <div>
                                <ul className={styles.list}>
                                    <li>
                                        <Link to="/tasks" >
                                            <button className={styles.dash}><FaHome /> All Tasks</button>
                                        </Link>
                                    </li>
                                    <li>
                                        <button className={styles.ListOfcat}><TbCategoryPlus /> Category</button>
                                        <div className="container">
                                            <ItemList />
                                            <CategoryModal />
                                        </div>
                                    </li>
                                    {/* <li>
                                        <button className={styles.popup} onClick={() => openModal()} ><FaPlusCircle />  Add Category </button>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>

                </section>)}
        </div>
    )
}

export default SideNav
