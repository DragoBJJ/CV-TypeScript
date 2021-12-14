import { NextApiResponse, NextApiRequest } from "next";
import { services } from "../../data";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ services });
};
