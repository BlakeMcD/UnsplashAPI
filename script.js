

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
        initialiseCarousel();
    }) 
}

//test
let carouselInitialised = false;

const initialiseCarousel = function() {

    //test 
    carouselInitialised = true;

    //Carousel Related
    // const carouselSlide = document.querySelector('.carouselSlide');
    // const carouselImages = document.querySelectorAll('.carouselSlide img')
    // console.log(carouselImages)

    // //Carousel buttons
    // const prevBtn = document.querySelector('#prevBtn');
    // const nextBtn = document.querySelector('#nextBtn');

    // //Counter 
    // let counter = 1;
    // const size = carouselImages[1].clientWidth;

    // //carouselSlide.style.transition = "transform 0.4s ease-in-out";
    // carouselSlide.style.transition = "";

    // //carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    // carouselSlide.style.transform = "translateX(0px)";



    // //Button Listeners
    // nextBtn.addEventListener('click',() => {
    //     //carouselSlide.style.transition = "transform 0.4s ease-in-out";
    //     counter ++;
    //     console.log(counter);
    //     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    //     console.log(carouselImages[counter])
    // })

    // prevBtn.addEventListener('click',() => {
    //     //carouselSlide.style.transition = "transform 0.4s ease-in-out";
    //     counter --;
    //     console.log(counter);
    //     carouselSlide.style.transform = 'translateX(' + (size * counter) - 'px)';
    //     console.log(carouselImages[counter])
    // })
}

const carouselSlide = document.querySelector('.carouselSlide');
let counter = 1;
//const size = carouselImages[0].clientWidth;
const size = 600;

carouselSlide.style.transition = "";
carouselSlide.style.transform = "translateX(0px)";

let translate = 0;

//Button Listeners
var buttonListener = document.getElementsByClassName("buttons");

nextBtn.addEventListener('click',() => {
    //if (carouselInitialised = true)
    {//carouselSlide.style.transition = "transform 0.4s ease-in-out";

        
        const carouselImages = document.querySelectorAll('.carouselSlide img')
        console.log(carouselImages)
    
        //Carousel buttons
        const prevBtn = document.querySelector('#prevBtn');
        const nextBtn = document.querySelector('#nextBtn');
    
        //Counter 
    
        //carouselSlide.style.transition = "transform 0.4s ease-in-out";
        //carouselSlide.style.transition = "";
    
        //carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        //carouselSlide.style.transform = "translateX(0px)";

    counter ++;
    console.log(counter);
    translate -= size;
    carouselSlide.style.transform = 'translateX(' + translate + 'px)';
    console.log(carouselImages[counter])
    }
})

prevBtn.addEventListener('click',() => {
    //if (carouselInitialised = true)
    {
    const carouselImages = document.querySelectorAll('.carouselSlide img')
    console.log(carouselImages)

    //Carousel buttons
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');

    //Counter 


    //carouselSlide.style.transition = "transform 0.4s ease-in-out";
    //carouselSlide.style.transition = "";

    //carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    //carouselSlide.style.transform = "translateX(0px)";

    //carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter --;
    console.log(counter);
    translate += size;
    carouselSlide.style.transform = 'translateX(' + translate + 'px)';
    console.log(carouselImages[counter])
    }
})
    

