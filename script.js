
//Register Movement
let buttonsWork = false;

//Search Photos Function 
function searchPhotos() {
    let clientId = "llmyDAM46Iyjezu-cd3FCEOJJepSNekA7Tg1STQTwKY";
    let query = document.getElementById("search").value;

    let url = "https://api.unsplash.com/search/photos?client_id="+clientId+"&query="+query;

    //make API request

    fetch(url)
    .then(function(data) {
        return data.json();
    })
    .then(function(data) {
        console.log(data);

         for (const photo of data.results.slice(0,5)) {

            const div = document.createElement('div');

            const results = `
            <img src="${photo.urls.regular}">
            <a href="${photo.links.download}">
            `;

            div.innerHTML = results;

           document.querySelector('.carouselSlide').append(div);
        }
        //make previous and next buttons clickable
        buttonsWork = true;
    }) 
}



const carouselSlide = document.querySelector('.carouselSlide');
let counter = 1;
const size = 600;

carouselSlide.style.transition = "";
carouselSlide.style.transform = "translateX(0px)";

let translate = 0;

//var buttonListener = document.getElementsByClassName("buttons");

nextBtn.addEventListener('click',() => {
    {

    const carouselImages = document.querySelectorAll('.carouselSlide img')
    console.log(carouselImages)

    //Carousel buttons
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');

    //only move if buttons are working
        if (buttonsWork === true) {
        counter ++;
        console.log(counter);
        translate -= size;
        carouselSlide.style.transform = 'translateX(' + translate + 'px)';
        console.log(carouselImages[counter])
        }
    }
})

prevBtn.addEventListener('click',() => {
    {
    const carouselImages = document.querySelectorAll('.carouselSlide img')
    console.log(carouselImages)

    //Carousel buttons
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');

        //only move if buttons are working
        if (buttonsWork === true) {
        counter --;
        console.log(counter);
        translate += size;
        carouselSlide.style.transform = 'translateX(' + translate + 'px)';
        console.log(carouselImages[counter])
        }
    }
})
    

