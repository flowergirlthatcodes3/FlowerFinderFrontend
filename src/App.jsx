import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [flowers, setFlowers] = useState([]);
  useEffect(() => {
    const fetchFlowers = async () => {
      const { data } = await axios.get("http://localhost:3000/api/flowers");
      setFlowers(data);
      console.log(data);
    };
    fetchFlowers();
  }, []);
  return (
    <div className="flower">
      <h1> My Flowers - {flowers.length} </h1>
      {
        <ul>
          {flowers.map((flower) => {
            return (
              <li
                key={flower.id}
                className={flower.is_favorite ? "favorite" : null}
              >
            
                {flower.name}
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
}

export default App;
