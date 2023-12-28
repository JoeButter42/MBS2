import { motion } from 'framer-motion'

export default function ContactNum() {

  return (
    <>
      <div className='grid grid-flow-col'>
        <motion.div className='col-span-10 bg-black pt-10'>
            <motion.div id='ContactBorder' className={`block m-auto max-w-screen-md w-5/6 p-1 transition-all duration-1000 rounded-2xl`}
                                                      transition={{ repeat:Infinity , duration:2.5 }}
                                                      initial={{background:"linear-gradient(0deg, rgba(0,0,0,0) 30%, rgba(46,219,251,1) 50%, rgba(0,0,0,0) 80%)"}}
                                                      animate={{background:"linear-gradient(360deg, rgba(0,0,0,0) 30%, rgba(46,50,251,1) 50%, rgba(0,0,0,0) 80%)"}}> {/* Border */}
              <div className='p-6 md:p-10 bg-black rounded-3xl'>
                <a href='tel:+1707-628-6128' className='cursor-default'> {/* <----- PHONE NUMBER HERE */}
                  <motion.div viewport={{once:true}}
                    initial={{opacity:0, y:200}}
                    whileInView={{opacity:1, y:0}}
                    transition={{ease:'easeInOut', type:'spring', stiffness:100, duration:1}}>
                    <p className={`text-4xl md:text-5xl lg:font-semibold text-stone-300 transition-all delay-1000 duration-700 ease-out animate-bounce`}>CONTACT</p>
                  </motion.div>
                  <motion.div viewport={{once:true}}
                    initial={{opacity:0, y:200}}
                    whileInView={{opacity:1, y:0}}
                    transition={{ease:'easeInOut', type:'spring', stiffness:100, duration:0.5, delay: 0.1}}>
                    <p className='text-2xl lg:text-3xl lg:font-semibold text-blue-200 py-2'> +1-707-628-6128</p>
                  </motion.div>
                </a>
                {/* <a href='/Contact'>
                  <motion.div viewport={{once:true}}
                    initial={{opacity:0, y:200}}
                    whileInView={{opacity:1, y:0}}
                    transition={{ease:'easeInOut', type:'spring', stiffness:100, duration:0.5, delay: 0.2}}>
                    <p className='text-xl lg:text-2xl lg:font-semibold text-white pt-2 md:pt-6 lg:pt-4'> OR <span className='animate-pulse'>EMAIL ME</span></p>
                  </motion.div>
                </a> */}
              </div>
            </motion.div>
        </motion.div>
      </div>

      
    </>
  )
}
