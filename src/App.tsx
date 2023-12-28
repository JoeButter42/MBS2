import Nav from './Nav'
import Video from './Video'
import Carousel from './Carousel'
import Services from './Services'
import ContactNum from './ContactNum'
import Hours from './Hours'
import Address from './Address'
import Examples from './Examples'
import Footer from './Footer'


function App() {

  return (
    <>
      <div className='text-center'>
          <div>
            <Nav/>
          </div>
            
          {/* VIDEO */}
          <div>
            <Video/>
          </div>

          {/* CAROUSEL */}
          <div id='Carousel' className='hidden lg:block' >
            <Carousel/>
          </div>

          <div className='bg-black'>
            {/* SERVICES */}
            <div id='Services'>
              <Services/>
            </div>
                  
            {/* CONTACT AND PHONE NUMBER */}
            <div id='Contact'>
              <ContactNum/>
            </div>

            {/* HOURS */}
            <div className=''>
              <Hours/>
            </div>

            {/* ADDRESS */}
            <div>
              <Address/>
            </div>
          </div>

          <div id='Examples'>
            <Examples />
          </div>

          <div>
            <Footer/>
          </div>
      </div>
    </>
  )
}

export default App

// 1241 alamo drive suite 3
// Michelle's beauty studio
