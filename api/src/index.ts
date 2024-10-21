import express, { Request, Response } from "express";
const app = express();
const port = 8000;

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
  res.send(travelList);
});

// create travel
app.post("/travels", (req: Request, res: Response) => {
  res.send(travelList);
});

// update travel
app.put("/travels/:id", (req: Request, res: Response) => {
  res.send("update");
});

//delete travel
app.delete("/travels/:id", (req: Request, res: Response) => {
  res.send("delete");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
