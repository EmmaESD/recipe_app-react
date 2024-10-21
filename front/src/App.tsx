import { useEffect, useState } from "react";
import { travelType } from "./types/travel.type";

function App() {
  const [travelList, setTravelList] = useState<travelType[]>([]);

  useEffect(() => {
    fetchTravels();
  }, []);

  const fetchTravels = async () => {
    const response = await fetch("http://localhost:5173/travels.json");
    const data = await response.json();
    setTravelList(data);
  };

  return (
    <>
      <h1 className="text-violet-500">Hello world</h1>

      {/* List of travel */}
    </>
  );
}

export default App;
