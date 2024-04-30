import express, { Request, Response } from "express";
import axios from "axios";
import cors from "cors";
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

app.get("/photos", async (req: Request, res: Response) => {
  const { keyword } = req.query;
  let params;
  keyword
    ? (params = { format: "json", nojsoncallback: 1, tags: keyword })
    : (params = { format: "json", nojsoncallback: 1 });
  try {
    const response = await axios.get(
      "https://www.flickr.com/services/feeds/photos_public.gne",
      { params }
    );
    const images: FlickrUseData[] = response.data.items.map(
      (item: FlickrPhotoData) => ({
        title: item.title,
        link: item.link,
        media: item.media && item.media.m ? item.media.m : "",
      })
    );
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: "Error processing data from flickr" });
  }
});

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});

interface FlickrUseData {
  title: string;
  link: string;
  media: string;
}
interface FlickrPhotoData {
  title: string;
  link: string;
  media: { m: string };
  date_taken: string;
  description: string;
  published: string;
  author: string;
  author_id: string;
  tags: string;
}
