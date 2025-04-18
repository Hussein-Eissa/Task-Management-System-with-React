import React from 'react'
import { FaTasks } from "react-icons/fa";

import styles from '../../styles/home/Filters.module.css'
const Filters = () => {
    return (
        <div>
            {/* <div className='container-fluid' >
                    <div className={styles.nav}> <h2  ><FaTasks /> TaskManager</h2></div>
             </div> */}
            <div className='text-center'>
                <h1> Filters </h1>
            </div>
            <table className='table table-bordered justify-content-center align-items-center' style={{ width: "100%", height: "100px" }}>
                <thead>
                    <tr style={{ fontFamily: 'Cairo', fontSize: 20 }}>
                        <th>State</th>
                        <th>Priority</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><div>
                            <div>
                                <select name="" id="" className={styles.select}>
                                    <option value="">All</option>
                                    <option value="">Completed</option>
                                    <option value="">Inprogress</option>
                                </select>

                            </div>
                        </div>
                        </td>
                        <td>
                            <div>
                                <div>
                                    <select name="" id="" className={styles.select}>
                                        <option value="">high</option>
                                        <option value="">medium</option>
                                        <option value="">low</option>
                                    </select>

                                </div>
                            </div>
                        </td>
                        <td>
                            <input type="date" name="" id="" className={styles.date} />
                        </td>
                    </tr>
                </tbody>

            </table>
            <hr />
        </div>
    )
}

export default Filters
