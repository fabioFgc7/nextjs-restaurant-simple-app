import Image from "next/image";
import React from "react";
import api from "@/api";
import Link from "next/link";
import { LeftArrowIcon } from "@/icons/Icon";
const PagesDetails = async ({ params: { id } }: { params: { id: string } }) => {
  const res = await api.fetch(id);
  return (
    <div className='  flex justify-center flex-col items-center w-full p-20 h-full relative'>
      <h1 className='text-2xl font-bold mb-2'>{res.name}</h1>
      <Link
        href={`/`}
        className='absolute top-5 left-5 p-2 '>
        <LeftArrowIcon />
      </Link>
      <div
        key={res.id}
        className='rounded-md max-w-lg group hover:scale-105 hover:duration-200 hover:ease-linear hover:shadow-2xl p-10 bg-slate-950 text-slate-200 flex flex-col items-center gap-2'>
        <Image
          src={res.image}
          alt={res.name}
          width={500}
          height={500}
          className='rounded-lg group-hover:scale-105 transition-all duration-200 ease-linear'
        />
        <div className='flex flex-col gap-3 '>
          <h2 className='flex justify-between items-center'>
            {res.name}
            <small className='flex gap-2 items-center'>
              <span className=''>⭐</span>
              <span className=''>{res.score}</span>
            </small>
          </h2>
          <p>{res.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PagesDetails;
