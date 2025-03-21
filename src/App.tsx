import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'
import './assets/scss/main.scss'
import './assets/fonts/lato/lato.scss'
import './assets/fonts/raleway/raleway.scss'
import './App.css'
import Home from './components/pages/PageHome/Home'
import Business from './components/pages/PageBusiness/Business'
import AboutUs from './components/pages/PageAboutUs/AboutUs'
import Prices from './components/pages/PagePrices/Prices'
import PlaceAnOrder from './components/pages/PagePlaceAnOrder/PlaceAnOrder'
import Footer from './components/smart/Footer/Footer'

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/business' element={<Business />} />
                    <Route path='/about-us' element={<AboutUs />} />
                    <Route path='/prices' element={<Prices />} />
                    <Route path='/place-an-order' element={<PlaceAnOrder />} />
                </Routes>
            </Router>
            <Footer />
        </>
    )
}

export default App;