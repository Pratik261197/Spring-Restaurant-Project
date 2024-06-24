var restaurants = []
var restaurant = {
    id:0,
    name:"",
    city:"",
    address:"",
    cuisine:"",
    rating:0,

}

function getRestaurants() {
    fetch("http://localhost:8080/restaurants")
    .then(response => response.json())
    .then(data => {
        restaurants = data
        mapRestaurantsToCards()

    })
}

function mapRestaurantsToCards() {                 
    var cards = `<div class="row">`

    for (let i=0; i < restaurants.length; i++) {

        var ratingstr = ""

        for(let j=0; j < 5; j++ ) {
            if(j < restaurants[i].rating)
                ratingstr += `<i class="bi bi-star-fill text-warning me-1"></i>`
            else
               ratingstr += `<i class="bi bi-star text-warning me-1"></i>`
        }

        cards += `<div class= "card col-3 m-2">
        <div class="card-body">
          <h4 class="card-title">${restaurants[i].name}</h4>
          <h6 class="card-subtitle text-secondary mb-2">${restaurants[i].city}</h6>
          <p class="card-text">${restaurants[i].address}</p>
        </div>
       
       <ul class="list-group list-group-flush">
          <li class="list-group-item">${restaurants[i].cuisine}</li>
          <li class="list-group-item">${ratingstr}</li>
        
        </ul>
      </div>`
    } 
      
    cards +=`</div>`
    document.getElementById("restaurantCards").innerHTML = cards
}

function restaurantSubmit() {
    restaurant.name = document.getElementById("name").value
    restaurant.city = document.getElementById("city").value
    restaurant.address = document.getElementById("address").value
    restaurant.cuisine = document.getElementById("cuisine").value
    restaurant.rating = document.getElementById("rating").value
    
    fetch("http://localhost:8080/restaurants", {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
        }, body: JSON.stringify(restaurant)
    })
    .then(response => response.json())
    .then(data => {
        getRestaurants()
    })



}