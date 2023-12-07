"use client";

import useFetch from "@/hooks/useFetch";
import dayjs from "dayjs";
import Image from "next/image";
import { useSelector } from "react-redux";
import EventDetails from "./EventDetails";
import Loader from "./Loader";

const CardInfo = ({ id }) => {
  const { data, loading } = useFetch(`/movie/${id}`);
  const url = useSelector((state) => state.home.url);
  const moviePosterPath = data?.poster_path;
  const baseUrl = url?.movieImg;

  const imgUrl =
    baseUrl && moviePosterPath
      ? `${baseUrl}${moviePosterPath}`
      : "/assets/fallback.png";

  if (loading) {
    return <Loader loading={loading} />;
  }

  return (
    <div className="mx-6 px-10 py-10 flex flex-col lg:flex-row gap-4 text-text-primary">
      <div className="bg-bg-secondary flex gap-4 p-3 h-[720px] lg:w-2/3 rounded-md">
        {/* Image */}
        <Image
          src={imgUrl}
          alt={data?.title}
          width={400}
          height={100}
          className="lg:w-[460px] h-auto rounded-t-md"
        />
        {/* Info */}
        <div className="flex flex-col gap-2 ">
          <p className="text-3xl">{data?.title}</p>
          <p className="text-xl">
            {dayjs(data?.release_date).format("MMMM D, YYYY")}
          </p>
          <p className="text-text-secondary text-sm">{data?.overview}</p>

          {/* Render the "info" */}
          <div className="info">
            {data?.status && (
              <div className="info__item">
                <span className="text bold">Status: </span>
                <span className="text">{data?.status}</span>
              </div>
            )}
          </div>

          {/* If the data has a "release_date" property, render a div with classname "info__item" */}
          {data?.release_date && (
            <div className="info__item">
              <span className="text bold">Release Date: </span>
              <span className="text">
                {dayjs(data.release_date).format("MMM DD, YYYY")}
              </span>
            </div>
          )}

          {/* If the data has a "runtime" property, render a div with classname "info__item" */}

          {data?.runtime && (
            <div className="info__item">
              <span className="text bold">Runtime: </span>
              <span className="text">{`${Math.floor(
                data.runtime / 60
              )} hr  ${Math.floor(data.runtime % 60)} min`}</span>
            </div>
          )}
        </div>
      </div>
      <div className="py-3 px-8 bg-bg-secondary rounded-md lg:w-1/3">
        <EventDetails data={data} />
      </div>
    </div>
  );
};

export default CardInfo;
