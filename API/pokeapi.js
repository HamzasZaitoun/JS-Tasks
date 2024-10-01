'use strict'
let apiURL="https://pokeapi.co/api/v2/pokemon/ditto";//url


fetch(apiURL).then(response=>
    {
        return response.json();
    }
).then(data=>
{
    let name=data.abilities[0].ability.name //pockemon name

    console.log(data.sprites.back_default);
    
 
   
});