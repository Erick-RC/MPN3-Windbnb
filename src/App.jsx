import { useEffect, useState } from "react";
import { Card } from "./components/Card";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const rs = await fetch('./stays.json');
      const rsJson = await rs.json();
      console.log(rsJson)
      setData(rsJson);
    };

    getData();
  }, []);

  return (
    <>
      <div className='container'>
        {data.map((e, index) => (
          <Card
            key={index}
            city={e.city}
            country={e.country}
            superHost={e.superHost}
            title={e.title}
            rating={e.rating}
            maxGuests={e.maxGuests}
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
