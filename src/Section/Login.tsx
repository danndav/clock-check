import React from 'react'
import { fDate } from '../utils/formatTime'

const Layout = ({ nearby = false} : {nearby : boolean}) => {

    const date = new Date()

    return (
        <div className='w-full bg-[#F6F5F5] h-full '>
            <div className='w-full text-white relative flex flex-col md:flex-row  md:justify-center items-center px-20 py-10 bg-[#6839BB]'>
                <img className='md:absolute left-3 md:left-10' src='/logo.png' />
                <div className='md:mx-auto ml-auto'>
                    <h3 className='text-xl md:text-3xl text-center font-semibold'>Enthronement Assembly</h3>
                    <h5 className='text-center text-sm md:text-lg font-thin italic'>activating and actualizing God’s royalty in you..</h5>
                </div>

            </div>
            <div className='flex py-20 items-center justify-center'>
                <div className='w-full mx-auto md:w-[729px] h-auto'>
                    <h3 className='text-4xl text-center tracking-widest font-normal'>Welcome Royalty!</h3>
                    {/* <h5 className='text-2xl font-bold'>{date.toDateString()}</h5> */}
                    {/* <div className='mx-auto w-[205px] mt-6 bg-white border rounded flex items-center justify-center h-[80px]'>
                        <h3 className='text-5xl text-center  font-semibold '>{date.getHours()} : {date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()} <span className='text-xs'>{date.getHours() < 12 ? "AM" : "PM"}</span></h3>

                    </div> */}
                    <img src='/clock.png' className='block mx-auto mt-6' />
                    <div className='w-full rounded py-4 px-4 border bg-white mt-4'>
                        <h3 className='text-center text-sm border-b pb-3'>Kindly enter your EA Number to clock in</h3>
                        <div className='mt-4'>
                            <div>
                                <label className='text-[#4F5559] text-xs'>EA number</label>
                                <input placeholder='EA83...' className=' w-full  px-3 mt-1 h-[48px] border rounded ' />
                            </div>

                            <button disabled={!nearby} className='w-[180px] mx-auto text-white mt-8 h-[48px] flex items-center justify-center bg-[#6839BB] rounded '>Clock in</button>

                        </div>
                    </div>




                </div>
            </div>


        </div>
    )
}

export default Layout