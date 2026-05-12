import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Generate from './pages/Generate'
import History from './pages/History'
import Pricing from './pages/Pricing'
import BottomNav from './components/BottomNav'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 pb-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/history" element={<History />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
        <BottomNav />
      </div>
    </BrowserRouter>
  )
}

export default App
