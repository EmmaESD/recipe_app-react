import { useState } from "react";
import FormAddTravel from "../components/FormAddTravel";
import { TravelType } from "../types/travel.type";
import TravelList from "../components/TravelList";
import { findAll } from "../services/travel.service";

const TravelListPage = () => {
  const [travelList, setTravelList] = useState<TravelType[]>([]);

  const fetchTravels = async () => {
    try {
      const travels = await findAll();
      setTravelList(travels);
    } catch (error) {
      console.log("error to fetch travel", error);
    }
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
