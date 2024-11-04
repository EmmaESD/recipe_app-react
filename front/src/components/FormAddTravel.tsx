import { useState } from "react";
import { TravelType } from "../types/travel.type";
import TravelList from "./TravelList";
import { create } from "../services/travel.service";

type formAddTravelProps = {
  fetchTravels: () => void;
};

const FormAddTravel = ({ fetchTravels }: formAddTravelProps) => {
  const [addTravel, setAddTravel] = useState<TravelType>({
    id: 0,
    name: "",
    city: "",
    country: "",
    description: "",
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAddTravel({
      ...addTravel,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await create(addTravel);
      console.log("travel created");
      fetchTravels();
    } catch (error) {
      console.log(error);
    }
    console.log(TravelList);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="city"
          name="city"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="country"
          name="country"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="description"
          name="description"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="URL of image"
          name="image"
          onChange={handleChange}
        />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default FormAddTravel;
