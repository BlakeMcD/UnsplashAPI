
//Register Movement
let buttonsWork = false;

//Initialise Variables about Slideshow movement
const carouselSlide = document.querySelector('.carouselSlide');
const size = 720;
let translate = 0;
let counter = 1;

carouselSlide.style.transition = "";
carouselSlide.style.transform = "translateX(0px)";

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

}

//Search Photos Function 
function searchPhotos() {
    let clientId = "llmyDAM46Iyjezu-cd3FCEOJJepSNekA7Tg1STQTwKY";
    let query = document.getElementById("search").value;



    let url = "https://api.unsplash.com/search/photos?client_id="+clientId+"&query="+query;

    //test - remove anything that exists
    // removePics();
    carouselSlide.innerHTML = "";

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
            <img src="${photo.urls.regular}" class="carouselImage">
            <ion-icon name="heart-outline" class="likeBtn"></ion-icon>
            `;

            div.innerHTML = results;
            // div.id = "photos";
            div.className = "photos";

            

           document.querySelector('.carouselSlide').append(div);
        }
        //make previous and next buttons clickable
        buttonsWork = true;
        
        //reset counter to 1
        //counter = 1;
    }) 
}




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

        if (counter  > 1) {
            document.getElementById("prevBtn").style.color = "#FFDF65";  //set button of PREV to black
        }
        
        if (counter  >= 5) {
            document.getElementById("nextBtn").style.color = "#E8E8DB";  //set button of NEXT to grey
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

        //set colour of buttons
        if (counter  <= 1) {
            document.getElementById("prevBtn").style.color = "E8E8DB";  //set button of PREV to grey
        } 
        
        if (counter  < 5) {
            document.getElementById("nextBtn").style.color = "#FFDF65";  //set button of NEXT to black
        }
    }
})
    
//Add Event listeners for like button
carouselSlide.addEventListener('click',(event) => {
    console.log(event.target)
    if (event.target.name === "heart-outline" || event.target.name === "heart") {
        if (buttonsWork === true) {
            if (event.target.name == "heart-outline") {
                event.target.name = "heart" //change icon
    
    
                //add photos to favourites section 
                const photo = event.target.parentNode.querySelector('img');
                console.log(photo); //test
    
                let photoClone = photo.cloneNode(true);
                //document.querySelector('#h2Favourites').append(photoClone); 
                photoClone.classList.remove("carouselImage")
                photoClone.classList.add("favouritePhoto")
                document.querySelector('.favourites').append(photoClone); 
    
    
            }
            else {
                event.target.name = "heart-outline"
            }
        }
    }
})
