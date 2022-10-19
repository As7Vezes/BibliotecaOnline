import { useEffect, useState } from 'react'
import { api } from './api/api'
import { FormBook } from './components/form/FormBook'
import { ListBooks } from './components/ListBooks/ListBooks'
import axios from 'axios'
import { Nav } from './components/nav/Nav'

import './main.css'

function App() {

  return (
    <div>
      <Nav/>
      <FormBook/>
      <ListBooks/>
    </div>
  )
}

export default App
