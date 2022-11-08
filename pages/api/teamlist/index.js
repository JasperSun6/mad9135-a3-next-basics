import { teamList } from "../../../datasource/data";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(teamList);
  }
}
