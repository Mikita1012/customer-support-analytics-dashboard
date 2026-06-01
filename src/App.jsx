import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  const [ticketCount, setTicketCount] = useState(25);

  return (
    <>
      <h1>Customer Support Analytics Dashboard</h1>
      <p>Total Tickets : {ticketCount}</p>
      <button onClick={() => setTicketCount((ticketCount) => ticketCount + 1)}>
        New Ticket
      </button>
    </>
  )
}

export default App
