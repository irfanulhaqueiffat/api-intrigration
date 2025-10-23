import React from 'react'

const Productcard = () => {
  return (
    <><div>
            <div className='mt-[30px] flex gap-[30px] '>
                <div><img src={img1} alt="img1" /></div>
                <div>
                    <h2 className='text-2xl font-bold'>lorem ipsum</h2>
                    <p className='w-[250px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic id quasi praesentium, impedit modi blanditiis omnis earum cumque sit veritatis!</p>
                   <button className='px-6 py-3 bg-black text-white rounded-lg' >visit</button>
                </div>
       
                </div>
    
     </div>
     
           
   </>
  )
}

export default Productcard