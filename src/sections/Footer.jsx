import React from 'react'

const Footer = () => {
    return (
        <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
            <div className='text-white-500 flex gap-2'>
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>
            <div className='flex gap-3'>
                <div className='social-icon flex items-center justify-center'>
                    <a href="https://github.com/fernando-00">
                        <img src="/assets/github.svg" alt="github" className='w-3/4 h-3/4 object-contain' />
                    </a>
                </div>
                <div className='social-icon flex items-center justify-center'>
                    <a href="https://www.linkedin.com/in/fernando-rosell-587976241/">
                        <img src="/assets/linkedinlogo.png" alt="linkedin" className='w-3/4 h-3/4 object-contain' />
                    </a>
                </div>
                <p className='text-white-500'>© 2024 Fernando All rights reserved</p>
            </div>

        </section>
    )
}

export default Footer