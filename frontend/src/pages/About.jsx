import React, { Component } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quisquam debitis quidem! Laborum debitis dolores eos temporibus pariatur, eius eveniet minima perferendis eaque, nobis inventore minus explicabo necessitatibus, tempore modi?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tenetur inventore. Vero necessitatibus nisi, minus porro officiis autem voluptatem enim aspernatur expedita sequi, dolorum iste vel temporibus nobis optio perferendis.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero repellendus vitae ex quas voluptatum sint maxime. Aliquam magni alias numquam illum, explicabo eaque itaque natus atque eligendi fugit nemo laboriosam!</p>
        </div>
      </div>
      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident error, id perspiciatis sunt libero voluptatibus laudantium totam! Porro voluptate ad possimus quidem minima ab numquam? Earum nulla consequatur inventore!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita blanditiis alias voluptatem corrupti ducimus veniam, laudantium autem iste atque sunt fugit aliquid quidem amet numquam itaque ullam. Cum, tempora dolorum?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita blanditiis alias voluptatem corrupti ducimus veniam, laudantium autem iste atque sunt fugit aliquid quidem amet numquam itaque ullam. Cum, tempora dolorum?</p>
        </div>

      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
