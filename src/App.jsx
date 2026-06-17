import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import MetricCard from "./components/MetricCard";
import { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Tickets from "./pages/Tickets";
import Customers from "./pages/Customers";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";

function App() {
  const [ticketCount, setTicketCount] = useState(125);
  const [showDashboard, setShowDashboard] = useState(true);
  const [ticketTitle, setTicketTitle] = useState("");
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(`Ticket Count Updated ${ticketCount}`);
  }, [ticketCount]);

  // useEffect(() => {
  //   console.log("Runs every render");
  // });

  useEffect(() => {
    console.log("Runs once");
  }, []);

  useEffect(() => {
    console.log("Ticket Count Changed");
  }, [ticketCount]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUsers(data);
  //       // setIsLoading(false);
  //     });
  // }, []);

  // using ASYNC - AWAIT with ERROR HANDLING
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError("Not able to fetch data");
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  });

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
    <>
      {/* <div className="dashboard">
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
                    metric.title === "Total Tickets"
                      ? ticketCount
                      : metric.value
                  } 
                />
              </>
            ))}
          </div>
        ) : (
          <p>Dashboard Hidden</p>
        )}
        <button onClick={() => setTicketCount((prev) => prev + 1)}>
          Add Ticket
        </button>
      </div>

      <h2>Users</h2>

      <ul>
        {isLoading ? (
          <h1>Loading Users...</h1>
        ) : (
          users.map((user) => <li key={user.id}>{user.name}</li>)
        )}
      </ul> */}

      <nav>
        <Link to="/">Dashboard</Link> {" | "}
        <Link to="/tickets">Tickets</Link> {" | "}
        <Link to="/customers">Customers</Link> {" | "}
        <Link to="/settings">Settings</Link> {" | "}
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
