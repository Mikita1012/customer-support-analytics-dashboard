import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import MetricCard from "./components/MetricCard";

function App() {
  const [ticketCount, setTicketCount] = useState(125);
  const [showDashboard, setShowDashboard] = useState(true);
  const [ticketTitle, setTicketTitle] = useState("");
  const [tickets, setTickets] = useState([]);

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
      value: 10,
    },

    {
      title: "Customers",
      value: 300,
    },
  ];

  const handleAddTicket = () => {
    if (ticketTitle.trim() === "") {
      return;
    }

    setTickets([...tickets, ticketTitle]);
    setTicketTitle("");
    setTicketCount((prev) => prev + 1);
  };
  return (
    <div className="dashboard">
      <button onClick={() => setShowDashboard(!showDashboard)}>
        Toggle Dashboard
      </button>
      <h1>Customer Support Analytics Dashboard</h1>

      <h4>Create Ticket</h4>
      <input
        type="text"
        value={ticketTitle}
        onChange={(e) => setTicketTitle(e.target.value)}
      />
      <button onClick={handleAddTicket}>Add Ticket Title</button>

      {/* <ul>
        {
          tickets.map((title, index) => (
            <li key={index}>{title}</li>
          ))
        }
      </ul> */}
      {/* OR BELOW */}
      <ul>
        {tickets.map((title, index) => {
          return <li key={index}>{title}</li>;
        })}
      </ul>

      {showDashboard ? (
        <div className="dashboard-cards">
          {metrics.map((metric, index) => (
            <>
              <MetricCard
                key={index}
                title={metric.title}
                value={
                  metric.title === "Total Tickets" ? ticketCount : metric.value
                } //For every metric inside metrics array create one MetricCard
              />
              <button onClick={() => setTicketCount((prev) => prev + 1)}>
                Add Ticket
              </button>
            </>
          ))}
        </div>
      ) : (
        <p>Dashboard Hidden</p>
      )}
    </div>
  );
}

export default App;
