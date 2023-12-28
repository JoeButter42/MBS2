import { useEffect, useRef} from 'react'
import { motion } from 'framer-motion'
import img1 from './assets/Blond.jpg'
import img2 from './assets/Colors_2.jpg'
import img3 from './assets/CutsAndStyles_2.jpg'
import img4 from './assets/Highlights_2.jpg'
import img5 from './assets/Colors_3.jpg'
import img6 from './assets/CutsAndStyles_3.jpg'

const imgs:string[] = [
    img1, img2, img3, img4, img5, img6
]

const Carousel = () => {

    const carousel = (image:string, index:number)=>{
        return(
            <motion.li key={index} className='shrink-0 overflow-hidden my-10 pt-2 rounded-xl' style={{boxShadow: '20px 20px 5px rgba(0, 0, 0, 0.5)'}}
                        viewport={{once: true}}
                        initial={{y:400, opacity:0,}}
                        whileInView={{y:0, opacity:1}}
                        transition={{delay: index *0.1, duration:0.4, ease:'easeOut', type:'spring'}}>
                <motion.div className='h-[60vh] xl:h-[70vh] w-[40vw] xl:w-[20vw] rounded-xl'
                            whileHover={{ width: '30vw' }}
                            style={{ overflow: 'hidden' }}>
                    <motion.img className='h-full w-full object-cover border-black border-2 rounded-xl'
                                src={image}
                                alt={`Image ${index}`}/>
                </motion.div>
            </motion.li>
        )
    }

    const cariRef:any = useRef<HTMLUListElement>(null)

    const autoScroll =()=>{
        if(cariRef.current){
            setTimeout(() => {
                cariRef.current.scrollLeft +=1.5

                if(cariRef.current.scrollLeft >= cariRef.current.scrollWidth / 3){
                    cariRef.current.scrollLeft = 0
                }
            }, 1500);
            
            
        }
    }

    useEffect (()=>{
        const interval = setInterval(autoScroll, 20)
        return ()=>clearInterval(interval)
    }, [])

    const generateCariItems = () =>{
        const dupeImgs = [...imgs,...imgs,...imgs]
        return dupeImgs.map((image, index) => carousel(image,index))
    }


  return (
    <>
        <div className='relative w-full overflow-hidden'>
            {/* IMAGES */}
            <ul ref={cariRef} className='flex overflow-hidden gap-6'>
                {generateCariItems()}
            </ul>
        </div>
    </>
  );
}

export default Carousel