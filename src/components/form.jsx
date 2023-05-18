import React, { forwardRef } from 'react';
import { useForm } from 'react-hook-form';
import {useState} from 'react';
import {MdOutlineArrowRightAlt} from 'react-icons/md';

const Form = ({setSubmit, fSubmit}) => {

    const [agree, setAgree]=useState(false);
    

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();

      const onSubmit = (data) => {
        setSubmit(true);
        console.log(data);
        console.log(fSubmit);
        
      };

      const hanleClick=()=>{
        setSubmit(false);
      }


    const stateOptions = [
        { value: 'California', label: 'California' },
        { value: 'Texas', label: 'Texas' },
        { value: 'Michigan', label: 'Michigan' },
        { value: 'Bolder', label: 'Bolder' },
        { value: 'New York', label: 'New York' },
      ]

      const yourOptions = [
        { value: 'Installer', label: 'Installer' },
        { value: 'Provider', label: 'Provider' },
        { value: 'Dealer', label: 'Dealer' },
      ]

      const dOptions = [
        { value: 'Aerotect', label: 'Aerotect' },
        { value: 'Dalmia', label: 'Dalmia' },
        { value: 'Collection', label: 'Collection' },
      ]


  return (
    <div>
        {
            !fSubmit?
            <div  className='flex flex-col bg-white  border rounded-md py-[35px] md:w-[500px] w-[320px] justify-center items-center absolute top-[400px] left-[40px] md:top-[80px] md:left-[750px]'>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className='flex flex-col md:flex-row px-[30px] justify-between'>
                    <div className='flex flex-col'>
                        <label className='py-[3px] text-sm font-medium'>First Name</label>
                        <input  type='text' name='firstName' {...register("firstName")} className='py-[3px] px-[8px] border rounded-md border-[#62777D]'/>
    
                    </div>
    
                    <div className='flex flex-col'>
                        <label className='py-[3px] text-sm font-medium'>Last Name</label>
                        <input  type='text' name='lastName' {...register("lastName")} className='py-[3px] px-[8px] border rounded-md border-[#62777D]'/>
    
    
                    </div>
    
                </div>
    
                <div className='flex flex-col md:flex-row px-[30px] justify-between py-[6px]'>
                    <div className='flex flex-col'>
                        <label className='py-[3px] text-sm font-medium'>Email</label>
                        <input type='email' name='email' {...register("email")} className='py-[3px] px-[8px] border rounded-md border-[#62777D]'/>
    
                    </div>
    
                    <div className='flex flex-col'>
                        <label className='py-[3px] text-sm font-medium'>Contact number</label>
                        <input type='tel' name='contact' {...register("contact")} className='py-[3px] px-[8px] border rounded-md border-[#62777D]'/>
    
    
                    </div>
    
                </div>
    
                <div className='flex flex-col md:flex-row px-[30px] justify-between py-[6px]'>
                    <div className='flex flex-col'>
                        <label className='py-[3px] text-sm font-medium'>Company</label>
                        <input  type='text' name='company' {...register("company")} className='py-[3px] px-[8px] border rounded-md border-[#62777D]'/>
    
                    </div>
    
                    <div className='flex flex-col'>
                        <label className='py-[3px] text-sm font-medium'>State</label>
                            <select
                        className='md:w-[200px] w-auto  py-[5px] px-[4px] border rounded-md border-[#62777D] text-[#5D5D5D] text-sm font-light'
                        {...register('state')}>
                        {stateOptions.map(option => (
                        <option value={option.value}>{option.label}</option>
                        ))}
                    </select>
    
    
                    </div>
    
                </div>
    
                <div className='flex flex-col w-full px-[30px] justify-between py-[6px]'>
    
                <div className='flex flex-col py-[6px]'>
                        <label className='py-[3px] text-sm font-medium'>How would you describe yourself?</label>
                            <select
                        className='w-full  py-[4px] px-[4px] border rounded-md border-[#62777D] text-[#5D5D5D] text-sm font-light'
                        {...register('yourself')}>
                        {yourOptions.map(option => (
                        <option value={option.value}>{option.label}</option>
                        ))}
                    </select>
    
    
                    </div>
    
                    <div className='flex flex-col py-[6px]'>
                        <label className='py-[3px] text-sm font-medium'>Preferred Distributor:</label>
                            <select
                        className='w-full  py-[4px] px-[4px] border rounded-md border-[#62777D] text-[#5D5D5D] text-sm font-light'
                        {...register('distributor')}>
                        {dOptions.map(option => (
                        <option value={option.value}>{option.label}</option>
                        ))}
                    </select>
    
    
                    </div>
    
                    <div className='flex flex-col py-[6px]'>
                        <label className='py-[3px] text-sm font-medium'>Additional Information</label>
                        <textarea row={50} col={200} name='information' {...register('information')}  className='py-[3px] h-[120px] border rounded-md border-[#62777D]' />
    
                    </div>
    
                    <div className='flex flex-row py-[6px]'>
                            <input
                                type='checkbox'
                                className='w-6 h-6 justify-center'
                                onChange={() => setAgree(!agree)}
                            />
    
                            <span className='text-sm font-light pl-[10px]'>I'd like to receive promotions, product information and service offers from Avery Dennison.</span>
    
                    </div>
    
                    <div className='flex justify-center   px-[20px] py-[5px] w-full  rounded-lg mt-[30px]'>
                    <button className='flex flex-row justify-center items-center w-[180px] bg-[#F26621] py-[5px] px-[10px] rounded-md'><span className='flex justify-center text-white text-lg font-medium'>Submit</span> <MdOutlineArrowRightAlt size={'1.8em'} className='text-white pt-[3px] ml-[5px]'/></button>
              </div>
    
                </div>
            </form>
    
        </div>: 
        <></>
        }
    </div>
  )
}

export default forwardRef(Form);