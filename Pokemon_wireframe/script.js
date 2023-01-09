const bodysection = document.querySelector('#mainsection');

//Heading//

let header = document.createElement("header"),
h2 = document.createElement("h2");
h2.textContent = "POKEMON APPLICATION";
header.appendChild(h2);
bodysection.appendChild(header);
header.setAttribute('style','text-align:center');


//textbx for search//
let Divsearch = document.createElement("div");
Divsearch.classList.add('divsearch');


let txtsearch = document.createElement("INPUT")
txtsearch.setAttribute("type", "text");
txtsearch.className='txtsearchclass';
txtsearch.placeholder='search..';

const icon = document.createElement("i");
icon.setAttribute("class","fas fa-search");
//sourceText
//icon.onclick = function() {
    //alert(txtsearch.value);};

Divsearch.appendChild(txtsearch);
Divsearch.appendChild(icon);
bodysection.appendChild(Divsearch);

//Div for image display//

const pokemonsSection=document.createElement("div");
pokemonsSection.classList.add('pokemonsSection');
bodysection.appendChild(pokemonsSection);

const displayPokemons = (data) => {
    pokemonsSection.innerHTML = '';

    return data.forEach(pokemon => {

        // create pokemon card
        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemoncard');
        pokemonsSection.appendChild(pokemonCard);

        // create pokemon image
        let image ={ images: `Images/${pokemon.name.english}.jpg`}
        Object.assign(pokemon, image);

        const pokemonImg = document.createElement('img');
        pokemonImg.classList.add('pokemonImg')
        pokemonImg.src = pokemon.images;
        pokemonCard.appendChild(pokemonImg);


        // create pokemon name
        const pokemonName = document.createElement('h3');
        pokemonName.textContent = pokemon.name.english.toUpperCase();
        pokemonCard.appendChild(pokemonName);
    });
}
displayPokemons(pokemonData);


//Search function//


document.querySelector('.txtsearchclass').addEventListener('input', () => searchPokemon(txtsearch.value.toUpperCase()));

 const searchPokemon =(value)=>  {
 const filtervalue = pokemonData.filter((pk) => pk.name.english.toUpperCase().includes(value));
 return displayPokemons(filtervalue);
 
 };

 //Display selected image//

 pokemonsSection.addEventListener('mouseover', () => {
    let items = Array.from(pokemonsSection.children);
    return items.forEach((item) =>
    item.addEventListener('click', () => displaySelectedPokemon(item))
   );
});

let imagedetailheader=document.createElement("div");
imagedetailheader.classList.add('imagedetailheader');
bodysection.appendChild(imagedetailheader);

const displaySelectedPokemon = (item) => {
    imagedetailheader.innerHTML = '';//
  
    let itemName = item.children[1].textContent;
    let finded = pokemonData.find((pk) => pk.name.english.toUpperCase() === itemName);
     console.log(finded);

    // selected pokemon image

  let pImg = document.createElement('img');
  pImg.classList.add('selected-img');
  pImg.src = finded.images;
  imagedetailheader.appendChild(pImg);

  // selected pokemon name and info
  let infoSection = document.createElement('div');
  imagedetailheader.appendChild(infoSection);

  let pName = document.createElement('h2');
  pName.textContent = finded.name.english;
  infoSection.appendChild(pName);

  // type
  let pType = document.createElement('div');
  pType.classList.add('pType');
  pType.textContent = finded.type.join(' , ');
  infoSection.appendChild(pType);

  //Attack
  let pAttack= document.createElement('h4');
  pAttack.textContent=finded.Attack;
  infoSection.appendChild(pAttack);

  //console.log(finded);//
  return window.scrollTo({ top: 0, behavior: 'smooth' });
};