import React from 'react'
import styles from './styles/Section1.module.css'

const Section1 = () => {
  return (
    <>
      <section className='d-flex flex-column p-5 ' style={{width: "100%"}}>
        <div className={styles.sectionSearch}>
        <div >
            <button  className={styles.addTask}>Add Task </button>
        </div>
        <div>
            <input type="search" name="" id=""  className={styles.Search} placeholder='search input'/>
        </div>
        </div>
        <hr />
      </section>
    </>
  )
}

export default Section1
