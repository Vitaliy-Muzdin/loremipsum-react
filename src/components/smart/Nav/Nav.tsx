import { useState } from 'react';
import './Nav.scss'
import close from './images/close.svg'

function Nav() {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(current => !current);
    };
    const removeHandleClick = () => {
        setIsActive(false);
    };
    const currentPage = window.location.href;
    const myDomain = window.location.protocol + '//' + window.location.host + '/';
    return (
        <section className='nav'>
            <div className='container'>
                <div className='nav__content'>
                    <div className='nav__logo'>
                        <a href='/'>
                            <span>LoremIpsum.</span>
                            <span className='nav_cBlue'>Net</span>
                        </a>
                    </div>
                    <div className='nav__burger' onClick={handleClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <nav className={'nav__menu' + (isActive ? ' active' : '')}>
                        <div className='nav__close' onClick={removeHandleClick}>
                            <img src={close} alt='Закрыть' />
                        </div>
                        <ul>
                            <li>
                                <a href='business' className={currentPage == myDomain + 'business' ? 'active' : ''}>Бизнес</a>
                            </li>
                            <li>
                                <a href='about-us' className={currentPage == myDomain + 'about-us' ? 'active' : ''}>О нас</a>
                            </li>
                            <li>
                                <a href='prices' className={currentPage == myDomain + 'prices' ? 'active' : ''}>Цены</a>
                            </li>
                            <li>
                                <a href='place-an-order' className={currentPage == myDomain + 'place-an-order' ? 'active' : ''}>Оформить заказ</a>
                            </li>
                        </ul>
                    </nav>
                    <div className={'nav__darkBg' + (isActive ? ' active' : '')} onClick={removeHandleClick}></div>
                </div>
            </div>
        </section>
    )
}

export default Nav;