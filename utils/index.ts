import { CarProps } from "@/types";

export async function fetchCars() {
  const headers = {
    'x-rapidapi-key': 'cc8f2ab261msh1eb5b4e18a9f0eap16ecb2jsn55494e8c289d',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
  };

  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers,
  });
   
  const result = await response.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};


export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  // ✅ If car data is missing, use default (Toyota Camry 2022)
  const make = car.make || "toyota";
  const model = car.model || "camry";
  const year = car.year || 2022;

  // ✅ Use the demo key “hrjavascript-mastery” (no need for your own company)
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle || 0}`);

  return url.toString();
};