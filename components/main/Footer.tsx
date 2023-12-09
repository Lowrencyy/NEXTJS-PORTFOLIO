import React from "react";



const Footer = () => {
  return (
    <footer className="p-4 sticky bg-transparent md:p-8 lg:p-10 dark:bg-gray-800 z-50">
    <div className="mx-auto max-w-screen-xl text-center">
        <a href="#" className="flex justify-center items-center text-2xl font-semibold text-white dark:text-white">
            MARK LAURENCE TOMENIO    
        </a>
        <p className="my-6 text-gray-500 dark:text-white">Here&#39;s My Additional Contact Info</p>
        <ul className="flex flex-wrap z-51 justify-center items-center mb-6 text-white dark:text-white">
            <li className="z-54">
                <a href="/lowrency" className="mr-4 hover:underline md:mr-6 ">Facebook</a>
            </li>
            <li>
                <a href="www.facebook.com" className="mr-4 hover:underline md:mr-6">Instagram</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">LinkedIn</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Messenger</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Telegram</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Github</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Contact</a>
            </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023<a href="#" className="hover:underline">Mark Laurence Tomenio</a>. All Rights Reserved.</span>
    </div>
  </footer>
  )
}

export default Footer