import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Feed } from "./pages/Feed"
import { Article } from "./pages/Article"
import { About } from "./pages/About"
import { Features } from "./pages/Features"
import { CustomCursor } from "./components/CustomCursor"

function App() {
  return (
    <div>
      <CustomCursor />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/article/:id?" element={<Article />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
