import React from 'react'
import { FaCircleArrowRight } from 'react-icons/fa6'

const Footer = () => {

    const CustomLinkComponent = ({length, linkName}) =>{
        return (
            <>
            {
                Array.from({length}).map((_,i)=>{
                    return (
                        <span key={i} className='text-sm text-[grey]'>{linkName}</span>
                    )
                })
            }
            </>
        )
    }

    const CustomParentLinkComponent = ({heading,length, linkheading,linkName}) =>{
        return (
            <div className='flex flex-col gap-2'>
                <span className='font-semibold'>{heading && heading}</span>
            <span className='text-[black]'>{linkheading}</span>
            <CustomLinkComponent length={length} linkName={linkName} />
        </div>
        )
    }
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col md:flex-row justify-between px-8 bg-[#e7f0f5] py-10 md:px-16'>
        <div className=' flex flex-col md:justify-normal justify-center items-center md:items-start'>
            <span className='md:text-7xl text-5xl'>Visthar</span>
            <span className='md:text-2xl mt-2 font-semibold'>Subscribe TO Our Email Alerts</span>
            <div className='flex w-[80%] items-center bg-[white] rounded-lg mt-3 md:mt-0'>
            <input type='text'  className='bg-[white] py-3 px-5 border-0 outline-none rounded-lg' placeholder='enter your email address'/>
            <FaCircleArrowRight className='cursor-pointer'/>
            </div>
        </div>

        <div className='flex  md:gap-20 mt-5 md:mt-0'>
        <div className=' flex flex-col'>
            <span className='mb-2 font-semibold'>Shop</span>
            {
                Array.from({length:5}).map((_,i)=>{
                    return (
                        <span key={i} className='text-[grey] font-light mb-2 text-sm'>category</span>
                    )
                })
            }
        </div>

        <div className=' flex flex-col'>
        <span style={{visibility:"hidden"}} className='mb-2 font-semibold'>Shop</span>
            {
                Array.from({length:5}).map((_,i)=>{
                    return (
                        <span className='text-[grey] font-light mb-2 text-sm' key={i}>item category</span>
                    )
                })
            }
        </div>
        </div>

        <div className=' flex flex-col'>
            <span className='font-semibold mb-2'>Help</span>
            {
                                Array.from({length:7}).map((_,i)=>{
                                    return (
                                        <span className='text-[grey] font-light mb-2 text-sm' key={i}>Helpfull Links</span>
                                    )
                                })
            }
        </div>

        <div className=' flex flex-col md:mr-20'>
        <span className='font-semibold mb-2'>Company</span>
            {
                                Array.from({length:9}).map((_,i)=>{
                                    return (
                                        <span className='text-[grey] font-light mb-2 text-sm' key={i}>About Company Links</span>
                                    )
                                })
            }
        </div>
        
      </div>
      <div className='hidden md:flex flex-col md:flex-row md:px-16 bg-[#ecf0f2] justify-evenly'>

        <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
            <span className='font-semibold'>Wireless Earbuds</span>
            <CustomLinkComponent length={4} linkName="earbuds name" />
            </div>

            <div className='flex flex-col gap-2'>
                <span className='font-semibold'>Shop By Price</span>
                <CustomLinkComponent length={6} linkName="shop under 899" />
            </div>
        </div>

        <div className='flex flex-col gap-6'>
            <CustomParentLinkComponent heading="Speakers" length={5} linkheading="Shop BY Feature" linkName="Shop By SpeakerName" />

            <CustomParentLinkComponent length={6} linkheading="Shop BY Price" linkName="shop By Price"/>

            <CustomParentLinkComponent heading="Soundbars" length={5} linkheading="Shop By Feature" linkName="Shop By SoundbarName" />
        </div>

        <div className='flex flex-col gap-6'>
            <CustomParentLinkComponent heading="Cables"
            length={5} linkheading="Shop By Features" linkName="Shop BY CableName" />

            <CustomParentLinkComponent heading="Wireless HeadPhones" length={6} linkheading="Shop By Feature" linkName="Shop By HeadhoneName" />

            <CustomParentLinkComponent heading="Wired HeadPhones" length={6} linkheading="Shop By Feature" linkName="Shop By HeadhoneName" />
        </div>

        <div className='flex flex-col gap-6'>
        <CustomParentLinkComponent heading="PowerBanks" length={6} linkheading="Shop By Feature" linkName="Shop By PowerBankName" />

        <CustomParentLinkComponent heading="Smart Watches" length={6} linkheading="Shop By Feature" linkName="Shop By WatchName" />
        </div>
      </div>
    </div>
  )
}

export default Footer
