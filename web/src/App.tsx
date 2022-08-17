import { useState } from 'react'
import { FormBook } from './components/form/FormBook'
import { Nav } from './components/nav/Nav'

import './main.css'

function App() {

  return (
    <div>
      <Nav/>
      <FormBook/>
    </div>
  )
}

export default App
