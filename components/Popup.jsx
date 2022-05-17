import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { motion }  from 'framer-motion'
import s from '../styles/popup.module.css'

const Popup = ( props ) => {

  const [visible, setVisbile] = useState(props.visible || false)
  const [opa, setOpa] = useState(1);
  const [topPosition, setTopPosition] = useState(0);


  const width = props?.width || 400
  const height = props?.width || 330
  const duration = 0.5

  useEffect(() => {
    setTopPosition(
      (window.innerHeight - height) / 2
    )
  }, [])

  const handleClosing = () => {
    setOpa(0)
    setTopPosition(0)
    setTimeout(() => {
      props.onClose();
    }, duration*1100);
  }

  const handleSubmitPopup = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let data = {}
    for (let [key, value] of formData) data[key] = value

    axios({
      method: 'POST',
      url: '/api/mailer',
      data: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      handleClosing();
    }).catch(reponse => console.log(reponse));
  }

  return (
    visible && (
      <div className={s.popupOverlay} onClick={handleClosing}>
      
      <motion.div className={s.popup} animate={{ opacity: opa, top: topPosition }} transition={{duration}} onClick={ e => e.stopPropagation() } style={{width, height}}>
        <h2 className={s.title}>Свяжитесь с нами</h2>
        <div className={s.content}>
          <form onSubmit={handleSubmitPopup}>
            <input className={s.popupInput} type="text" name="clientName" placeholder='Как к Вам обращаться?'/>
            <input className={s.popupInput} type="tel" name="clientPhone" placeholder='Укажите Ваш телефон для связи'/>
            <textarea className={s.popupInput} name="clientComment" placeholder='Ваши пожелания'/>
            <div className={s.buttonsContainer}>
            <motion.button 
              className={s.button} 
              whileHover={{
                scale: 1.05,
                transition: {
                  duration: .5
                }
              }} 
            >Отправить</motion.button>
          </div>
          </form>
        </div>
       
      </motion.div>        

    </div>
    ) 
  )
}

export default Popup