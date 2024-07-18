import React from 'react'
import styles from './Skills.module.css'
import { FaSquareJs, FaReact, FaSass, FaGitAlt, FaNode } from 'react-icons/fa6'
function Skill() {
  return (
    <div className={styles.skills_con}>
      <h3 className={styles.skills_title}>My Skill Set</h3>
      <ul className={styles.skills_list}>
        <li>
           <FaSquareJs />
        </li>
        <li>
           <FaReact />
        </li>
        <li>
           <FaSass />
        </li>
        <li>
           <FaGitAlt />
        </li>
        <li>
           <FaNode />
        </li>
      </ul>
    </div>
  )
}

export default Skill
