
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes,Router, Route} from 'react-router-dom'
import './index.css'
import { HomePage } from './landing_Page/home/HomePage'
import { Singup } from './landing_Page/singup/Signup'
import {AboutPage} from './landing_Page/about/AboutPage'
import { ProductPage } from './landing_Page/products/ProductPage'
import { PricingPage } from './landing_Page/pricing/PricingPage'
import {SupportPage} from './landing_Page/support/SupportPage'
import { Navbar } from './landing_Page/Navbar'
import { Footer } from './landing_Page/Footer'
import { NotFound } from './landing_Page/NotFound'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/signup' element={<Singup />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/product' element={<ProductPage />}></Route>
          <Route path='/pricing' element={<PricingPage />}></Route>
          <Route path='/support' element={<SupportPage />}></Route>
          <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
)
