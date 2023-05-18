import React from 'react';
import Img from '../assets/GS_DIGITAL_AD_WALL_FILMS_INTERIOR_DESIGN_COLLECTION_Indoor_MPI8621_Removable.png';
import L1 from '../assets/Group 110.png';
import L2 from '../assets/ici-adhesives.png';
import L3 from '../assets/ici-online-communication.png';
import L4 from '../assets/Path 68.png';
import {MdOutlineArrowRightAlt} from 'react-icons/md';
import Img1 from '../assets/mobile.png';
import { useState,useEffect, useRef } from 'react';
import Form from './form';




const whyUsData=[
    {
        id:1,
        title:'Quality Products',
        img:L1,
        desc:'Our digital overlaminate films are made from the highest quality materials and are designed to provide superior protection and appearance to your digital prints.',
    },
    {
        id:2,
        title:'Multiple Options',
        img:L2,
        desc:'We offer DOL Max in a 2.1 mil gloss finish and 1.3 mil optically clear, gloss finish. This allows you to choose the perfect film thickness level for your specific application, ensuring your graphics look the best and stand out from the competition.',
    },
    {
        id:3,
        title:'Expertise and Support',
        img:L3,
        desc:'Our team of experts are available to provide guidance and support throughout the entire process, from selecting the right product for your needs to installation and beyond.',
    },
    {
        id:4,
        title:'Durability Assurance Trust',
        img:L4,
        desc:'our products with confidence, as we offer industry leading durability assurance for our overlaminate films.',
    },

] 

