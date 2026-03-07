import './App.css';
import HomePage from './components/home/HomePage';
import SignUp from './components/signup/Signup';   
import AboutPage from './components/about/AboutPage';
import ProductPage from './components/products/ProductPage';
import PricingPage from './components/pricing/PricingPage';
import SupportPage from './components/support/SupportPage';
import NotFound from './components/notFound/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />

     <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/pricing' element={<PricingPage/>}/>
        <Route path='/support' element={<SupportPage/>}/>
        <Route path='*' element={<NotFound/>}/>
     </Routes> 

     <Footer />
   </>  
  )
}

export default App
