"use client";
import ImageCard from "@/components/imageCard";
import { ImageCardProps } from "../types";

import Nav from "@/components/nav";
import LoadingSpinner from "@/components/loadingSpinner";

import axios from "axios";
import { useState, useEffect } from "react";

export default function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [imagesArray, setImagesArray] = useState<ImageCardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const params = new URLSearchParams();
  if (typeof searchParams.keyword === "string") {
    params.append("keyword", searchParams.keyword);
  }

  const fetchImages = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(`${BASE_URL}`, {
        params: searchParams,
      });

      setImagesArray(response.data);
      setLoading(false);
      response.data.length === 0
        ? setError(`No images found for the keyword ${searchParams.keyword}`)
        : setError("");
    } catch (error) {
      setLoading(false);
      setError("Failed to fetch images from Flicker. Please try again");
    }
  };

  useEffect(() => {
    fetchImages();
  }, [searchParams]);

  return (
    <>
      <Nav />
      {loading && <LoadingSpinner />}
      {error && (
        <h1 className="text-red-600 text-xl text-center mt-10">{error}</h1>
      )}
      {imagesArray.length === 0 && !loading && !error && (
        <h1 className="text-center mt-4">No images found</h1>
      )}
      <div className=" w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {imagesArray.map((image, index) => (
          <ImageCard
            key={index}
            title={image.title.length > 15 ? `${image.title.substring(0, 15)}...` : image.title}
            media={image.media}
            link={image.link}
          />
        ))}
      </div>
    </>
  );
}
