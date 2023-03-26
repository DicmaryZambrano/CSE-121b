async function getPokemon(link)
{
  const response = await fetch(link)
  if (response.ok){
    const data = await response.json()
    pokemon = data;
    console.log(data);
  }
}

getPokemon("https://pokeapi.co/api/v2/pokemon/ditto");