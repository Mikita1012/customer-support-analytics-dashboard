import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MetricCard from './components/MetricCard'

function App() {
  
  const [ticketCount, setTicketCount] = useState(25);

  return (
    <>
      <h1>Customer Support Analytics Dashboard</h1>
      <div className='dashboard-cards'>
        <MetricCard
        title="Total Tickets"
        value={125}
      />
      <MetricCard
        title="Open Tickets"
        value={50}
      />
      <MetricCard
        title="Resolved"
        value={75}
      />
      <MetricCard
        title="Customers"
        value={300}
      />
      </div>
      


      
    </>
  )
}

export default App
