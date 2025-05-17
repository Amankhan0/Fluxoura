import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../WebView/Home/Home'
import About from '../WebView/About/About'
import Work from '../WebView/Work/Work'
import Contact from '../WebView/Contact/Contact'

export default function CustomRoutes() {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/work/:name" exact element={<Work />} />
            <Route path="/contact" exact element={<Contact />} />
        </Routes>
    )
}
