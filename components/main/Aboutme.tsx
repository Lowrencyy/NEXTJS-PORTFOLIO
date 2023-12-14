import React from 'react'
// import {motion} from 'framer-motion'
import Image from "next/image";
 import  useEffect from 'react'
// import AOS from 'aos';
import 'aos/dist/aos.css';


const Aboutme = () => {
  return (
    <div id='about-em'>
        <section className="bg-transparent dark:bg-gray-900">

        
<section className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
    {/* <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
        <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">More Info About Me</span> 
        <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
    </a>  */}
    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white sm:text-6xl md:text-5xl lg:text-6xl dark:text-white mt-20" >ABOUT ME </h1>

    <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Hi I&#39;m <b className='text-red-700'>Mark Laurence Laurio Tomenio </b>Before I Enter Web Developing Field I Study In Mfi Polytechnic Institute In Ortigas As Computer Engineering and also Cisco Networking.</p>

       

        <section className="bg-transparent dark:bg-gray-900">

          

            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
               

           
                <div className="mt-4 md:mt-0">

                <h6 className="mb-4 text-2xl tracking-tight font-extrabold text-white dark:text-white">As A Web Developer The First Programming Language I learned was Javascript Way Back When I Studying In KODEGO.</h6>

                    <p className="mb-6 font-light text-white font-bold md:text-lg dark:text-gray-400">
                        Then in my Free Time I Watch Some Lectures and Other Things That Can Enhance My Skills In Web Developing Or Website Designing after a couple of weeks I learn HTML CSS and Framework Of Bootstrap and Tailwind CSS
                    </p>
                 
                </div>
                <Image
                 src="/rence.jpg"
                alt="logo"
                width={420}
                height={120}
                className='rence-img'
            
          />
            </div>


            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white sm:text-6xl md:text-5xl lg:text-6xl dark:text-white">NETWORK PROJECT&#39;S</h1>
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">

            <video
              loop
              muted
              autoPlay
              playsInline
              preload="false"
              className="rence-br"
              src="/2.mp4"
              width={400}
            />
                {/* <video autoplay muted src="/2.mp4" className="w-full dark::hiden rence" width="200px" loop></video> */}

                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">My Project As Network Admin</h2>
                    <p className="mb-6 font-light text-white md:text-lg dark:text-gray-400">Before I Start Web Developing i do freelance Network Admin Such As Wireless LTE Specially In Remote Area I have knowledge how to gather data whether the area is remote access or island i do also Point to Point System By Transfering Data From Wireless Radio Channel and also as a network diagram and setup such as SOHO or Corporate Network Cabling and etc.</p>
                 
                </div>
             
            </div>

            

            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white sm:text-6xl md:text-5xl lg:text-6xl dark:text-white mt-20">TECHNICAL SUPPORT / AND OTHER PROJECT&#39;S</h1>

            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">

                <div className="mt-4 md:mt-0">

                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">IT TECHNICAL SUPPORT </h2>
                    <p className="mb-6 font-light text-white md:text-lg dark:text-gray-400">I Have Additional Knowledge In Computer Fundamentals such as fixing and troubleshoot Computer Hardware and software&#39; i study TESDA NCII Computer System Servicing and i take a short courses from <span className='text-red-700'>GOOGLE IT TECHNICAL SUPPORT</span>i also do a mechatronics like piso wifi and other machine that can be sell in marketplace </p>
                 
                </div>
                
                  <video
                  loop
                  muted
                  autoPlay
                  playsInline
                  preload="false"
                  className='rence-br'
                  src="/1.mp4"
                  width={400}
                  
                />
               
                {/* <video autoplay muted src="/1.mp4" className="w-full dark::hiden rence" width="200px" loop></video> */}
            </div>
        </section>

</section>
</section>
<section className="bg-transparent dark:bg-gray-900 ">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-1 lg:px-1">
            <figure className="max-w-screen-md mx-auto">
                <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                </svg> 
                <blockquote>
                    <p className="text-2xl font-medium text-white dark:text-white">	&#34;IF THE PATH THAT YOU WANT SEEM&#34;S TO BE EASY THEN YOU ARE IN A WRONG PATH	&#34;</p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <div className="pr-3 font-medium text-white dark:text-white">Mark Laurence Tomenio</div>
                        <div className="pl-3 text-sm font-light text-white dark:text-gray-400">FULL STACK WEB DEVELOPER</div>
                    </div>
                </figcaption>
            </figure>
        </div>
      </section>
    </div>
  )
}

export default Aboutme