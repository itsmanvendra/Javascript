'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const displayCountry = function(country, className = ''){
    console.log(country);
    const html = `
            <article class="country ${className}">
            <img class="country__img" src="${country.flag}" />
            <div class="country__data">
                <h3 class="country__name">${country.name}</h3>
                <h4 class="country__region">${country.region}</h4>
                <p class="country__row"><span>👫</span>${(country.population/1000000).toFixed(2)}people</p>
                <p class="country__row"><span>🗣️</span>${country.languages[0].name}</p>
                <p class="country__row"><span>💰</span>${country.currencies[0].name}</p>
            </div>
            </article>
        `
        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
}
const display = function(country_name){
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country_name}`);
    request.send();
    request.addEventListener('load', function(){
        // console.log(JSON.parse(this.responseText));
        const [country] = JSON.parse(this.responseText);
        const [border] = country.borders;
        // console.log(border)
        displayCountry(country);
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v2/alpha/${border}`);
        request2.send();
        request2.addEventListener('load', function(){
            const country = JSON.parse(this.responseText);
            displayCountry(country, 'neighbour');
        })
        

    });
}

display('canada');
// display('germany');






