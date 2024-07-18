import React from 'react'
import styles from './Testimonials.module.css'
function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials </h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.
            </p>
            <img src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h4>Jhon Doe</h4>
            <p className={styles.bio}>Web Deverloper</p>
        </div>
        <div className={styles.testi_items}>
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.
            </p>
            <img src="https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h4>Jhon Doe</h4>
            <p className={styles.bio}>Web Deverloper</p>
        </div>
        <div className={styles.testi_items}>
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.
            </p>
            <img src="https://images.unsplash.com/photo-1560365163-3e8d64e762ef?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h4>Jhon Doe</h4>
            <p className={styles.bio}>Web Deverloper</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
