import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
 import Home from '../Componet/Home'
import Contact from './Contact'
import AboutUs from './AboutUs'
import Service from './Service'
import Shop from './Shop'
import Breadcrum from './Breadcrum'
import Slick from './Slick'
import AdminHome from '../Componet/Admin/AdminHome/AdminHome'
import Sidebar from '../Componet/Admin/Sidebar'
import AdminMaincategory from '../Componet/Admin/AdminMaincategory/AdminMaincategory'
import AdminCreateMaincategory from '../Componet/Admin/AdminMaincategory/AdminCreateMaincategory'
import Error404 from './Error404'
import AdminUpdateMaincategory from '../Componet/Admin/AdminMaincategory/AdminUpdateMaincategory'

export default function App() {
     return (
               <>
               <BrowserRouter>
               <Navbar/>

               <Routes>
                    <Route path="/" element={ <Home/>} />
                    <Route path="/contact" element={ <Contact/>} />
                    <Route path="/aboutUs" element={ <AboutUs/>} />
                    <Route path="/service" element={ <Service/>} />
                    <Route path="/shop" element={ <Shop/>} />
                    <Route path="/breadcrum" element={ <Breadcrum/>} />
                    <Route path="/slick" element={ <Slick/>} />
                    <Route path="/*" element={ <Error404/>} />
                    
                    
                    <Route path="/sidebar" element={ <Sidebar/>} />
                    <Route path="/admin" element={ <AdminHome/>} />
                    <Route path="/admin/maincategory" element={ <AdminMaincategory/>} />
                    <Route path="/admin/maincategory/create" element={ <AdminCreateMaincategory/>} />
                    <Route path="/admin/maincategory/update/:id" element={ <AdminUpdateMaincategory/>} />
               </Routes>
               <Footer/>
               </BrowserRouter>
               </>

        
     )
}
