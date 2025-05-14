import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LanguageSelector from './components/LanguageSelector'
import ProfileSetup from './components/ProfileSetup'
import Dashboard from './components/Dashboard'

export default function App() {
  return (
    <BrowserRouter>
      <LanguageSelector />
      <Routes>
        <Route path="/" element={<ProfileSetup />} />
        <Route path="/dash" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
