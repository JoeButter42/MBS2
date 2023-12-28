import { useState, useEffect } from 'react'
import { TiSocialInstagram, TiThMenu } from "react-icons/ti";
import { motion, useAnimation } from 'framer-motion'
import {Link} from 'react-scroll'

export default function Nav() {

  // MOBILE VIEW STUFF
  const controls = useAnimation()
  const [tab, showTab] = useState(false)
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxFactor = 0.6;
  const windowHeight = window.innerHeight;
  const initialY = windowHeight / 2.5;
  const translateY = Math.max(-scrollY * parallaxFactor + initialY, -200);

  useEffect(() => {
    // Animate the element when the scroll position changes
    controls.start({ y: translateY });
  }, [controls, translateY]);



  //COMPUTER VIEW STUFF
  const [pastView, setPastView] = useState(false)
  useEffect(()=>{
    const trigger = window.scrollY
    const triggerpoint = 400

    if (trigger > triggerpoint && !pastView){
      setPastView(true)
    } else if (trigger <= triggerpoint && pastView) {
      setPastView(false)
    }
  })

  const compNav = ()=>{
    return(
      <>
      <div className='hidden lg:flex text-white text-4xl'>
        <div className='left-0 z-20 pl-3 pt-3'>
          <a className='animate-pulse' href="https://www.instagram.com/michellehair_artist/?utm_source=ig_web_button_share_sheet&igshid=OTQ5NTI0NzZiOA==">
            <TiSocialInstagram/>
          </a>
        </div>

        <ul className='flex w-3/5 xl:w-1/2 ml-auto justify-evenly py-2'>
          <li className='cursor-pointer'>
            <Link to='Carousel' spy={true} smooth={true} offset={-50} duration={300}> About </Link>
          </li>
          <li className='cursor-pointer'>
            <Link to='Services' spy={true} smooth={true} offset={-50} duration={300}> Services </Link>
          </li>
          <li className='cursor-pointer'>
            <Link to='Contact' spy={true} smooth={true} offset={-100} duration={300}> Contact </Link>
          </li>
          <li className='cursor-pointer'>
            <Link to='Examples' spy={true} smooth={true} offset={-50} duration={300}> Examples </Link>
          </li>
        </ul>
      </div>
      </>
    )
  }


  return (
    <div className='relative text-8xl w-full top-0'>

      {/* FIRST NAV these two will only show in computer view*/}
      <div>
        {compNav()}
      </div>

      {/* SECOND NAV */}
      <motion.div className='fixed hidden lg:block top-0 py-4 w-full bg-black z-20' initial={{ translateY:'-100%' }} animate={{ translateY:pastView?'-10%':'-100%'}}>
        {compNav()}
      </motion.div>



      {/* MOBILE VIEW*/}
      <div className={`absolute block top-0 z-10 text-white lg:hidden text-6xl md:text-8xl`}>

        {/* INSTA */}
        <div className='text-white fixed left-0 top-0 z-20'>
          <a className='animate-pulse' href="https://www.instagram.com/michellehair_artist/?utm_source=ig_web_button_share_sheet&igshid=OTQ5NTI0NzZiOA==">
            <TiSocialInstagram/>
          </a>
        </div>

        {/* 3 BARS */}
        <div className='fixed right-0 top-0 cursor-pointer z-10' onClick={()=>{showTab(!tab)}}>
          <TiThMenu/>
        </div>

        {/* DROPDOWN LIST */}
        <div className={`fixed pb-14 sm:pb-32 pt-16 sm:pt-24 px-10 w-full text-right bg-stone-800 ${tab ? '':'hidden'}`}>
          <ul onClick={()=>{showTab(!tab)}}>
            <li className='px-2 hover:text-stone-300 cursor-pointer' >
              <Link to='Carousel' spy={true} smooth={true} offset={-50} duration={300}> <span onClick={()=>{showTab(!tab)}}>About</span> </Link>
            </li>
            <li className='px-2 hover:text-stone-300 cursor-pointer' >
              <Link to='Services' spy={true} smooth={true} offset={-50} duration={300} > <span onClick={()=>{showTab(!tab)}}>Services</span> </Link>
            </li>
            <li className='px-2 hover:text-stone-300 cursor-pointer' onClick={()=>{showTab(!tab)}}>
              <Link to='Contact' spy={true} smooth={true} offset={-50} duration={300} > <span onClick={()=>{showTab(!tab)}}>Contact</span> </Link>
            </li>
            <li className='px-2 hover:text-stone-300 cursor-pointer' onClick={()=>{showTab(!tab)}}>
              <Link to='Examples' spy={true} smooth={true} offset={-50} duration={300} > <span onClick={()=>{showTab(!tab)}}>Portfolio</span> </Link>
            </li>
          </ul>
        </div>

        {/* MICHELLES BEAUTY STUDIP */}
        <div className='relative h-screen'>

          <motion.div className='text-center font-extrabold absolute w-full text-4xl sm:text-6xl lg:hidden -z-10' style={{transform: `translateY(${translateY}px)`}}
                      initial={{y: initialY}}
                      animate={controls}
                      transition={{delay: 0, type:'tween', ease:'easeOut'}}>
            <p className='px-4'>Michelle's</p>
            <p className='px-4'>Beauty Studio</p>
          </motion.div>

        </div>


      </div>

    </div>
  )
}
