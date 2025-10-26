import React from 'react'
import img1 from '../assets/download.jpeg' 
import img2 from '../assets/download.jpeg'
import img3 from '../assets/download.jpeg'
import Button from '../components/Button'


const Home = () => {
  return (
    <div>
        <h1 className='text-5xl font-bold'>Blog</h1>
<div>
        <div className='mt-[30px] flex gap-[30px] '>
            <div><img src={img1} alt="img1" className='mb-[30px]' /></div>
            <div>
                <h2 className='text-2xl font-bold'>lorem ipsum</h2>
                <p className='w-[350px] mb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic id quasi praesentium, impedit modi blanditiis omnis earum cumque sit veritatis!</p>
               <Button variant="primary" className='px-6 py-3 bg-black text-white rounded-lg' >visit</Button>
            </div>
   
            </div>

 </div>
 <div>
        <div className='mt-[30px] flex gap-[30px] '>
            <div><img src={img3} alt="img1" className='mb-[30px]' /></div>
            <div>
                <h2 className='text-2xl font-bold'>lorem ipsum</h2>
               <p className='w-[350px] mb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic id quasi praesentium, impedit modi blanditiis omnis earum cumque sit veritatis!</p>
                <Button variant="secondary" className='px-6 py-3 bg-black text-purple-500 rounded-lg' >visit</Button>
            </div>
   
            </div>

 </div>
       
<div>
        <div className='mt-[30px] flex gap-[30px] '>
            <div><img src={img3} alt="img1" /></div>
            <div>
                <h2 className='text-2xl font-bold'>lorem ipsum</h2>
                <p className='w-[350px] mb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic id quasi praesentium, impedit modi blanditiis omnis earum cumque sit veritatis!</p>
               <Button variant="danger" className='px-6 py-3 bg-black text-white rounded-lg' >visit</Button>
            </div>
   
            </div>

 </div>
    

       

















    </div>
  )
}

export default Home