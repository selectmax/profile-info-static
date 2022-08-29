import { useState } from 'react'
import Footer from "./Footer.jsx";
import MainInfo from "./MainInfo.jsx";
import PhotoPage from "./PhotoPage.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <PhotoPage />
      <MainInfo />
      <Footer />
    </div>
  )
}

export default App
