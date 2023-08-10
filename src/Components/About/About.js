import React from 'react'
import logo from '../images/fairylandlogo.png'


function About() {
    return (
        <div className='ft'>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src={logo} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About Us
                        </h1>
                        <p className="mb-8 leading-relaxed text-left">We have More than 5-year experience in Clothiing company Company in Sri Lanka and leading well established Marketing, Services and uprising Company.

                            Fairyland.lk has well Skilled, Responsible Director board and honestly staff. Our main focus is to sell the quality and baranded products for you, amazing services and keeping a long-time business relationship with you.

                            Moreover, we have partnered with platforms such as Daraz and Ikman.lk to broaden and create more business opportunities through brand awareness. We import our product range directly according to the customer demand and ultimately being able to offer the best prices in the market with quality goods.</p>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default About