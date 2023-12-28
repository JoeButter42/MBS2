import { useState } from 'react'
import { Link } from 'react-scroll'
import { useAnimation, motion } from 'framer-motion'

import { TiArrowForwardOutline } from "react-icons/ti";

export default function Services() {
    const controls = useAnimation()
    const [rotation, setRotation] = useState(85)
    const [showServices, setShowServices] = useState(false)

    const handleServices =async () => {
    setShowServices(!showServices)
    if (showServices)
      await controls.start({height:''})
    else
      await controls.start({height:0})
  }

  type Service = {
    id: number,
    Color: string,
    Title: string
  }

  const [service] = useState<Service[]>([
    {id:1, Color:"87,40,64", Title:"CUTS AND STYLES"},
    {id:2, Color:"194,110,26", Title:"COLORS"},
    {id:3, Color:"23,21,158", Title:"HIGHLIGHTS"},
    {id:4, Color:"210,189,150", Title:"BALAYAGE"},
    {id:5, Color:"19,128,133", Title:"BRAZILLIAN BLOWOUT"},
    {id:6, Color:"20,114,20", Title:"TREATMENTS"},
    {id:7, Color:"144,144,64", Title:"EXTENSIONS"},
    {id:8, Color:"144,144,144", Title:"WEDDINGS"}
  ])

  const displayServices = (({Color, Title}:Service) =>{
    const color = `linear-gradient(to right, rgba(0,0,0,0) 10%, rgba(${Color},1) 50%, rgba(0,0,0,0) 90%)`
    return(
      <Link to={Title} spy={true} smooth={true} offset={-150} duration={1000} >
        <motion.div className='m-auto justify-center border-b-2 py-5 border-stone-500 w-5/6 max-w-screen-md rounded-lg'
                    initial={{background:"linear-gradient(to right, rgba(0,0,0,0) 50%, rgba(255,255,255,1) 50%, rgba(0,0,0,0) 50%)"}}
                    whileHover={{background:color}}>
              <p>{Title}</p>
        </motion.div>
      </Link>
    )
  })

  return (
    <>
    {/* MOBIL VIEW */}
    <div className='text-white font-extralight selection:bg-transparent cursor-pointer bg-black lg:hidden'>
        <div onClick={()=>{setRotation(rotation + 180); handleServices()}} className='text-3xl flex m-auto justify-center border-y-2 py-5 border-stone-500 bg-stone-800 w-full'>
          <p className='mx-2'>SERVICES</p>
          <div className={`transition-all duration-500`} style={{ transform: `rotate(${rotation}deg) translatey(-5px) translatex(3px)` }}>
              <TiArrowForwardOutline/>
          </div>
        </div>
        <motion.div className='text-2xl overflow-hidden'
                    initial={{height : ''}}
                    animate={controls}
                    transition={{ease:'easeInOut', stiffness:100, duration:0.3}}>
            
            {/* MAP OF THE DIFFERENT SERVICES */}
            {service.map((srv) => displayServices(srv))}
          
        </motion.div>
        
    </div>

    {/* COMPUTER VIEW */}
    <div className='hidden lg:block'>

      {/* SERVICES TAB BUTTON */}
      <div onClick={()=>{setRotation(rotation + 180); handleServices()}} className='text-white text-5xl lg:text-4xl flex m-auto justify-center border-y-2 py-5 border-stone-500 bg-stone-800 w-full'>
        <p className='mx-2'>SERVICES</p>
        <div className={`transition-all duration-500`} style={{ transform: `rotate(${rotation}deg) translatey(-5px) translatex(3px)` }}>
          <TiArrowForwardOutline/>
        </div>
      </div>

      {/* SERVICES */}
      <div className='grid grid-flow-col'>
        <div className='bg-black col-span-10'>
          <div className='text-white font-extralight selection:bg-transparent cursor-pointer'>
              
              <motion.div className='text-2xl overflow-hidden'
                          initial={{height : ''}}
                          animate={controls}
                          transition={{ease:'easeInOut', stiffness:100, duration:0.3}}>
                  
                  {/* MAP OF THE DIFFERENT SERVICES */}
                  {service.map((srv) => displayServices(srv))}
                
              </motion.div>
              
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
