import React from 'react'
import styles from './styles/SideNav.module.css'

const SideNav = () => {
    return (
        <div>
            <section className={styles.sideNav}>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <h1> List </h1>
                    </div>
                    <div>
                        <button className={  styles.popup } > Add Category </button>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="categories d-flex flex-column align-items-left justify-content-left">
                    <div className="category-item">- graphics</div>
                    <div className="category-item">- Programming</div>
                    <div className="category-item">- Gaming</div>
                </div>
            </section>

        </div>
    )
}

export default SideNav
