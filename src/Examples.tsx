import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue } from 'framer-motion'

//images
import CutsAndStyles from './assets/CutsAndStyles_1.jpg'
import croppdCS from './assets/CutsAndStyles_1_CROPPED.png'

import Colors from './assets/Colors_1.jpg'
import croppdColors from './assets/Colors_1_CROPPED.png'

import Highlights from './assets/Highlights_1.jpg'
import croppdHighlights from './assets/Highlights_1_CROPPED.png'

import Balayage from './assets/Balayage.jpg'
import croppdBalayage from './assets/Balayage_CROPPED.png'

import Brazil from './assets/Brazil.jpg'
import croppedBrazil from './assets/Brazil_CROPPED.png'

import Treatments from './assets/Treatments.jpg'
import croppdTreatments from './assets/Treatments_CROPPED.png'

import Extension from './assets/Extensions.jpg'
import croppdExtensions from './assets/Extensions_CROPPED.png'

import Wedding from './assets/Weddings.jpg'
import croppdWedding from './assets/Weddings_CROPPED.png'


export default function Examples() {

  // Image handling
  type Images = {
    id: number,
    imgPath: string,
    croppedImg: string,
    cardTitle: string,
    cardDsc: string
  }

  const [example] = useState<Images[]>([
    { id:1, imgPath:CutsAndStyles, croppedImg:croppdCS, cardTitle:'CUTS AND STYLES', 
    cardDsc:"Different haircuts and styles serve as a form of self-expression, allowing you to showcase your personality, creativity, and individuality through your hair. There's a wide array of styling options from short pixie cuts to long layers that cater to your preferences such as face shape, hair texture, and lifestyle. customized to suit individual preferences and needs, whether it's creating a low-maintenance cut, adding layers for volume, or experimenting with trendy styles." },

    { id:2, imgPath:Colors, croppedImg:croppdColors, cardTitle:'COLORS', 
    cardDsc:'Hair color is a canvas for self-expression, allowing you to showcase your personality, creativity, and uniqueness. Whether you opt for vibrant shades or subtle highlights, your hair becomes a statement piece that reflects your style and identity. Cover up gray hairs, enhance your natural hair color, or experiment with a completely different colors to enhancing your features and complement your skin tone.' },

    { id:3, imgPath:Highlights, croppedImg:croppdHighlights,  cardTitle:'HIGHLIGHTS', 
    cardDsc:'Highlights add depth and dimension to your hair with minimal maintenance. Strategically placed highlights can brighten your complexion and draw attention to your facial features and create the illusion of texture and volume. Regrowth is softer and less noticeable making transitions between salon visits smoother and less abrupt. Highlights offer a balance between a noticeable change and maintaining a natural appearance.' },

    { id:4, imgPath:Balayage, croppedImg:croppdBalayage, cardTitle:'BALAYAGE', 
    cardDsc:"Natural, sun-kissed hair. Unlike traditional hair coloring, balayage is a freehand technique where the color is applied by hand, and is known for its low-maintenance.  Similar to highlights, balayage grows out gracefully. The softer, blended effect means that there's less of a stark contrast between your natural hair color and the balayage highlights, making the regrowth phase less noticeable." },

    { id:5, imgPath:Brazil, croppedImg:croppedBrazil, cardTitle:'BRAZILLIAN BLOWOUT', 
    cardDsc:'Brazilian blowouts effectively reduce frizz, making hair smoother and more manageable. The treatment results in smooth, sleek hair that is easier to style and requires less effort to maintain. It imparts a glossy shine to the hair, enhancing its overall appearance.' },

    { id:6, imgPath:Treatments, croppedImg:croppdTreatments, cardTitle:'TREATMENTS', 
    cardDsc:'Facial treatments help rejuvenate the skin by removing dead skin cells, unclogging pores, and promoting cell turnover. This process leads to smoother, softer, and more radiant skin. Deep cleansing removes dirt, oil, and impurities from the skin that helps prevent breakouts and keeps the skin clear. Beyond the physical benefits, treatments are very relaxing and stress relieving.' },

    { id:7, imgPath:Extension, croppedImg:croppdExtensions, cardTitle:'EXTENSIONS', 
    cardDsc:'Extensions allow you to experiment with different hair colors without committing to permanent dye. You can try highlights, ombre, or vibrant colors without altering your natural hair, offering a temporary change to your hair, allowing you to switch up your look for special occasions or events without making a permanent commitment. For those with thinning hair or specific hair concerns, extensions can camouflage these issues' },

    { id:8, imgPath:Wedding, croppedImg:croppdWedding, cardTitle:'WEDDINGS', 
    cardDsc:"The perfect hair for the perfect day. The right hairstyle elevates and complements the wedding dress, makeup, and theme. It can accentuate the bride’s features and evoke the desired vibe, be it romantic, classic, bohemian, or modern. A well-chosen wedding hairstyle photographs beautifully, capturing the essence of the bride's beauty" },
  ])



  const exampleImages = (({id, imgPath, croppedImg, cardTitle, cardDsc}:Images)=>{

    var isEven = true;
    if(id%2 == 1){
      isEven =!isEven
    }

    

    const [isHovered, setHovered] = useState(false)

    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const [scale1, setScale1] = useState(1)

    const x2 = useMotionValue(0)
    const y2 = useMotionValue(0)
    const [scale2, setScale2] = useState(1)

    const handlHover = ()=>{
      setHovered(true)
      setScale1(isHovered? 1:1.05)
      setScale2(isHovered? 1:1.1)
    }

    const [inView, setInView] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(()=>{
      const observer = new IntersectionObserver(
        ([entry]) => { setInView(entry.isIntersecting) },   // Update state when the div is in view
        {
          root: null,   // viewport
          rootMargin: '0px',
          threshold: 0.6,   // Fully in view
        }
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      // Cleanup observer
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [()=>ref.current])

    const animateVarients = {
      even:{  
        marginRight: inView? '0%':'50%', 
        x: inView? '0%':'50%',
      },
      odd:{
        marginLeft: inView? '0%':'50%', 
        x: inView? '0%':'-50%',
      }
    }

    //MOBILE VIEW
    if (screen.width < 1280){
      return(
        <div className='relative w-full h-full overflow-hidden' ref={ref} id={cardTitle}>
          <motion.div className="relative overflow-hidden mt-10 h-[30rem] md:h-[50rem] rounded-xl col-span-1 border-4 border-black "
                      onClick={()=>{setScale1(1.05), setScale2(1.1), setHovered(true)}} 
                      initial="hidden"
                      whileInView="visible"
                      viewport={{once: true}}
                      transition={{ duration : 0.7, ease : 'easeOut', type : 'tween' }}
                      variants={{ visible: VisibleImages, hidden: HiddenImages }}>

            
            <motion.div className='w-full h-full'>
              <motion.img src={imgPath} alt="CutsAndStyles" className={`object-cover w-full h-full duration-200 ease-out`} style={{x,y,scale:scale1}}/>
              <motion.img src={croppedImg} alt="CutsAndStyles" className={`absolute top-0 left-0 object-cover w-full h-full duration-500 ease-out`} style={{x:x2,y:y2,scale:scale2}}/>
            </motion.div>

              <motion.div className="absolute w-full py-5 top-0 inset-x-0 bg-black bg-opacity-40 text-center">
                <motion.p>
                  {cardTitle}
                </motion.p>
              </motion.div>
          </motion.div>

          <motion.div className="w-full text-center px-4 overflow-hidden bg-black bg-opacity-50 border-black border-t-8 border-b-8"
            initial={{ height:0 }}
            animate={{ height: isHovered? '':0 }}
            transition={{ duration:0.3 }}>
              <motion.p className={`text-2xl sm:text-4xl font-extralight pt-3 pb-8`}>{cardDsc}</motion.p>
          </motion.div>
        </div>
      )
    }

    //COMPUTER VIEW 
    else {
      return(
        <div className={`relative w-full h-full overflow-hidden ${isEven? 'flex justify-end':''}`} ref={ref} id={cardTitle}>
          <motion.div id='ImgContainer' className={`z-10 transform relative overflow-hidden my-5 rounded-xl w-[20rem] h-[30rem] border-4 border-black`}
                      onMouseEnter={handlHover} onMouseLeave={()=>{setHovered(false), x.set(0), y.set(0), setScale1(1), x2.set(0), y2.set(0), setScale2(1)}}
                      onMouseMove={(event)=>{
                        if(isHovered) {
                          const rect = event.currentTarget.getBoundingClientRect()
                          const mouseX = event.clientX - rect.left;
                          const mouseY = event.clientY - rect.top;
                          x.set((mouseX - rect.width / 2) *-0.05);
                          y.set((mouseY - rect.height / 2) *-0.05);
                          x2.set((mouseX - rect.width / 2) *-0.08);
                          y2.set((mouseY - rect.height / 2) *-0.08);
                        }
                      }}  
                      animate={ isEven? 'even':'odd'}
                      variants={animateVarients}
                      transition={{ duration : 0.7, delay:0.1, type:'spring' }}>

            
            <motion.div className='w-full h-full'>
              <motion.img src={imgPath} alt="CutsAndStyles" className={`object-cover w-full h-full duration-200 ease-out`} style={{x,y,scale:scale1}}/>
              <motion.img src={croppedImg} alt="CutsAndStyles" className={`absolute top-0 left-0 object-cover w-full h-full duration-500 ease-out`} style={{x:x2,y:y2,scale:scale2}}/>
            </motion.div>
          </motion.div>

          <motion.div className={`absolute my-5 top-0 left-0 right-0 m-auto duration-200 ${isEven?'text-left':'text-right'} `}
                      animate={{ width: inView?'100%':'0%' }}
                      transition={{ delay:0 }}>
            {/* TITLE */}
            <motion.p className={`bg-black rounded-lg p-3 duration-300 ${inView? '':'opacity-0'}`}>
              {cardTitle}
            </motion.p>

            {/* DESCRIPTION */}
            <motion.div className={`h-full w-full px-8 text-center overflow-hidden bg-black bg-opacity-50 rounded-lg -translate-y-3 ${isEven? 'pr-[22rem]':'float-right pl-[22rem]'}`}
              initial={{ height:'0rem', opacity:1 }}
              animate={{ height: inView? '20rem':'0rem', opacity: inView? 1:0 }}
              transition={{ duration:0.3, delay:0.7 }}>
                <motion.p className={`text-2xl font-medium pt-3 pb-8 ${inView? '':'opacity-0'}`}>{cardDsc}</motion.p>
            </motion.div>

          </motion.div>

        </div>
      )
    }
  })

  // FOR MOBILE VIEW
  const VisibleImages = {
    opacity:1, filter:'grayscale(0)', translateY : 0
  }
  const HiddenImages = {
    opacity:0, filter:'grayscale(100%)', translateY : 100
  }

  return (
    <>
      {/* EXAMPLES */}
      <div className='px-5 md:px-10 lg:px-40 py-20 text-white text-3xl font-extralight overflow-hidden justify-center lg:grid grid-flow-row grid-cols-3 lg:grid-cols-1'>
        
        {example.map((image) => exampleImages(image))}

      </div>
    </>
  )
}

// https://www.instagram.com/p/B5DLY_rFgJo/  See what you can do with this

// https://www.instagram.com/reel/Coh6eMLpL5y/ see if u can get this video in slow motion

// https://www.instagram.com/reel/CZx2mwJFXvG/ nother video

// https://www.instagram.com/reel/CyW9uKzv47A/ (BAYBLADE BAYBLADE LET IT RIP)