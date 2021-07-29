
//Register Movement
let buttonsWork = false;

//remove Section function
removePics = function() {
    const parent = document.querySelector('.carouselSlide');
    const photosExist = document.getElementById("photos");
    if (photosExist !== null)
    {
        while (photosExist) {
            photosExist.parentNode.removeChild(photosExist);
        };
    };
    // const parent = document.querySelector('.carouselSlide');
    // const photosExist = document.getElementById("photos");
    // if (photosExist !== null)
    // {
    //     while (photosExist) {
    //         photosExist.parentNode.removeChild(photosExist);
    //     };
    // };
}

//Search Photos Function 
function searchPhotos() {
    let clientId = "llmyDAM46Iyjezu-cd3FCEOJJepSNekA7Tg1STQTwKY";
    let query = document.getElementById("search").value;

    let url = "https://api.unsplash.com/search/photos?client_id="+clientId+"&query="+query;

    //test - remove anything that exists
    removePics();

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
            div.id = "photos";

           document.querySelector('.carouselSlide').append(div);
        }
        //make previous and next buttons clickable
        buttonsWork = true;
    }) 
}


//Initialise Variables about Slideshow movement
const carouselSlide = document.querySelector('.carouselSlide');
const size = 1100;
let translate = 0;
let counter = 1;

carouselSlide.style.transition = "";
carouselSlide.style.transform = "translateX(0px)";

//Add Event listeners for prev/next buttons, and sort out movement
nextBtn.addEventListener('click',() => {
    {
    const carouselImages = document.querySelectorAll('.carouselSlide img')
    console.log(carouselImages)


    //only move if buttons are working
        if (buttonsWork === true) {
            if (counter >= 5) return; //so it can't scroll past 5
            counter ++;
            console.log(counter);
            translate -= size;
            carouselSlide.style.transition = "transform 0.4s ease-in-out";
            carouselSlide.style.transform = 'translateX(' + translate + 'px)';
            console.log(carouselImages[counter])
        }
    }
})

prevBtn.addEventListener('click',() => {
    {
    const carouselImages = document.querySelectorAll('.carouselSlide img')
    console.log(carouselImages)


        //only move if buttons are working
        if (buttonsWork === true) {
            if (counter <= 1) return; //so it can't scroll below 0
            counter --;
            console.log(counter);
            translate += size;
            carouselSlide.style.transition = "transform 0.4s ease-in-out";
            carouselSlide.style.transform = 'translateX(' + translate + 'px)';
            console.log(carouselImages[counter])
        }
    }
})
    
//Add Event listeners for like button
likeBtn.addEventListener('click',() => {
    {
    const carouselImages = document.querySelectorAll('.carouselSlide img')
    console.log(carouselImages)

    //only move if buttons are working
        if (buttonsWork === true) {
            if (document.getElementById('likeBtn').name == "heart-outline") {
                document.getElementById('likeBtn').name = "heart" //change icon


                //add photos to favourites section 
                const photos = document.getElementById("photos");
                console.log(photos.src); //test

                let photosClone = photos.cloneNode(true);
                document.querySelector('#h2Favourites').append(photosClone);  //this works, but moves the OG file. Need to create copy. 


            }
            else {
                document.getElementById('likeBtn').name = "heart-outline"
            }
        }
    }
})
