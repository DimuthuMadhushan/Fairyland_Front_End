import './MyNav.css'
import Cookies from 'js-cookie'


function MyNav() {

    return (
        <div className="n-wrapper">
            <div className='category'>
                <ul>
                    <li>
                        <a href='/men'><button className='button n-button'>Men's Clothing</button></a>
                    </li>
                    <li>
                        <a href='/women'><button className='button n-button'>Women's Clothing</button></a>
                        
                    </li>
                    <li>
                    <a href='/Kids'><button className='button n-button'>Kids' Clothing</button></a>
                    </li>
                </ul>
            </div>
            <div className='homenav'>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About Us</a>
                    </li>
                    <li>
                        <a href="/contact">Contact Us</a>
                    </li>
                    <li>
                        <a href="/setting">{Cookies.get('seti')}</a>
                    </li>
                    <li>
                        <a href="/dashboard">{Cookies.get('dash')}</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MyNav