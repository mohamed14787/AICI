import logo from "./logo.svg";
import "./App.css";
import useFetch from "./data";
import { useState, useEffect } from "react";

function App() {
  const [id, setId] = useState(1);
  const { data, loading, error } = useFetch(id);

  useEffect(() => {
    console.log(data);
  }, []);
  const handleIncrease = () => {
    setId(Math.min(id + 1, 10));
  };

  const handleDecrease = () => {
    setId(Math.max(1, id - 1));
  };

  return (
    <div className="App">
      <div>
        {loading && (
          <div className="placeholder-container">
            <h1>User Data for ID 0</h1>
            <p className="placeholder">Name: User Name</p>
            <p className="placeholder">Email: User Email</p>

            <p className="placeholder">Phone: +4900000000</p>
            <p className="placeholder">Website: example.com</p>
          </div>
        )}
        {data && (
          <div>
            <h1>User Data for ID {id}</h1>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
            <p>Website: {data.website}</p>
          </div>
        )}
      </div>

      <button onClick={handleDecrease} disabled={id === 1}>
        Decrease
      </button>
      <button onClick={handleIncrease} disabled={id === 10}>
        Increase
      </button>
    </div>
  );
}

export default App;
