
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
   