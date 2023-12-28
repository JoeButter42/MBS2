import { motion } from 'framer-motion'
import { useState } from 'react'
 
export default function Address() {

    const [showMap, setShowMap] = useState(false)

    const shiftHeight ={
        height:'30rem'
    }
    const shiftWidth = {
        width:'100vw',
        borderLeft:'rgba(255, 255, 255, 0) solid 100px ',
        borderRight:'rgba(255, 255, 255, 0) solid 100px', 
        boxShadow:'inset 0px 0px 40px 0px rgba(255, 255, 255, 0)'
    }
    
  return (
    <>
    <div className='py-10 bg-black'>
        <div className='text-2xl lg:text-3xl animate-pulse text-white mb-10 px-4 hidden md:block '
             onClick={()=>setShowMap(!showMap)}
                >
            <p className='cursor-pointer'>198 Dobbin St., Vacaville, CA 95688</p>
        </div>
        <div className='text-2xl lg:text-3xl animate-pulse text-white mb-10 px-4 md:hidden'>
            <a href='https://www.google.com/maps/place/198+Dobbins+St,+Vacaville,+CA+95688/@38.3576888,-121.9893469,19.9z/data=!4m6!3m5!1s0x80853d54f6f3e4fb:0x3a32c373bb97d215!8m2!3d38.3577424!4d-121.9890418!16s%2Fg%2F11bw3x8ygh?entry=ttu' className='cursor-pointer'>198 Dobbin St., Vacaville, CA 95688</a>
        </div>

        {/* Animate height here */}
        <motion.div className='overflow-hidden border-y-2 m-auto md:block hidden'
                    initial={{ height:'0rem' }}
                    animate={ showMap? shiftHeight:''}
                    transition={{ease:'circIn', duration:0.4}}> 
            <motion.div className='m-auto h-full left-0 right-0 overflow-hidden'
                        initial={{ width:'0vw', borderLeft:'rgba(255, 255, 255, 1) solid 1px', borderRight:'rgba(255, 255, 255, 1) solid 1px', 
                                    boxShadow:'0px 0px 0px 0px rgba(255, 255, 255, 1)' }}
                        animate={ showMap? shiftWidth:'' }
                        transition={{ delay:0.3, duration:0.7, ease:'anticipate' }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d281.9099949267089!2d-121.98908324913343!3d38.35766087765312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80853d54f6f3e4fb%3A0x3a32c373bb97d215!2s198%20Dobbins%20St%2C%20Vacaville%2C%20CA%2095688!5e0!3m2!1sen!2sus!4v1702331496002!5m2!1sen!2sus" loading="lazy" className='m-auto h-full w-full '></iframe>
            </motion.div>
        </motion.div>
        
    </div>        
    </>
  )
}
