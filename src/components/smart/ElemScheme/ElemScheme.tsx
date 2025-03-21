import './ElemScheme.scss'

function ElemScheme({srcImage, altInfo, textInfo}) {
    return(
        <div className='schemeElem'>
            <div className='schemeElem__icon'>
                <div className='dots'>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                </div>
                <div className='schemeElem__icon_verCenter'>
                    <img src={srcImage} alt={altInfo} />
                </div>
            </div>
            <div className='schemeElem__name'>{textInfo}</div>
        </div>
    )
}

export default ElemScheme;