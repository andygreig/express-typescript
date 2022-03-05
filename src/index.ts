import express, { Request, Response } from "express";

const app = express();
const port = 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("I'm compiled using Express and Typescript");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
