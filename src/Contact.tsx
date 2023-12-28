// import { useState } from 'react'
// import { TiHomeOutline } from "react-icons/ti";

// export default function Contact() {

//   const [formData, setFormData] = useState({
//     Name: '',
//     Phone: '',
//     Email: '',
//     Message: ''
//   })



//   //Inputs
//   const inputs:string = 'w-full rounded-lg bg-transparent border shadow-2xl shadow-black bg-white xl:px-4 lg:py-2 font-bold'

//   //texts styles
//   const tags:string = 'col-span-2 xl:col-span-1 text-right font-extrabold text-white'

//   //Container for inputs
//   const inputContainer:string = 'col-span-10 xl:col-span-9'

//   return (
//   <>
//     <div className=''>
//         <a href='/' className='fixed p-3 w-full text-4xl text-white animate-pulse'>
//           <TiHomeOutline />
//         </a>
//       <div className='h-screen shadow-2xl text-3xl py-20'>
//         <div className='grid grid-cols-10 gap-2 lg:gap-6 m-auto w-5/6 lg:w-3/4 rounded-lg'>

//           <div className={`${tags}`}>
//             Name:
//           </div>
//           <div className={`${inputContainer}`}>
//             <input className={`${inputs}`}/>
//           </div>

//           <div className={`${tags}`}>
//             Phone:
//           </div>
//           <div className={`${inputContainer}`}>
//             <input className={`${inputs}`}/>
//           </div>

//           <div className={`${tags}`}>
//             Email:
//           </div>
//           <div className={`${inputContainer}`}>
//             <input className={`${inputs}`}/>
//           </div>

//           <div className={`${tags}`}/>
//           <div className={`${inputContainer}`}>
//             <textarea className={`${inputs} h-96 mt-10`}/>
//           </div>

//           <div className='col-span-4 lg:col-span-5'/>

//           <div className='col-span-6 lg:col-span-5'>
//             <button className={`${inputs}  transition-all duration-200 hover:bg-black hover:text-white`}>SEND</button>
//           </div>

//         </div>
//       </div>
//     </div>
//   </>
//   )
// }
