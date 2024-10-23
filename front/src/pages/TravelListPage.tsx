import { useState } from "react";
import FormAddTravel from "../components/FormAddTravel";
import { TravelType } from "../types/travel.type";
import TravelList from "../components/TravelList";

const TravelListPage = () => {
  const [travelList, setTravelList] = useState<TravelType[]>([]);

  const fetchTravels = async () => {
    const response = await fetch("http://localhost:8000/travels");
    const data = await response.json();
    setTravelList(data);
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-violet-700 mb-10">Share your travel</h1>
      <FormAddTravel fetchTravels={fetchTravels} />
      <TravelList travelList={travelList} fetchTravels={fetchTravels} />
    </div>
  );
};

export default TravelListPage;
