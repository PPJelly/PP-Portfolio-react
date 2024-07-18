import React from 'react'
import styles from './Number.module.css'
import CountUp from 'react-countup'
import ReactVisibilitySensor from 'react-visibility-sensor'

function Number() {
  return (
    <div className={styles.number_con}>
      <div className={styles.number_items}>
        <h3>
          <ReactVisibilitySensor partialVisibility offset={{bottom: 200}}>
              {({isVisible}) => ( 
                <div>
                  {isVisible ? <CountUp start={0} end={100} duration={5} /> : null}+
                </div>
              )}
          </ReactVisibilitySensor>
        </h3>
        <p>Project Delivered</p>
      </div>
      <div className={styles.number_items}>
        <h3>
        <ReactVisibilitySensor partialVisibility offset={{bottom: 200}}>
              {({isVisible}) => ( 
                <div>
                  {isVisible ? <CountUp start={0} end={50} duration={5} /> : null}+
                </div>
              )}
          </ReactVisibilitySensor>
        </h3>
        <p>Companies Helped </p>
      </div>
      <div className={styles.number_items}>
        <h3> <ReactVisibilitySensor partialVisibility offset={{bottom: 200}}>
              {({isVisible}) => ( 
                <div>
                  {isVisible ? <CountUp start={0} end={10} duration={5} /> : null}+
                </div>
              )}
          </ReactVisibilitySensor></h3>
        <p>Years of experience</p>
      </div>
      <div className={styles.number_items}>
        <h3>
        <ReactVisibilitySensor partialVisibility offset={{bottom: 200}}>
              {({isVisible}) => ( 
                <div>
                  {isVisible ? <CountUp start={0} end={200} duration={5} /> : null}+
                </div>
              )}
          </ReactVisibilitySensor>
        </h3>
        <p>Happy Clients</p>
      </div>
    </div>
  )
}

export default Number
