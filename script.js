function SearchPhotos() {
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

         for (const photo of data.results) {

            const div = document.createElement('div');

            const results = `
            <img src="${photo.urls.regular}">
            <a href="${photo.links.download}">
            `;

            div.innerHTML = results;

           document.querySelector('.carouselSlide').append(div);
        }

    })

    //Carousel Related
    const carouselSlide = document.querySelector('.carouselSlide');
    const carouselImages = document.querySelectorAll('.carouselSlide img')

    //Carousel buttons
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');

    //Counter 
    let counter = 1;
    const size = carouselImages[1].clientWidth;

    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    //Button Listeners
    nextBtn.addEventListener('click',() => {
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter ++;
        console.log(counter);
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    })

    prevBtn.addEventListener('click',() => {
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter --;
        console.log(counter);
        carouselSlide.style.transform = 'translateX(' + (size * counter) + 'px)';
    })
    
}

