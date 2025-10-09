import {  } from "@/components";
import {fetchCars} from "@/utils";
import Image from "next/image";
import {CarCard,Hero,CustomFilter, SearchBar} from "@/components";

export default async function Home() {
 
  const allCars = await fetchCars()
  console.log(allCars)
  const isdataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>


        <div className="home__filters">
          <SearchBar/>
        </div>

        <div className="home__filter-container">
          <CustomFilter/>
        </div>

        {!isdataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car)=>(
                <CarCard key={`${car.make}-${car.model}-${car.year}`} car={car}/>
              ))}
            </div>
          </section>
        ):(
          <div className="home__error-container">
            <h1 className="text-black text-xl font-bold">Oops, no results</h1>
            <p>{allCars?.message}</p>
          </div>
        )}
        
      </div>
    </main>
  );
}
