import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import { color } from 'three/webgpu'
import Button from '../components/Button'

const About = () => {

    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('fernando.rosell.work@gmail.com');

        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className='c-space my-20' id='about'>
            <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />

                        <div>
                            <p className='grid-headtext'>
                                Hi, I'm Fernando
                            </p>
                            <p className='grid-subtext'>
                                I am a Northwestern University graduate with a Bachelor of Science in Computer Science.
                                As a first-generation college student, I developed a strong work ethic and resilience,
                                which drive my passion for software engineering and its potential to solve real-world problems.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid2.png" alt="grid-2" className='w-full sm:w-[276px] h-full object-contain' />

                        <div>
                            <p className='grid-headtext'>Tech Stack</p>
                            <p className='grid-subtext'>
                                I specialize in building full-stack applications using React, Node.js/Express, and Flask,
                                with a strong focus on Python/Javascript. My experience also extends to machine learning
                                with PyTorch and Transformers, as well as managing databases like PostgreSQL and MongoDB.
                                Additionally, I have hands-on experience with cloud services like AWS for scalable deployments.
                            </p>
                        </div>

                    </div>
                </div>


                <div className='col-span-1 xl:row-span-4 '>
                    <div className='grid-container'>
                        <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor='rgba(0,0,0,0)'
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"


                            />
                        </div>
                        <div className='flex flex-col justify-between h-full'>
                            <div>
                                <p className='grid-headtext'>
                                    I work remotely and have a flexible schedule.
                                </p>
                                <p className='grid-subtext'>
                                    Based in Chicago, Illinois, I am open to remote opportunities across different time zones.
                                    My adaptable schedule allows me to accommodate various project needs, ensuring timely communication
                                    and collaboration. Whether it’s a fast-paced project or long-term development work, I’m here to help
                                    bring your vision to life.
                                </p>
                            </div>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>

                    </div>
                </div>

                <div className='xl:col-span-2 xl:row-span-3 '>
                    <div className='grid-container'>
                        <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain' />

                        <div>
                            <p className='grid-headtext'>
                                My passion for coding
                            </p>
                            <p className='grid-subtext'>
                                With experience in various programming languages and technologies,
                                I’m always eager to learn and take on new challenges in the tech industry.
                                With over a year of experience primarily in frontend and backend development,
                                I have built dynamic and user-friendly web applications. Additionally,
                                I’ve focused my studies on the machine learning and AI domain, leveraging
                                data-driven approaches to create smarter and more adaptive solutions. My dedication to coding
                                fuels my drive to continuously refine my skills and contribute to impactful projects.
                            </p>

                        </div>
                    </div>
                </div>


                <div className='xl:col-span-1 xl:row-span-2'>
                    <div className='grid-container'>
                        <img src="/assets/grid4.png" alt="grid-4" className='w-full md:h-[126px] sm-[276px] h-fit object-cover sm:object-top' />
                        <div className='space-y-2'>
                            <p className='grid-subtext text-center'>
                                Contact Me
                            </p>
                            <div className='copy-container' onClick={handleCopy}>
                                <img src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt="copy" />
                                <p className='lg:text-1xl md:text-xl font-medium text-gray_gradiant text-white'>fernando.rosell.work@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About