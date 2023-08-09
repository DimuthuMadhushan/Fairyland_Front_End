import React from 'react'
import './MyNav.css'


function MyNav() {
  return (
        <div className="n-wrapper">
           <div className='category'>
            <ul>
                <li>
                    <button className='button n-button'>Men's Clothing</button>
                </li>
                <li>
                    <button className='button n-button'>Women's Clothing</button>                
                </li>
                <li>
                    <button className='button n-button'>Kids' Clothing</button>
                </li>
            </ul>
           </div>
           <div className='homenav'>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="">About Us</a>
                    </li>
                    <li>
                        <a href="">Contact Us</a>
                    </li>
                </ul>
           </div>
        </div>
    )
}

export default MyNav