import { createBrowserRouter , createRoutesFromElements , RouterProvider , Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import HomeContent from "./Home/HomeContent";
import Vans from "./Vans/Vans";
import VansDetails from "./Vans/VansDetails"
import Host from './Host/Host'
import HostVanDetail from './Host/HostVanDetail'
import Dashbord from './Host/Dashbord'
import Income from './Host/Income'
import Reviews from './Host/Reviews'
import HostVans from './Host/HostVans'
import Detail from "./Host/Details";
import Pricing from "./Host/Pricing";
import Photos from "./Host/Photos";
import DashbordVanDetail from "./Host/DashbordVanDetails";
import Error from "./Home/Error";
import ErrorHandler from "./ErrorHandler";
import { getVans } from "./Api";

function loader() {
  return getVans()
}

function App() {
  const router = createBrowserRouter(createRoutesFromElements (
    <Route path="/" element={<Home />}>
      <Route index element={<HomeContent />} />
      <Route path="about" element={<About />} />
      <Route path="vans"
        element={<Vans />}
        loader={loader}
        errorElement={<ErrorHandler />}
      />
      <Route path="vans/:id"
        element={<VansDetails />}
        loader={loader}
        errorElement={<ErrorHandler />}
      />
      <Route path="host" element={<Host />}>
        <Route index
          element={<Dashbord />}
          loader={loader}
          errorElement={<ErrorHandler />}
        />
        <Route path="van"
          element={<HostVans />}
          loader={loader}
          errorElement={<ErrorHandler />}
        />
        <Route path="van/:id"
          element={<HostVanDetail />}
          loader={loader}
          errorElement={<ErrorHandler />}
        >
          <Route index element={<Detail />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='photos' element={<Photos />} />
        </Route>
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
      <Route path=":id"
        element={<DashbordVanDetail />}
        loader={loader}
        errorElement={<ErrorHandler />}
      />
      </Route>
      <Route path="*" element={<Error />} />
    </Route>
  ))
  return (
    <RouterProvider router={router} />
  )
}

export default App;
