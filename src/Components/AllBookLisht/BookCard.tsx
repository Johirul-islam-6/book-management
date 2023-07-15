import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
const BookCard = () => {
    return (
        <>
  <div className="grid gap-3  grid-cols-1 md:grid-cols-2 items-center justify-center ">
        <div className="max-w-md md:max-w-2xl px-2 mt-5">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden md:flex">
                <div className="bg-cover bg-bottom h-56 md:h-auto md:w-72">
                </div>
                <div>
                    <div className="p-4 md:p-5">
                        <p className="font-bold text-xl md:text-2xl">Amsterdam Walking Tour</p>
                        <p className="text-[#347394] text-md md:text-[16px] font-bold">Author : mr.rasel khan</p>
                        <p className="text-gray-700 md:text-lg">Explore popular tourist destinations as well as hidden local favourites <span className="text-[#26d1ef]">more..</span></p>
                    </div>
                    <div className="p-4 md:p-5 bg-gray-100">
                         <div className="text-[14px] text-gray-700 flex"><span className="text-gray-900 font-bold flex gap-1"> <span className="text-[#c01f52] mt-[5px]"> <FaHeart/> </span> 17k </span>   <span className="pl-1"> person Loved it.</span> </div>
                        <div className="sm:flex sm:justify-between sm:items-center">
                            <div>
                              
                                <div className="flex items-center">
                                    <div className="md:flex inline-flex -mx-px">
                                        <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                        <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                        <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                        <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                        <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                    </div>
                                    <div className="text-gray-600 ml-2 text-sm md:text-base mt-1">28 reviews</div>
                                </div>
                            </div>
                           <Link to={'details/1'}>
                            <button className="mt-3 sm:mt-0 py-2 px-5 md:py-2 md:px-5 bg-indigo-700 hover:bg-indigo-600 font-bold text-white md:text-md rounded-lg shadow-md">Read now</button>
                           </Link>
                        </div>
                        
                      
                     
                    </div>
                </div>
            </div>
        </div>
        <div className="max-w-md md:max-w-2xl px-2 mt-5">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden md:flex">
                <div className="bg-cover bg-bottom h-56 md:h-auto md:w-72">
                </div>
                <div>
                    <div className="p-4 md:p-5">
                        <p className="font-bold text-xl md:text-2xl">Amsterdam Walking Tour</p>
                        <p className="text-[#347394] text-md md:text-[16px] font-bold">Author : mr.rasel khan</p>
                        <p className="text-gray-700 md:text-lg">Explore popular tourist destinations as well as hidden local favourites <span className="text-[#26d1ef]">more..</span></p>
                    </div>
                    <div className="p-4 md:p-5 bg-gray-100">
                         <div className="text-[14px] text-gray-700 flex"><span className="text-gray-900 font-bold flex gap-1"> <span className="text-[#c01f52] mt-[5px]"> <FaHeart/> </span> 17k </span>   <span className="pl-1"> person Loved it.</span> </div>
                        <div className="sm:flex sm:justify-between sm:items-center">
                            <div>
                              
                                <div className="flex items-center">
                                    <div className="md:flex inline-flex -mx-px">
                                        <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                        <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                        <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                        <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                        <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                    </div>
                                    <div className="text-gray-600 ml-2 text-sm md:text-base mt-1">28 reviews</div>
                                </div>
                            </div>
                           <Link to={'details/1'}>
                            <button className="mt-3 sm:mt-0 py-2 px-5 md:py-2 md:px-5 bg-indigo-700 hover:bg-indigo-600 font-bold text-white md:text-md rounded-lg shadow-md">Read now</button>
                           </Link>
                        </div>
                        
                      
                     
                    </div>
                </div>
            </div>
        </div>
        <div className="max-w-md md:max-w-2xl px-2 mt-5">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden md:flex">
                <div className="bg-cover bg-bottom h-56 md:h-auto md:w-72">
                </div>
                <div>
                    <div className="p-4 md:p-5">
                        <p className="font-bold text-xl md:text-2xl">Amsterdam Walking Tour</p>
                        <p className="text-[#347394] text-md md:text-[16px] font-bold">Author : mr.rasel khan</p>
                        <p className="text-gray-700 md:text-lg">Explore popular tourist destinations as well as hidden local favourites <span className="text-[#26d1ef]">more..</span></p>
                    </div>
                    <div className="p-4 md:p-5 bg-gray-100">
                         <div className="text-[14px] text-gray-700 flex"><span className="text-gray-900 font-bold flex gap-1"> <span className="text-[#c01f52] mt-[5px]"> <FaHeart/> </span> 17k </span>   <span className="pl-1"> person Loved it.</span> </div>
                        <div className="sm:flex sm:justify-between sm:items-center">
                            <div>
                              
                                <div className="flex items-center">
                                    <div className="md:flex inline-flex -mx-px">
                                        <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                        <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                        <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                        <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                        <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                    </div>
                                    <div className="text-gray-600 ml-2 text-sm md:text-base mt-1">28 reviews</div>
                                </div>
                            </div>
                           <Link to={'details/1'}>
                            <button className="mt-3 sm:mt-0 py-2 px-5 md:py-2 md:px-5 bg-indigo-700 hover:bg-indigo-600 font-bold text-white md:text-md rounded-lg shadow-md">Read now</button>
                           </Link>
                        </div>
                        
                      
                     
                    </div>
                </div>
            </div>
        </div>
        <div className="max-w-md md:max-w-2xl px-2 mt-5">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden md:flex">
                <div className="bg-cover bg-bottom h-56 md:h-auto md:w-72">
                </div>
                <div>
                    <div className="p-4 md:p-5">
                        <p className="font-bold text-xl md:text-2xl">Amsterdam Walking Tour</p>
                        <p className="text-[#347394] text-md md:text-[16px] font-bold">Author : mr.rasel khan</p>
                        <p className="text-gray-700 md:text-lg">Explore popular tourist destinations as well as hidden local favourites <span className="text-[#26d1ef]">more..</span></p>
                    </div>
                    <div className="p-4 md:p-5 bg-gray-100">
                         <div className="text-[14px] text-gray-700 flex"><span className="text-gray-900 font-bold flex gap-1"> <span className="text-[#c01f52] mt-[5px]"> <FaHeart/> </span> 17k </span>   <span className="pl-1"> person Loved it.</span> </div>
                        <div className="sm:flex sm:justify-between sm:items-center">
                            <div>
                              
                                <div className="flex items-center">
                                    <div className="md:flex inline-flex -mx-px">
                                        <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                        <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                        <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                        <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                        <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                    </div>
                                    <div className="text-gray-600 ml-2 text-sm md:text-base mt-1">28 reviews</div>
                                </div>
                            </div>
                           <Link to={'details/1'}>
                            <button className="mt-3 sm:mt-0 py-2 px-5 md:py-2 md:px-5 bg-indigo-700 hover:bg-indigo-600 font-bold text-white md:text-md rounded-lg shadow-md">Read now</button>
                           </Link>
                        </div>
                        
                      
                     
                    </div>
                </div>
            </div>
        </div>
       
       
    </div>
        </>
    );
};

export default BookCard;