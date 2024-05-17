import { useEffect, useState } from "react";
import { Card } from "./components/Card";
// import { Nav } from "./components/Nav";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const rs = await fetch('../src/assets/stays.json');
      const rsJson = await rs.json();
      console.log(rsJson)
      setData(rsJson);
    };

    getData();
  }, []);

  return (
    <>
      <div className='container'>
        {data.map((e) => (
          // <Nav
          //   key={e.id}
          //   city={e.city}
          //   maxGuests={e.maxGuests}
          //           />
          <Card
            // key={e.id}
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
  )
}

export default App
