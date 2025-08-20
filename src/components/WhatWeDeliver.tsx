import {ShieldCheck,Gem,Sprout} from 'lucide-react'

export default function WhatWeDeliver() {

    return (
        <section className=" py-16 bg-[#2f4f4f] text-white">
        <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Beauty Means Feeling Good</h2>
            <p className="text-lg text-center mb-4 max-w-2xl mx-auto">
            Beauty is not just about appearance, it is about the feeling you have with yourself every day.
            We at NordicBeauty believe that choosing the right products can awaken your peace, confidence, and natural radiance.
            </p>
            <p className='max-w-2xl mx-auto'>
            Every product you see here has been lovingly selected to become part of your daily routine and transform a brief moment of personal care into a delightful experience.
            </p>
            <ul className="list-inside text-lg flex gap-8 justify-center mt-8">
            <li className='flex flex-col'> <ShieldCheck size={60} strokeWidth={1} /> Authenticity </li>
            <li  className='flex flex-col'> <Gem size={60} strokeWidth={1} /> Quality   </li>
            <li  className='flex flex-col'> <Sprout size={60} strokeWidth={1} /> Health </li>
            </ul>
        </div>
        </section>
    );
}
