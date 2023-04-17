// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
export default async function handler(req, res) {
  if (req.method === "GET") {
    const data = await axios
      .get("https://restlab.apihostpress.com.br/api/layout?populate=*", {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer afd0e66b95037b5af36a6594c5de7181cf093e83c4e9f5d807a64eedd618231756c708d3cda13fbfb126d98be8646c98cde469aaa31b741c517c4b201181e559a578d8066430737d0727c1711a801b284786bf29b91c8d00073db886f2d25c78e611f5523604439dae591ab2abb9e357792500e23d6ec9977a53311a4b96cc59",
        },
      })
      .then((response) => {
        return res.status(200).json(response.data.data);
      })
      .catch((error) => {
        return res.status(404).json({ error: error.message });
      });
  } else if (req.method === "PUT") {
    const options = {
      method: "PUT",
      url: `https://restlab.apihostpress.com.br/api/layout`,
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgxMzk3NzAzLCJleHAiOjE2ODIwMDI1MDN9.MEzsak9AAa3xo8yBSxk9jOb3td-rgsReaR8XwEUGi1Q",
      },
      params: {
        populate: "deep",
      },
    };

    const data = await axios
      .request(options)
      .then((ressponse) => {
        return ressponse.data.data;
      })
      .catch((error) => {
        return res.status(404).json({ error: error });
      });
    if (data) {
      res.status(200).json({ data });
    }
  } else if (req.method === "DELETE") {
    const options = {
      method: "DELETE",
      url: `https://restlab.apihostpress.com.br/api/layout/`,
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer afd0e66b95037b5af36a6594c5de7181cf093e83c4e9f5d807a64eedd618231756c708d3cda13fbfb126d98be8646c98cde469aaa31b741c517c4b201181e559a578d8066430737d0727c1711a801b284786bf29b91c8d00073db886f2d25c78e611f5523604439dae591ab2abb9e357792500e23d6ec9977a53311a4b96cc59",
      },
    };

    const data = await axios
      .request(options)
      .then((ressponse) => {
        return ressponse.data.data;
      })
      .catch((error) => {
        return res.status(404).json({ error: "Not Found!" });
      });
    if (data) {
      res.status(200).json({ data });
    }
  }
  res.status(404).json({ error: "Not Found!" });
}
