"use client";

import useFetch from "@/hooks/useFetch";
import Image from "next/image";
import Container from "./Container";
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "@/utils/fetchApi";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "@/store/slices/homeSlice";
import Loader from "./Loader";

const Card = () => {
  const { data, loading } = useFetch("/movie/popular");
  const url = useSelector((state) => state.home.url); // selecting URL from Redux store
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchApiConfig = () => {
      // fetching API configuration
      fetchDataFromApi("/configuration").then((res) => {
        const url = {
          movieImg: res.images.secure_base_url + "original",
        };
        dispatch(getApiConfiguration(url)); // dispatching action to update URL in Redux store
      });
    };
    fetchApiConfig(); // fetching API configuration when component mounts
  }, [dispatch]);

  if (loading) {
    return <Loader loading={loading} />;
  }

  return (
    <div className="bg-transparent">
      <Container>
        <div className="text-text-primary my-20 mx-auto flex flex-wrap justify-center gap-4 ">
          {/* Cards */}
          {data?.results?.map((movie) => (
            // Card
            <Link key={movie.id} href={`/${movie.id}`}>
              <div className="flex flex-col gap-4 bg-red w-[300px] h-[520px] bg-gray-800 rounded-md cursor-pointer hover:scale-105 transition-all duration-300">
                {/* Image */}
                <Image
                  src={`${url?.movieImg}${movie?.poster_path}`}
                  alt={movie.title}
                  width={150}
                  height={150}
                  className="w-full h-[380px] rounded-t-md"
                />
                {/* Info */}
                <div className="flex flex-col gap-2 p-3">
                  <p className="truncate pr-4">{movie?.title}</p>
                  <p>{dayjs(movie?.release_date).format("MMMM D, YYYY")}</p>
                  <p className="truncate pr-4">{movie?.overview}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Card;
