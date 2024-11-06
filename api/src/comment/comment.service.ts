import { Request, Response } from "express";

const getAll = async (req: Request, res: Response) => {
  res.send("get all comments");
};

const getOne = async (req: Request, res: Response) => {
  res.send("get one comments");
};

const create = async (req: Request, res: Response) => {
  res.send("create comments");
};

export default {
  getAll,
  getOne,
  create,
};
