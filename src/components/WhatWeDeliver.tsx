import {ShieldCheck,Gem,Sprout} from 'lucide-react'

export default function WhatWeDeliver() {

    return (
        <section className=" py-16 bg-[#2f4f4f] text-white">
        <div className="container px-4">
            <h2 className="text-3xl font-bold text-center mb-8">زیبایی یعنی حس خوب</h2>
            <p className="text-lg text-center mb-4 max-w-2xl mx-auto">
            زیبایی فقط در ظاهر نیست، در احساسی‌ست که هر روز با خودتان دارید.
            ما در زیبانوردیک باور داریم که انتخاب محصولات درست می‌تواند آرامش، اعتمادبه‌نفس و درخشش طبیعی شما را زنده کند.
            </p>
            <p className='max-w-2xl mx-auto'>
            هر محصولی که اینجا می‌بینید با عشق انتخاب شده تا بخشی از روتین روزانه‌ی شما شود و لحظه‌ای کوتاه از مراقبت شخصی را به تجربه‌ای لذت‌بخش تبدیل کند.
            </p>
            <ul className="list-inside text-lg flex gap-8 justify-center mt-8">
            <li className='flex flex-col'> <ShieldCheck size={60} strokeWidth={1} /> اصالت </li>
            <li  className='flex flex-col'> <Gem size={60} strokeWidth={1} /> کیفیت   </li>
            <li  className='flex flex-col'> <Sprout size={60} strokeWidth={1} /> سلامت </li>
            </ul>
        </div>
        </section>
    );
}
