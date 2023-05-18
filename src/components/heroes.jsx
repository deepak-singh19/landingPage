import Footer from './footer';
import React from 'react';
import Top from './top';
import Feature from './feature';
import WhyUs from './whyUs';
import Form from './form';


const Heroes = () => {
  return (
    <div className='flex flex-col'>
        <Top/>
        <Feature/>
        <WhyUs/>
        {/* <Form/> */}
        <Footer/>
    </div>
  )
}

export default Heroes;