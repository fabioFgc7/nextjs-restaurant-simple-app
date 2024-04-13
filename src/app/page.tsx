import api from "@/api";
import { montserrat, lato } from "@/fonts/fonts";
import FoodCard from "@/components/FoodCard";
export default async function Home() {
  const res = await api.list();
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-5 ${montserrat.className}`}>
      <h1 className={` text-3xl  text-center mb-5 ${lato.className}`}>
        RESTAURANT
      </h1>
      <FoodCard restaurant={res} />
    </main>
  );
}
