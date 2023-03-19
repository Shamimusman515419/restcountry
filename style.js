const restcountry=()=>{

  const URL="https://restcountries.com/v3.1/all";
 fetch(URL).then(res=>res.json()).then(country=>desplyCountry(country));

}

const desplyCountry=(country)=>{
     
const contaienr=document.getElementById("contaienr");

 const restCuntinnerHTML=country.map(county=>retuncountryDesplyu(county));
   
 contaienr.innerHTML=restCuntinnerHTML.join(" ");
console.log(country)


}




const retuncountryDesplyu=(country)=>{
    
  
return `
  <div class="border-solid border-2 border-indigo-600 p-3  ">
   <h1 class="text-xl my-5 font-extrabold">${country.name.common}</h2>
   <img src="${country.flags.png}"> 
   <h1 class="text-xl  font-semibold mt-7">${country.capital}<h1>
<a target="blank"  href="${country?.maps?.openStreetMaps}" class=" text-3xl font-medium mt-2"> Open StreetMaps </a>

    <p class="text-xl font-medium my-5">  <span class="text-xl font-bold mx-2">continents:</span> ${country.continents} </p>

   </div>
 `
 
}

restcountry()
