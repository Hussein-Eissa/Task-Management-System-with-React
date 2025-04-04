import React from 'react'
import styles from './styles/Filters.module.css'
const Filters = () => {
    return (
        <div>
            <div className='text-center'>
                <h1> Filters </h1>
            </div>
            <table className='table table-bordered justify-content-center align-items-center' style={{width: "100%", height: "100px"}}>
                <tr>
                    <th>State</th>
                    <th>Priority</th>
                    <th>Date</th>
                </tr>
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
                                    <select name="" id=""  className={styles.select}>
                                        <option value="">high</option>
                                        <option value="">medium</option>
                                        <option value="">low</option>
                                    </select>

                                </div>
                            </div>
                        </td>
                        <td>
                            <input type="date" name="" id=""  className={styles.date}/>
                        </td>
                    </tr>
                </tbody>

            </table>
            <hr />
        </div>
    )
}

export default Filters
