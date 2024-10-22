import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TravelType } from "../types/travel.type";

const TravelSinglePage = () => {
  const { id } = useParams();
  const [travel, setTravel] = useState<TravelType>({});

  useEffect(() => {
    fetchTravels();
  }, []);

  const fetchTravels = async () => {
    const response = await fetch(`http://localhost:8000/travels/${id}`);
    const data = await response.json();
    setTravel(data);
  };

  const deleteTravel = async () => {
    const response = await fetch(`http://localhost:8000/travels/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      const data = await response.json();
      setTravel(data);
      window.location.reload(); // Rafraîchit la page après la suppression
    } else {
      console.error("Erreur lors de la suppression");
    }
  };

  return (
    <div>
      <img src={travel?.image} alt="" />
      <h1>{travel?.name}</h1>
      <button onClick={deleteTravel}>Delete</button>
    </div>
  );
};

export default TravelSinglePage;
