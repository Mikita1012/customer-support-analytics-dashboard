import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import MetricCard from "./components/MetricCard";

function App() {
  const [ticketCount, setTicketCount] = useState(25);

  const metrics = [
    {
      title: "Total Tickets",
      value: 125,
    },
    {
      title: "Open Tickets",
      value: 100,
    },
    {
      title: "Resolved",
      value: 50,
    },

    {
      title: "Pending",
      value: 10
    },

    {
      title: "Customers",
      value: 300,
    },
  ];
  return (
    <div className="dashboard">
      <h1>Customer Support Analytics Dashboard</h1>
      {/* <div className='dashboard-cards'>
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
      </div> */}

      <div className="dashboard-cards">
        {metrics.map((metric, index) => (
          <MetricCard key={index} title={metric.title} value={metric.value} />   //For every metric inside metrics array create one MetricCard
        ))}
      </div>
    </div>
  );
}

export default App;