const WhyUs = () => {

    const[preview, setPrivew]=useState(false);
    const [showTopBtn, setShowTopBtn] = useState(false);
    const[fSubmit,setSubmit]=useState(false);
    const ref=useRef(null);
    // const mref=useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // const scrollHandler=(ref)=>{
    //     // console.log(elmRef);
    //     // window.scrollTo({ top:elmRef.current.offsetToTop, behavior:'smooth'});
    //     ref.current?.scrollIntoView({behavior :'smooth'})
    // }



  return (
    <>
    <div className='hidden md:flex md:flex-row md:w-full md:h-auto'>

<div className='flex w-2/5'>

    <img src={Img} alt="BG" className='w-full h-full'/>

</div>

<div className='flex flex-col w-full bg-[#E5E5E5] pl-[60px] pt-[40px]'>

    <div >
        <h1 className='text-4xl font-semibold'>Why Us?</h1>
    </div>

    <div className='flex flex-row  pt-[40px]'>

        <div className='flex rounded-full bg-white w-[60px] h-[60px] justify-center items-center'>
            <img src={L1} alt="Logo1" className='w-[30px] h-[40px]' />
        </div>

        <div className='flex w-10/12 flex-col pl-[30px]'>
            <div className='flex flex-wrap'>
                <h1 className='text-sm font-semibold'>Quality Products</h1>
            </div>

            <div className='pt-[4px]'>
                <h1 className='text-sm font-light' >Our digital overlaminate films are made from the highest quality materials and are designed to provide superior protection and appearance to your digital prints.</h1>
            </div>

        </div>

    </div>

    <div className='flex flex-row  pt-[40px]'>

        <div className='flex rounded-full bg-white w-[60px] h-[60px] justify-center items-center'>
            <img src={L2} alt="Logo1" className='-[30px] h-[35px]' />
        </div>

        <div className='flex flex-col pl-[30px] w-10/12'>
            <div className='flex flex-wrap'>
                <h1 className='text-sm font-semibold'>Multiple Options</h1>
            </div>

            <div className='pt-[4px]'>
                <h1 className='text-sm font-light' >We offer DOL Max in a 2.1 mil gloss finish and 1.3 mil optically clear, gloss finish. This allows you to choose the perfect film thickness level for your specific application, ensuring your graphics look the best and stand out from the competition.</h1>
            </div>

        </div>

    </div>


    <div className='flex flex-row  pt-[40px]'>

        <div className='flex rounded-full bg-white w-[60px] h-[60px] justify-center items-center'>
            <img src={L3} alt="Logo1" className='-[30px] h-[35px]' />
        </div>

        <div className='flex flex-col pl-[30px] w-10/12'>
            <div className='flex flex-wrap'>
                <h1 className='text-sm font-semibold'>Expertise and Support</h1>
            </div>

            <div className='pt-[4px]'>
                <h1 className='text-sm font-light' >Our products with confidence, as we offer industry leading durability assurance for our overlaminate films.</h1>
            </div>

        </div>

    </div>


    <div className='flex flex-row  pt-[40px]'>

        <div className='flex rounded-full bg-white w-[60px] h-[60px] justify-center items-center'>
            <img src={L4} alt="Logo1" className='w-[30px] h-[35px]' />
        </div>

        <div className='flex flex-col pl-[30px] w-10/12'>
            <div className='flex flex-wrap'>
                <h1 className='text-sm font-semibold'>Durability Assurance Trust</h1>
            </div>

            <div className='pt-[4px]'>
                <h1 className='text-sm font-light' >Our digital overlaminate films are made from the highest quality materials and are designed to provide superior protection and appearance to your digital prints.</h1>
            </div>

        </div>

    </div>


    <div className='border px-[20px] py-[5px] w-[300px] bg-[#F26621] rounded-lg mt-[30px]'>
        <button onClick={()=>{goToTop();setPrivew(true);setSubmit(false) } } className='flex flex-row justify-center items-center'><span className='flex justify-center text-white text-base font-medium'>Request a call back</span> <MdOutlineArrowRightAlt size={'1.8em'} className='text-white pt-[3px] ml-[15px]'/></button>
    </div>

    {
        preview?<Form setSubmit={setSubmit} fSubmit={fSubmit}/>:<></>
    }


</div>

    </div>


    {/* Mobile */}

    <div className='md:hidden flex flex-col w-full h-auto '>

        

        <div className='flex flex-col w-full bg-[#E5E5E5] pl-[20px] py-[20px]'>

            <div >
                <h1 className='text-xl font-semibold'>Why Us?</h1>
            </div>

            <div className='flex flex-col  pt-[20px]'>

                <div className='flex rounded-full bg-white w-[60px] h-[60px] justify-center items-center'>
                    <img src={L1} alt="Logo1" className='w-[30px] h-[40px]' />
                </div>

                <div className='flex w-10/12 flex-col pt-[10px]'>
                    <div className='flex flex-wrap'>
                        <h1 className='text-sm font-semibold'>Quality Products</h1>
                    </div>

                    <div className='pt-[4px]'>
                        <h1 className='text-sm font-light' >Our digital overlaminate films are made from the highest quality materials and are designed to provide superior protection and appearance to your digital prints.</h1>
                    </div>

                </div>

            </div>

            <div className='flex flex-col  pt-[40px]'>

                <div className='flex rounded-full bg-white w-[60px] h-[60px] justify-center items-center'>
                    <img src={L2} alt="Logo1" className='-[30px] h-[35px]' />
                </div>

                <div className='flex flex-col pt-[10px] w-10/12'>
                    <div className='flex flex-wrap'>
                        <h1 className='text-sm font-semibold'>Multiple Options</h1>
                    </div>

                    <div className='pt-[4px]'>
                        <h1 className='text-sm font-light' >We offer DOL Max in a 2.1 mil gloss finish and 1.3 mil optically clear, gloss finish. This allows you to choose the perfect film thickness level for your specific application, ensuring your graphics look the best and stand out from the competition.</h1>
                    </div>

                </div>

            </div>


            <div className='flex flex-col  pt-[40px]'>

                <div className='flex rounded-full bg-white w-[60px] h-[60px] justify-center items-center'>
                    <img src={L3} alt="Logo1" className='-[30px] h-[35px]' />
                </div>

                <div className='flex flex-col pt-[10px] w-10/12'>
                    <div className='flex flex-wrap'>
                        <h1 className='text-sm font-semibold'>Expertise and Support</h1>
                    </div>

                    <div className='pt-[4px]'>
                        <h1 className='text-sm font-light' >Our products with confidence, as we offer industry leading durability assurance for our overlaminate films.</h1>
                    </div>

                </div>

            </div>


            <div className='flex flex-col  pt-[40px]'>

                <div className='flex rounded-full bg-white w-[60px] h-[60px] justify-center items-center'>
                    <img src={L4} alt="Logo1" className='w-[30px] h-[35px]' />
                </div>

                <div className='flex flex-col pt-[10px] w-10/12'>
                    <div className='flex flex-wrap'>
                        <h1 className='text-sm font-semibold'>Durability Assurance Trust</h1>
                    </div>

                    <div className='pt-[4px]'>
                        <h1 className='text-sm font-light' >Our digital overlaminate films are made from the highest quality materials and are designed to provide superior protection and appearance to your digital prints.</h1>
                    </div>

                </div>

            </div>


            <div className='border px-[20px] py-[5px] w-[170px]  rounded-lg mt-[30px]'>
                <button onClick={()=>{setPrivew(true); goToTop();setSubmit(false)} } className='flex flex-row justify-center  bg-[#F26621] w-[170px] items-center'><span className='flex justify-center text-white text-sm font-medium'>Inquire now</span> <MdOutlineArrowRightAlt size={'1.8em'} className='text-white pt-[3px] ml-[15px]'/></button>
            </div>

            {

                preview?<Form setSubmit={setSubmit} fSubmit={fSubmit} />:<></>
            
            }



        </div>

        <div className='flex w-full '>

            <img src={Img1} alt="BG" className='w-full h-[350px] object-fill'/>

        </div>

    </div>
    </>
  )
}

export default WhyUs