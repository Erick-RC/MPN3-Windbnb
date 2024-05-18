import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { Nav } from "./components/Nav";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const rs = await fetch('stays.json');
      const rsJson = await rs.json();
      console.log(rsJson)
      setData(rsJson);
    };

    getData();
  }, []);

  return (
    <>
      <Nav />
      <div className='container'>
        {data.map((e, index) => (
      <Card
            key={index}
            superHost={e.superHost}
            title={e.title}
            rating={e.rating}
            type={e.type}
            beds={e.beds}
            photo={e.photo}
          />
        ))}
      </div>
    </>
  );
}

export default App
