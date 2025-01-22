import { useState } from 'react'
import NavbarComponent from './components/NavbarComponent'
import TextForm from './components/TextForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavbarComponent title="SHIVAM" home="About"/>
     <TextForm heading="Enter the text to analyze"/>
    </>
  )
}

export default App
