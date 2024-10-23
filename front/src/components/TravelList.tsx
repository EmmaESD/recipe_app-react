import { useEffect, useState } from "react";
import CardTravel from "./CardTravel";
import { TravelType } from "../types/travel.type";

type TravelListProps = {
  fetchTravels: () => void;
  travelList: TravelType[];
};

const TravelList = ({ fetchTravels, travelList }: TravelListProps) => {
  useEffect(() => {
    fetchTravels();
  }, []);

  return (
    <div className="grid grid-col-3 gap-4 ">
      {travelList.map((travel) => (
        <CardTravel travel={travel} key={travel.id} />
      ))}
    </div>
  );
};

export default TravelList;
