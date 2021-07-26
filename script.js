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

           document.querySelector('#results').append(div);
        }

    })
}