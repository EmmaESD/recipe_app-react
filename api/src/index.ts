import { error } from "console";
import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const port = 8000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const travelList = [
  {
    id: 9,
    name: "Bangkok",
    city: "Bangkok",
    country: "Thailand",
    image:
      "https://www.planetware.com/photos-large/THA/thailand-bangkok-grand-palace.jpg",
    description:
      "Bangkok is a bustling city known for its ornate temples, street food, and vibrant night markets.",
  },
  {
    id: 10,
    name: "Dubai",
    city: "Dubai",
    country: "United Arab Emirates",
    image:
      "https://www.planetware.com/photos-large/UAED/dubai-burj-khalifa.jpg",
    description:
      "Dubai is famous for its modern architecture, including the Burj Khalifa, luxury shopping, and desert safaris.",
  },
];

app.get("/", (req: Request, res: Response) => {
  res.send("Travel application !");
});

// get all travel
app.get("/travels", (req: Request, res: Response) => {
  res.send(travelList);
});

// get one travel
app.get("/travels/:id", (req: Request, res: Response) => {
  // get param id
  const id = req.params.id;
  //find travel into array with param id
  const travel = travelList.find((t) => t.id === Number(id));
  //send travel

  if (!travel) {
    res.status(404).send({
      message: "Travel not found",
    });
  }
  res.send(travel);
});

// create travel
app.post("/travels", (req: Request, res: Response) => {
  //get data body
  const body = req.body;
  //create id
  const newId = travelList.length + 1;
  //add id into new travel
  body.id = newId;
  //Add data body into array
  travelList.push(body);

  res.send(travelList);
});

// update travel
app.put("/travels/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const updateTravelData = req.body;
  console.log(updateTravelData);

  const index = travelList.findIndex((t) => t.id === Number(id));
  travelList[index] = {
    ...travelList[index],
    ...updateTravelData,
  };

  res.send(travelList[index]);
});

//delete travel
app.delete("/travels/:id", (req: Request, res: Response) => {
  const index = travelList.findIndex((t) => t.id === Number(id));
  const id = req.params.id;
  if (index === -1) {
    res.status(404).send({ message: "error" });
  }

  travelList.splice(index, 1);

  res.status(204).send({ message: "success to delete" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
