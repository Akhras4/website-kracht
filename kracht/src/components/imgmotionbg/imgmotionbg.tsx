import React from 'react'
import {motion} from 'framer-motion'
import img1 from '../../assets/img/hero-dot-blue.00c90c9.webp'
import img2 from '../../assets/img/hero-dot-pink.7074525.webp'
import './imgmotionbg.css'

const Imgmotionbg:React.FC=()=> {
  return (
    <motion.div
    className="imgcon"
    initial={{ x: '-10%', y: '-20%' }}
    animate={{ x: ['-50%', '30%', '-10%'], y: ['-40%', '-100%', '50%'] }}
        transition={{
          duration: 9,
          ease: ['easeOut', 'linear', 'easeIn'],
          times: [0, 1, 1],
          repeat: Infinity,
          repeatType: 'reverse',
        }}  
    >
        <img className='blueimg' src={img1} />
        <img className='pinkimg' src={img2} />
    </motion.div>
  )
}
export default  Imgmotionbg