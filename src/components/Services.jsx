import React from 'react'
import { motion } from "framer-motion"
import { AiFillIeCircle, AiFillAndroid, AiFillWindows } from "react-icons/ai"

const Services = () => {
    const animations = {
        whileInView: {
            x: 0,
            y: 0,
            opacity: 1,
        }
    }
    return (
        <div id="services">
            <h2>Services</h2>
            <section>
                <motion.div className='serviceBox1'>
                    <h3>5+</h3>
                    <p>Years Experience</p>
                </motion.div>
                <motion.div className='serviceBox2'>
                    <AiFillIeCircle />
                    <span>Web Development</span>
                </motion.div>
                <motion.div className='serviceBox3'>
                    <AiFillAndroid />
                    <span>App Development</span>
                </motion.div>
                <motion.div className='serviceBox4'>
                    <AiFillWindows />
                    <span>Desktop Development</span>
                </motion.div>
            </section>
        </div>
    )
}

export default Services