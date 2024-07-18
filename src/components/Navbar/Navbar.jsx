import React, {useState} from 'react'
import styles from './Navbar.module.css'
import { FaBars } from 'react-icons/fa6'

function Navbar() {

  const [isToggled, setToggle] = useState(false);

    function handleToggle(){
      setToggle(!isToggled) //false + false
    }

  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.nav_con}>
            <div className={styles.logo}>
                <a href="">PP PORT</a>
            </div>
            <ul>
                <li><a href="">Skills</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <div className={styles.button}>
                <a href="">Hire Me</a>
            </div>
        </div>
        {/* {Moblie Menu} */}
        <FaBars className={styles.bars} onClick={handleToggle}/>
        {isToggled ? (
          <>
             <ul className={styles.moblie_menu}>
                <li><a href="">Skills</a></li><br />
                <li><a href="">Portfolio</a></li><br />
                <li><a href="">Contact</a></li><br />
            </ul>
            <div className={styles.moblie_button}>
              <a href="#">Hire Me</a>
            </div>
          </>
        ) : null}
      </div>
    </nav>
  )
}

export default Navbar
