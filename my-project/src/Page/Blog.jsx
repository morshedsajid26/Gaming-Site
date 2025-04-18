import React from 'react'
import Container from '../Layer/Container'
import { IoSearch, IoTimerSharp } from 'react-icons/io5'


import BlogBanner1 from '/BlogBanner1.png'
import BlogBanner2 from '/BlogBanner2.png'
import BlogBanner3 from '/BlogBanner3.png'
import BlogBanner4 from '/BlogBanner4.png'
import BlogBanner5 from '/BlogBanner5.png'
import ArticlePaginate from '../Component/ArticlePaginate'





const Blog = () => {
  return (
   
   <div className=''>
        <Container>
           
           <div className='flex items-center  pt-[51px] pb-[42px] '>
                      <h3 className='text-white font-Inter text-4xl mr-[34px]'>Blog Articles</h3>

                      <div className='w-[756px] flex justify-between'>
                        <span className='py-3 px-[22px] border rounded-[10px] text-white font-OS text-[24px] hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% cursor-pointer transition-all duration-300 '>All</span>
                        <span className='py-3 px-[22px] border rounded-[10px] text-white font-OS text-[24px] hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% cursor-pointer transition-all duration-300'>Gaming</span>
                        <span className='py-3 px-[22px] border rounded-[10px] text-white font-OS text-[24px] hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% cursor-pointer transition-all duration-300'>Investment</span>
                        <span className='py-3 px-[22px] border rounded-[10px] text-white font-OS text-[24px] hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% cursor-pointer transition-all duration-300'>Software</span>
                        <span className='py-3 px-[22px] border rounded-[10px] text-white font-OS text-[24px] hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% cursor-pointer transition-all duration-300'>News</span>
                      </div>

                      <div className="searchBar w-[350px] relative  ml-[320px]">
                                      <input className='bg-[#1E2127] text-[#B2B8C2] font-OS text-[22px] outline-none w-full py-3 px-[23px] rounded-[10px]' type="text" placeholder='Search blog article...' />
                                     
                                      <IoSearch className='w-[22.5px] h-[22.5px] text-[#B2B8C2] absolute top-1/2 -translate-y-1/2 right-4' />
                                      
                                  </div>
              </div>

              <div className=' bg-[url("/public/BlogBanner.png")] bg-cover bg-center bg-no-repeat w-[1664px] relative after:absolute after:w-full after:h-full after:bg-black/20 after:top-0 after:left-0 after:rounded-[25px] after:-z-30 z-30 rounded-[25px]  '>

              <div className='pl-[69px] pt-[242.8px]'>



              <div className='flex gap-[11px]'>
                <span className='py-1 px-2.5 bg-white font-OS text-[18px] rounded-[10px]'>Gaming</span>

                <span className='py-1 px-2.5 bg-white font-OS text-[18px] rounded-[10px]'>Stray</span>
              </div>

              <h3 className='font-Inter text-white text-[68px] mt-[9px] mb-[22px]'>Top digital game releases</h3>

              <div className='flex items-center gap-[22.5px]'>
                <p className='text-[24px] font-Inter text-[#E614FC]'>19 Sep, 23</p>

                <p className='text-white font-OS text-[20px] flex items-center gap-[7px]'>
                <IoTimerSharp className='text-white/40 h-[31px] w-[31px]' />
               
                3 min read
                
                </p>
              </div>


              <div className='hidden md:flex gap-[35px] items-end mt-[46px] pb-[79px]'>
               <img className='border-4 border-white/30 rounded-[25px] p-1' src={BlogBanner1} alt="" />
               <img className='border-4 border-white/30 rounded-[25px] p-1' src={BlogBanner2} alt="" />
               <img className='border-4 border-white/30 rounded-[25px] p-1' src={BlogBanner3} alt="" />
               <img className='border-4 border-white/30 rounded-[25px] p-1' src={BlogBanner4} alt="" />
               <img className='border-4 border-white/30 rounded-[25px] p-1' src={BlogBanner5} alt="" />
              </div>


              </div>
              
                
              </div>

        </Container>

        <Container className='pt-[202px] pb-[196px]'>
        <div className='flex items-center justify-between mb-[35px]'>
                <h1 className='text-[14px] md:text-[36px] font-OS text-white'>Latest articles</h1>
                <div className='h-[1px] md:h-[2px] w-[40px] md:w-[1324px] bg-custom-gradient'
                ></div>

                
            </div>

            <div>

              <ArticlePaginate
              itemsPerPage={9}
              />

            </div>
        </Container>
    </div>
  )
}

export default Blog