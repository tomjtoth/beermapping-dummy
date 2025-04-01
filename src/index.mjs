import express from "express";
import xml from "xml";

const app = express();
const PORT = process.env.PORT || 55581;

app.get("/webservice/loccity/:apiKey/:city", (req, res) => {
  const city = req.params.city;

  const parsable = {
    bmp_locations: city.split("").map((_, i) => ({
      location: [
        { id: i + 1 },
        { name: `Dummy pub ${i + 1}` },
        { city },
        { phone: i + 11 },
      ],
    })),
  };

  const asXml = xml(parsable);

  res.set("Content-Type", "text/xml");
  res.send(asXml);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
