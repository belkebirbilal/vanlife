import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import HomeContent from "./Home/HomeContent";
import Vans from "./Vans/Vans";
import { useState , useEffect } from "react";
import VansDetails from "./Vans/VansDetails"
import Host from './Host/Host'
import Dashbord from './Host/Dashbord'
import Income from './Host/Income'
import Reviews from './Host/Reviews'
import HostVans from './Host/HostVans'
import HostVanDetail from './Host/HostVanDetail'
import Detail from "./Host/Details";
import Pricing from "./Host/Pricing";
import Photos from "./Host/Photos";

function App() {
  const [data , setData] = useState([])
  useEffect(() => {
      async function getData() {
          const data = await fetch('https://api.jsonbin.io/v3/b/670aa770ad19ca34f8b73e1b')
          const res = await data.json()
          setData(res.record)
      }
      getData()
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeContent />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans data={data} />} />
          <Route path="vans/:id" element={<VansDetails data={data} />} />
          <Route path="host" element={<Host />}>
            <Route index element={<Dashbord />} />
            <Route path="van" element={<HostVans data={data} />} />
            <Route path="van/:id" element={<HostVanDetail data={data} />}>
              <Route index element={<Detail data={'nothing'} />} />
              <Route path='pricing' element={<Pricing />} />
              <Route path='photos' element={<Photos />} />
            </Route>
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
