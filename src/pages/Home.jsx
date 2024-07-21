import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Lottie from 'lottie-react';
import AsepPhoto from '../assets/images/asep.png'
import DikiPhoto from '../assets/images/diki.png'
import NabilaPhoto from '../assets/images/nabila.jpeg'
import SopyanPhoto from '../assets/images/sopyan.png'
import LerianPhoto from '../assets/images/lerian.png'
import GatherLogo from '../assets/images/gather.svg'
import RamonaLogo from '../assets/images/ramona.png'
import HackrativeLogo from '../assets/images/hackrative.png'
import DsdsLogo from '../assets/images/dsds.png'
import PempekLogo from '../assets/images/pempek.png'
import ServerAnimate from '../assets/animations/server.json'
import ReactLogo from '../assets/react.svg'
import { faCpanel, faDocker, faFacebook, faInstagram, faJs, faLaravel, faLinux, faNodeJs, faPhp, faReact, faTiktok, faWindows } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
  return (
    <main className='flex flex-col items-center justify-center'>
      <section className='w-full flex flex-col items-center justify-center py-14 h-screen bg-gray-100'>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto items-center max-w-5xl'>
          <div className='space-y-5 px-5 md:px-0'>
            <a href="#" className='flex items-center gap-3'>
              <img src={ReactLogo} alt="" />
              <span className='font-bold text-2xl'>SilenaID 🇮🇩</span>
            </a>
            <div className='space-y-3'>
              <h2 className='font-bold text-3xl'>Solution For Your Systems</h2>
              <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora officia aut similique reiciendis neque fugit quasi quos ratione ipsa quo.</p>
              <a href='https://wa.me/6285318557284' className='inline-block bg-gray-800 hover:bg-gray-900 text-white px-4 py-2.5 text-sm rounded-xl'>Let's collaborate!</a>
            </div>
          </div>
          <div>
            <div className='flex items-center justify-center w-full h-full'>
              <Lottie animationData={ServerAnimate} loop={true} />
            </div>
          </div>
        </div>
      </section>
      <section className='w-full py-14 bg-gray-900'>
        <div className='w-full mx-auto max-w-5xl'>
          {/* <header className='text-center space-y-1 mb-10'>
            <h2 className='font-bold text-gray-100 text-2xl'>Stack of Technologies</h2>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, explicabo.</p>
          </header> */}
          <div className="flex flex-wrap items-center justify-center gap-5 md:gap-10 text-white">
            <FontAwesomeIcon icon={faLaravel} size='4x' />
            <FontAwesomeIcon icon={faReact} size='4x' />
            <FontAwesomeIcon icon={faNodeJs} size='4x' />
            <FontAwesomeIcon icon={faDocker} size='4x' />
            <FontAwesomeIcon icon={faJs} size='4x' />
            <FontAwesomeIcon icon={faPhp} size='4x' />
            <FontAwesomeIcon icon={faCpanel} size='4x' />
            <FontAwesomeIcon icon={faWindows} size='4x' />
            <FontAwesomeIcon icon={faLinux} size='4x' />
          </div>
        </div>
      </section>
      <section className='w-full py-14 bg-slate-50'>
        <div className='w-full mx-auto max-w-5xl'>
          <header className='text-center space-y-1 mb-10'>
            <h2 className='font-bold text-gray-800 text-2xl'>Our Great Team</h2>
            <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quisquam!</p>
          </header>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            <div className='flex flex-col justify-center items-center gap-4'>
              <img src={AsepPhoto} alt="Asep Manarul Hidayah" className='rounded-full w-28 h-28 border-4 border-slate-300' />
              <div className='text-center space-y-1'>
                <h2 className='font-bold text-gray-800'>Asep Manarul Hidayah</h2>
                <p className='text-gray-600 text-sm'>Chief Executive Officer & Founder</p>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
              <img src={DikiPhoto} alt="Diki Nur Rahman" className='rounded-full w-28 h-28 border-4 border-slate-300' />
              <div className='text-center space-y-1'>
                <h2 className='font-bold text-gray-800'>Diki Nur Rahman</h2>
                <p className='text-gray-600 text-sm'>Chief Executive Officer & Founder</p>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
              <img src={NabilaPhoto} alt="Nabila Azzahra" className='rounded-full w-28 h-28 border-4 border-slate-300' />
              <div className='text-center space-y-1'>
                <h2 className='font-bold text-gray-800'>Nabila Azzahra</h2>
                <p className='text-gray-600 text-sm'>Chief Technology Officer & Founder</p>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
              <img src={SopyanPhoto} alt="Sopyan Sauri" className='rounded-full w-28 h-28 border-4 border-slate-300' />
              <div className='text-center space-y-1'>
                <h2 className='font-bold text-gray-800'>Sopyan Sauri</h2>
                <p className='text-gray-600 text-sm'>Chief Technology Officer & Founder</p>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
              <img src={LerianPhoto} alt="Lerian Febriana" className='rounded-full w-28 h-28 border-4 border-slate-300' />
              <div className='text-center space-y-1'>
                <h2 className='font-bold text-gray-800'>Lerian Febriana</h2>
                <p className='text-gray-600 text-sm'>Chief Technology Officer & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full py-14 bg-gray-900'>
        <div className='w-full mx-auto max-w-5xl'>
          <header className='text-center space-y-1 mb-10'>
            <h2 className='font-bold text-gray-100 text-2xl'>Partnership</h2>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, explicabo.</p>
          </header>
          <div className="flex flex-wrap items-center justify-center gap-10 text-white">
            <img src={RamonaLogo} alt="" className='h-44 grayscale transition ease-in-out hover:grayscale-0' />
            <img src={HackrativeLogo} alt="" className='h-24 grayscale transition ease-in-out hover:grayscale-0' />
            <img src={DsdsLogo} alt="" className='h-36 grayscale transition ease-in-out hover:grayscale-0' />
            <img src={PempekLogo} alt="" className='h-32 grayscale transition ease-in-out hover:grayscale-0' />
          </div>
        </div>
      </section>
      <section className='w-full pt-14 px-10 bg-white'>
        <div className='w-full mx-auto max-w-5xl space-y-10'>
          <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
            <div className='w-full md:w-1/3 bg-white h-44 rounded-2xl space-y-4'>
              <a href="https://app.gather.town/invite?token=ovQqpAeVRoOE3vHHYBmo" target='_blank' className='block'><img src={GatherLogo} alt="" className='h-7' /></a>
              <div className='space-y-1'>
                <a href="https://app.gather.town/invite?token=ovQqpAeVRoOE3vHHYBmo" target='_blank' className='inline-block flex items-center gap-2 font-bold text-xl text-gray-900'>Virtual Office</a>
                <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quis.</p>
              </div>
              <div className='flex items-center gap-2 text-gray-600'>
                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="#"><FontAwesomeIcon icon={faTiktok} /></a>
              </div>
            </div>
            <div className='w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-5'>
              <div className='space-y-2'>
                <h4 className='font-bold'>Terms & Conditions</h4>
                <ul className='text-sm list-decimal ml-5 space-y-1'>
                  <li className='text-gray-700'>Lorem ipsum dolor sit amet consectetur.</li>
                  <li className='text-gray-700'>Lorem ipsum dolor sit amet.</li>
                  <li className='text-gray-700'>Lorem ipsum dolor amet consectetur.</li>
                  <li className='text-gray-700'>Lorem ipsum sit amet consectetur.</li>
                  <li className='text-gray-700'>Lorem ipsum dolor sit amet consectetur.</li>
                </ul>
              </div>
              <div className='space-y-2'>
                <h4 className='font-bold'>About</h4>
                <ul className='text-sm list-decimal ml-5 space-y-1'>
                  <li className='text-gray-700'>Lorem ipsum dolor sit amet consectetur.</li>
                  <li className='text-gray-700'>Lorem ipsum dolor sit amet.</li>
                  <li className='text-gray-700'>Lorem ipsum dolor amet consectetur.</li>
                  <li className='text-gray-700'>Lorem ipsum sit amet consectetur.</li>
                  <li className='text-gray-700'>Lorem ipsum dolor sit amet consectetur.</li>
                </ul>
              </div>
            </div>
          </div>
          <p className='text-xs py-2 text-center text-slate-700'>Copyright © 2024 Silena Indonesia 🇮🇩</p>
        </div>
      </section>
    </main>
  )
}

export default Home