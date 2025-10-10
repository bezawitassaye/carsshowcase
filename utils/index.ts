import { CarProps } from "@/types";

export async function fetchCars() {
  const headers = {
    	'x-rapidapi-key': 'cc8f2ab261msh1eb5b4e18a9f0eap16ecb2jsn55494e8c289d',
		'x-rapidapi-host': 'car-data.p.rapidapi.com'
  };

  const response = await fetch('https://car-data.p.rapidapi.com/cars?limit=10&page=0', {
    headers: headers,
  });
   
  const result = await response.json();

  return result;
}
// const url = 'https://vehicle-images2.p.rapidapi.com/vehicle_images_by_ymm?make=bmw&model=x3&year=2023&image_size=300';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'cc8f2ab261msh1eb5b4e18a9f0eap16ecb2jsn55494e8c289d',
// 		'x-rapidapi-host': 'vehicle-images2.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
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
  const { make, model, year } = car;

  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
} 