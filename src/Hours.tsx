
import { motion } from 'framer-motion'

export default function Hours() {
  return (
    <>
      <div className='bg-black'>
        <div className='text-white text-2xl md:text-4xl lg:text-2xl lg:font-semibold max-w-screen-md block m-auto lg:p-2'>
            <p className='text-4xl md:text-4xl text-white py-8 lg:pb-2'>HOURS</p>
            <motion.div className='w-full px-6 pb-16'
              transition={{ease:'easeInOut', duration: 0.7}}
              initial = {{filter: "blur(15px)", opacity: 0 }}
              whileInView = {{filter: "blur(0px)", opacity: 1 }}
              viewport={{once:true}}>
              <div className='flex justify-between py-1'>
                <br/>
                <p>AM - PM</p>
              </div>
              <div className='flex justify-between my-1 underline border-b-2 border-dashed border-stone-600'>
                <p>MONDAY:</p>
                <p>9:00 - 5:30</p>
              </div>
              <div className='flex justify-between my-1 underline border-b-2 border-dashed border-stone-600'>
                <p>TUESDAY:</p>
                <p>10:00 - 1:00</p>
              </div>
              <div className='flex justify-between my-1 underline border-b-2 border-dashed border-stone-600'>
                <p>WEDNESDAY:</p>
                <p>9:00 - 5:30</p>
              </div>
              <div className='flex justify-between my-1 underline border-b-2 border-dashed border-stone-600'>
                <p>THURSDAY:</p>
                <p>10:00 - 1:00</p>
              </div>
              <div className='flex justify-between my-1 underline border-b-2 border-dashed border-stone-600'>
                <p>FRIDAY:</p>
                <p>9:00 - 5:30</p>
              </div>
              <div className='flex justify-between my-1 underline border-b-2 border-dashed border-stone-600'>
                <p>SATURDAY:</p>
                <p>CLOSED</p>
              </div>
              <div className='flex justify-between my-1 '>
                <p>SUNDAY:</p>
                <div className='text-right'>
                  <p>EVERY OTHER SUNDAY</p>
                  <p>9:00 - 3:00</p>
                </div>
              </div>
            </motion.div> 
        </div> 
      </div>  
    </>
  )
}
