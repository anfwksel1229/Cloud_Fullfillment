import './App.css'
import Popup from './components/Popup'
import Header from './components/Header.js'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import SlideContainer from './components/SlideContainer.js'
import Fulfilment from './components/Benefit/Fulfilment'

function App() {
  return (
    <div className="App">
      <Popup />
      <Header />
      <Routes>
        <Route path="/" element={<SlideContainer />} />
        <Route path="/benefit/*" element={<Fulfilment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
