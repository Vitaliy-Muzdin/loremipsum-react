import Nav from '../Nav/Nav'
import './Header.scss'

function Header() {
    return (
        <header className='header'>
            <Nav />
            <div className='container'>
                <div className='header__title'>
                    <h1><span className='header_cBlue'>Lorem ipsum</span> dolor sit <span className='header_dsBlock'>amet consectetur <span className='header_cBlue'>adipiscing</span></span></h1>
                </div>
                <div className='header__content'>
                    <div className='header__content_bold'>At vero eos et accusamus et iusto odio dignissimos ducimus!</div>
                    <ul>
                        <li>Totam rem aperiam eaque ipsa</li>
                        <li>Sit voluptatem accusantium doloremque laudantium</li>
                        <li>Sed ut perspiciatis, unde omnis iste natus error</li>
                    </ul>
                </div>
                <div className='header__buttons'>
                    <a href='#'>Заказать</a>
                    <a href='#' className='buttonReadMore'>Подробнее</a>
                </div>
            </div>
        </header>
    )
}

export default Header;