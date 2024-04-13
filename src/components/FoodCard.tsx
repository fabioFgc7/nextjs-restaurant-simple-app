"use client";
import Link from "next/link";
import React, { useState } from "react";
import FormSearch from "./FormSearch";
import Image from "next/image";
import { Restaurant } from "@/api";
interface Props {
  restaurant: Restaurant[];
}
const FoodCard = ({ restaurant }: Props) => {
  const [searchValues, setSearchValues] = useState("");

  const handleChange = (e: any) => {
    setSearchValues(e.target.value);
  };
  const newFood = restaurant.filter((item) =>
    item.name.toLowerCase().includes(searchValues.toLowerCase())
  );
  return (
    <div>
      <FormSearch
        onChange={handleChange}
        searchValue={searchValues}
      />
      {newFood.length > 0 ? (
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full gap-10 px-24 p-10'>
          {newFood.map((item) => (
            <Link
              href={`/${item.id}`}
              key={item.id}
              className='rounded-md p-3 group bg-slate-950 text-slate-200 flex flex-col gap-2 '>
              <Image
                src={item.image}
                alt={item.name}
                width={500}
                height={500}
                className='rounded-lg group-hover:scale-105 transition-all duration-200 ease-linear'
              />
              <div className='flex flex-col gap-3 '>
                <h2 className='flex justify-between items-center'>
                  {item.name}
                  <small className='flex gap-2 items-center'>
                    <span className=''>⭐</span>
                    <span className=''>{item.score}</span>
                  </small>
                </h2>
                <p>{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className='mx-auto font-bold mt-20'>
          There&#39;s not food with the name &quot;{searchValues} &quot;
        </div>
      )}
    </div>
  );
};

export default FoodCard;
