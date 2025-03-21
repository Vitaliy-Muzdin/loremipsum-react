import { useCallback, useState } from 'react'
import attachFile from './images/attachFile.svg'
import './MainForm.scss'

function MainForm() {
    const [value, setValue] = useState(0);
    const handleChangePercent = useCallback((elem) => {
        setValue(elem.target.value);
    }, []);

    return(
        <form id='mainForm' className='mainForm' method='post' encType='multipart/form-data'>
            <div className='mainForm__top'>
                <div className='row'>
                    <div className='mainForm__item'>
                        <label className='mainForm__select'>
                            <select id='mainFormSelect'>
                                <option value='default'>Выберите тип системы</option>
                                <option value='Sed ut perspiciatis'>Sed ut perspiciatis</option>
                                <option value='Nemo enim ipsam'>Nemo enim ipsam</option>
                                <option value='Et harum quidem'>Et harum quidem</option>
                                <option value='Temporibus autem'>Temporibus autem</option>
                                <option value='Itaque earum rerum'>Itaque earum rerum</option>
                            </select>
                        </label>
                    </div>
                    <div className='mainForm__item'>
                        <label htmlFor='mainFormEmail' className='mainForm__email'>
                            <input
                                    id='mainFormEmail'
                                    type='text'
                                    name='email'
                                    placeholder=''
                                    data-validate
                                    required={true}
                            />
                            <div className='mainForm__text'>Ваш e-mail</div>
                        </label>
                    </div>
                    <div className='mainForm__item'>
                        <label htmlFor='mainFormName' className='mainForm__name'>
                            <input
                                    id='mainFormName'
                                    type='text'
                                    name='name'
                                    placeholder=''
                                    data-validate
                                    required={true}
                            />
                            <div className='mainForm__text'>Ваше имя</div>
                        </label>
                    </div>
                </div>
            </div>

            <div className='mainForm__bottom'>
                <div className='row'>
                    <div className='mainForm__item'>
                        <div id='rangeWrap' className='mainForm__range'>
                            <label id='rangeLabel' className='mainForm__rangeLabel'>Sed ut perspiciatis, unde omnis iste natus</label>
                            <label id='output' className='mainForm__rangeOutput' htmlFor='range'>{value} %</label>
                            <input onChange={handleChangePercent} value={value} type='range' id='range' className='mainForm__rangeInput' min='0' max='100' />
                        </div>
                    </div>
                    <div className='mainForm__item'>
                        <div className='myfile'>
                            <label htmlFor='uploadedFile' className='myfile__label'>
                                <img src={attachFile} alt='Прикрепить файл' />
                                <span>Прикрепить файл</span>
                            </label>
                            <input type='file' className='myfile__input' id='uploadedFile' name='uploadedFile' multiple />
                        </div>
                    </div>
                </div>
            </div>

            <div className='mainForm__submitBlock'>
                <input id='next' type='submit' className='mainForm__submit' value='Отправить' />
            </div>

        </form>
    )
}

export default MainForm;