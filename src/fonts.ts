import localFont from 'next/font/local'

export const nazanin = localFont({
    src: [
       { path:'../public/fonts/NAZANIN.woff2',
        weight: '400',
        style: 'normal' 
       }
    ],
    preload: true,
    display: 'swap',
    variable: '--font-nazanin'
})