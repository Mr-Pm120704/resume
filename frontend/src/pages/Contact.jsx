import React from 'react';
import ContactForm from '../ui/ContactForm'; 
export default function Contact(){ 
    return (
    <div className='max-w-4xl mx-auto px-6 py-24 bg-black rounded-md'>
        <h2 className='text-3xl font-bold mb-4'>Talk With a Data Expert</h2>
        <ContactForm/>
    </div>
    );
}