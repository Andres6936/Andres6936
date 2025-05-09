import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";

import './index.css'
import Home from './pages/Home.tsx'
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";
import Contact from "./pages/Contact.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
