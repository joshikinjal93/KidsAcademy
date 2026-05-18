import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Topheader from './Components/Topheader';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer';
import About from './Components/about/about';
import Classes from './Components/Classes/Classes';
import TeachersPage from './Components/Teachers/TeachersPage';
import Contact from './Components/Contact/Contact';
import AboutStyle from './Components/About/AboutStyle';
import GalleryPage from './Components/Gallery/GalleryPage';
import ClassDetails from './Components/Classes/ClassDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Topheader/>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/home-style-02" element={<h1>Home style 02</h1>}/>
          <Route path="/home-style-03" element={<h1>Home style 03</h1>}/>
          <Route path="/one-page" element={<h1>One Page</h1>}/>
          <Route path="/boxed-layout" element={<h1>Boxed Layout</h1>}/>
          <Route path="/rtl-version" element={<h1>RTl Version</h1>}/>
          <Route path="/about"  element={<About/>}/>
          <Route path="/about2" element={<AboutStyle/>}/>
          <Route path="/classes" element={<Classes/>}/>
          <Route path="/classes-details" element={<ClassDetails/>}/>
          <Route path="/teachers" element={<TeachersPage/>}/>
          <Route path="/teachers-details" element={<h1>Teachers Details Page</h1>}/>
          <Route path="/gallery" element={<GalleryPage/>}/>
          <Route path="/gallery-two" element={<h1>Gallery Two Page</h1>}/>
          <Route path="/event" element={<h1>Event Page</h1>}/>
          <Route path="/event-details" element={<h1>Event details Page</h1>}/>
          <Route path="/blog" element={<h1>Blog Page</h1>}/>
          <Route path="/blog-single" element={<h1>Blog single</h1>}/>
          <Route path="/shop" element={<h1>Shop Page</h1>}/>
          <Route path="/product-page" element={<h1>Product Page</h1>}/>
          <Route path="/product-details" element={<h1>Product Details Page</h1>}/>
          <Route path="/shop-cart" element={<h1>Shop Cart Page</h1>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/*" element={<h1>404 Page not found</h1>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
