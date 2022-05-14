import React, { useEffect, useState } from 'react'
import { motion }  from 'framer-motion'
import s from '../styles/popup.module.css'

const Popup = ( props ) => {

  const [visible, setVisbile] = useState(props.visible || false)
  const [opa, setOpa] = useState(1);
  const [topPosition, setTopPosition] = useState(0);


  const width = props?.width || 300
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

    handleClosing();
  }

  return (
    visible && (
      <div className={s.popupOverlay} onClick={handleClosing}>
      
      <motion.div className={s.popup} animate={{ opacity: opa, top: topPosition }} transition={{duration}} onClick={ e => e.stopPropagation() } style={{width, height}}>
        <h2 className={s.title}>Свяжитесь с нами</h2>
        <div className={s.content}>
          <form onSubmit={handleSubmitPopup}>
            <input className={s.popupInput} type="text" name="name" placeholder='Как к Вам обращаться?'/>
            <input className={s.popupInput} type="tel" name="phone" placeholder='Укажите Ваш телефон для связи'/>
            <textarea className={s.popupInput} name="comments" placeholder='Ваши пожелания'/>
            <motion.div className={s.successText}>
              Ваше сообщение успешно отправлено!
            </motion.div>
            <div className={s.buttonsContainer}>
            <motion.button className={s.button} >Отправить</motion.button>
          </div>
          </form>
        </div>
       
      </motion.div>        

    </div>
    ) 
  )
}

export default Popup