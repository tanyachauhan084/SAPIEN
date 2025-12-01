import Navbaar from './Navbaar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <div>
        <Navbaar/>
        <Outlet/>
       <Footer/>
    </div>
  )
}

export default Layout