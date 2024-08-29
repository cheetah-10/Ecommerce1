import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import 'react-toastify/dist/ReactToastify.css'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick'



import {ToastContainer,toast} from 'react-toastify'



createRoot(document.getElementById('root')).render(
  <StrictMode>
     
     <App />
     <ToastContainer autoClose={1000}></ToastContainer>
   
  </StrictMode>,
)
