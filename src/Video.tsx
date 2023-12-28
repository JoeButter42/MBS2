import videoSource from './assets/hairsalonVert.mp4'

export default function Video() {
  return (
    <>
    <div className='-z-10 aboslute overflow-hidden lg:hidden'>
      <video className='relative w-screen h-screen object-cover'
            src={videoSource}
            preload='auto'
            muted
            autoPlay
            loop/>
    </div>
    </>
  )
}
