import './Footer.scss'
import qiwi from './images/qiwi.svg'
import yandexMoney from './images/yandexMoney.svg'
import webMoney from './images/webMoney.svg'
import mail from './images/mail.svg'
import vk from './images/vk.svg'

function Footer() {
    let currentYear = new Date().getFullYear();
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer__content'>
                    <div className='footer__item'>
                        <div className='footer__elem'>
                            © {currentYear} «LoremIpsum.net» Все права защищены.
                        </div>
                    </div>
                    <div className='footer__item'>
                        <a href='#' target='_blank' className='footer__elem'>
                            <span className='footer__image'>
                                <img src={qiwi} alt='Qiwi wallet' />
                            </span>
                            <span className='footer__name'>Qiwi wallet</span>
                        </a>
                        <a href='#' target='_blank' className='footer__elem'>
                            <span className='footer__image'>
                                <img src={yandexMoney} alt='Yandex Money' />
                            </span>
                            <span className='footer__name'>Yandex Money</span>
                        </a>
                        <a href='#' target='_blank' className='footer__elem'>
                            <span className='footer__image'>
                                <img src={webMoney} alt='Web Money' />
                            </span>
                            <span className='footer__name'>Web Money</span>
                        </a>
                    </div>
                    <div className='footer__item'>
                        <a href='#' target='_blank' className='footer__elem'>
                            <span className='footer__image'>
                                <img src={mail} alt='Почта' />
                            </span>
                            <span className='footer__name'>info@ipsum228.com</span>
                        </a>
                        <a href='https://vk.com/' target='_blank' className='footer__elem'>
                            <span className='footer__image'>
                                <img src={vk} alt='Мы вконтакте' />
                            </span>
                            <span className='footer__name'>Мы вконтакте</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;