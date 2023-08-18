import './App.css'
import Popup from './components/Popup'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import SlideContainer from './components/SlideContainer'
import Fulfilment from './components/Benefit/Fulfilment'
import Solutions from './components/Solutions/Solutions'
import Introduce from './components/Introduce/Introduce'
function App() {
  return (
    <div className="App">
      <Popup />
      <Header />
      <Routes>
        <Route path="/" element={<SlideContainer />} />
        <Route path="/benefit/*" element={<Fulfilment />} />
        <Route path="/solution/*" element={<Solutions />} />
        <Route path="/introduce/*" element={<Introduce />} />
      </Routes>
    </div>
  )
}

export default App
