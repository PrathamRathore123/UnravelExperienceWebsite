import './App.css'
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Footer } from './Components/ui/Footer'
import { ScrollToTop } from './Components/ui/ScrollToTop'
import { HomeLandingPage } from './Components/screens/Home'
import { About } from './Components/screens/About'
import { Experiences } from './Components/screens/Experiences'
import { Contact } from './Components/screens/Contact'
import { Login } from './Components/screens/Login'
import {Itenary} from './Components/screens/Itenary'
import { Signup } from './Components/screens/Signup'
import { NotFound } from './Components/screens/NotFound'

function App() {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomeLandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/itenary/:id' element={<Itenary/>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </GoogleOAuthProvider>
  )
}

export default App
