import React from 'react'
import styles from './styles/Tasks.module.css'

const Tasks = () => {
  return (
    <div>
      <div>
        <div>
            <h1>Task</h1>
        </div>
        <div>
            <table className='table table-bordered'>
                <tr>
                    <th>name</th>
                    <th>priority</th>
                    <th>date</th>
                    <th> edit</th>
                    <th>delete</th>
                </tr>
                <tbody>
                    <tr>
                        <td><input type="text" placeholder='Enter Title' className={styles.inputTitle} /></td>
                        <td>
                            <select name="" id="" className={styles.select}>
                            <option value="">high</option>
                            <option value="">medium</option>
                            <option value="">low</option>
                            </select>
                        </td>
                        <td><input type="date"  className={styles.date}/></td>
                        <td><button className={styles.editBtn } >edit</button></td>
                        <td><button className={styles.deleteBtn} >delete</button></td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default Tasks
