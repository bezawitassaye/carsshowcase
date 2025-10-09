import { asyncWrapProviders } from "async_hooks";

const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'cc8f2ab261msh1eb5b4e18a9f0eap16ecb2jsn55494e8c289d',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}


export async function fetchCars() {
  const response = await fetch( 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla')
  
  const headers={
      'x-rapidapi-key': 'cc8f2ab261msh1eb5b4e18a9f0eap16ecb2jsn55494e8c289d',
      'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
  };