import './MakingAnOrder.scss'
import search from './images/search.svg'
import percent from './images/percent.svg'
import subtract from './images/subtract.svg'
import message from './images/message.svg'
import payment from './images/payment.svg'
import ElemScheme from '../ElemScheme/ElemScheme'
import MainForm from '../MainForm/MainForm'

function MakingAnOrder() {
    return(
        <section className='makingAnOrder'>
            <div className='container'>
                <div className='makingAnOrder__content'>
                    <div className='makingAnOrder__title'>Оформление <span className='makingAnOrder_cBlue'>заказа</span></div>
                    <div className='makingAnOrder__text'>Перед заполнением формы ознакомьтесь с нашей схемой работы!</div>
                    <div className='makingAnOrder__scheme'>
                        <ElemScheme 
                            srcImage={search}
                            altInfo={'Поиск'}
                            textInfo={'Lorem ipsum dolor sit amet'}
                        />
                        <ElemScheme 
                            srcImage={percent}
                            altInfo={'Процент'}
                            textInfo={'Сonsecteturadipiscing elit'}
                        />
                        <ElemScheme
                            srcImage={subtract}
                            altInfo={'Вычитать'}
                            textInfo={'Sed do eiusmod tempor'}
                        />
                        <ElemScheme 
                            srcImage={message}
                            altInfo={'Сообщение'}
                            textInfo={'Esse cillum dolore eu fugiat'}
                        />
                        <ElemScheme 
                            srcImage={payment}
                            altInfo={'Оплатить'}
                            textInfo={'Excepteur sint occaecat cupidatat non proident'}
                        />
                    </div>
                </div>
                <MainForm />
            </div>
        </section>
    )
}

export default MakingAnOrder;