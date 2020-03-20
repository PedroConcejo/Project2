// eslint-disable-next-line no-undef
const api = axios.create({
  baseURL: 'api/',
  timeout: 1000
})

api
  .get('me/events', { headers: { token: localStorage.getItem('token') } })
  .then(response => {
    response.data.eventsFav.forEach((event, idx) => {
      const date = new Date(event.date)
      var div = document.createElement('div')
      div.className = 'card col-3 m-1'
      var htmlEvent =
      `<h4 class="card-title font-weight-bold mb-2">${event.name}</h4>
      <p class="card-text"><i class="far fa-clock pr-2"></i>${date.toDateString()}</p>
      <div class="view overlay">
        <img class="card-img-top rounded-0" src="img/${event.photoUrl}" alt="Card image cap">
        <a href="#!">
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>  
      <div class="card-body">
        <div class="collapse-content">     
          <p class="card-text collapse" id="collapseContent${idx}">${event.description}</p>      
          <a class="btn btn-flat red-text p-1 my-1 mr-0 mml-1 collapsed" data-toggle="collapse" href="#collapseContent${idx}" aria-expanded="false" aria-controls="collapseContent${idx}">Read more</a>
          <i class="fas fa-heart text-muted float-right p-1 my-1 mr-3" data-toggle="tooltip" data-placement="top" title="I like it" id="like" value="${event._id}"></i>
        </div>
      </div>`
      div.innerHTML = htmlEvent
      document.getElementById('eventList').appendChild(div)
    })
  })

api
  .get('me/clubs', { headers: { token: localStorage.getItem('token') } })
  .then(response => {
    response.data.clubsFav.forEach((club, index) => {
      var div = document.createElement('div')
      div.className = 'card col-3 m-1'
      var htmlClub =
      `<h4 class="card-title font-weight-bold mb-2">${club.name}</h4>
      <p class="card-text"><i class="far fa-clock pr-2"></i>${club.shedule}</p>
      <div class="view overlay">
        <img class="card-img-top rounded-0" src="img/${club.photoUrl}" alt="Card image cap">
        <a href="#!">
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>  
      <div class="card-body">
        <div class="collapse-content">     
          <p class="card-text collapse" id="collapseContent${index}">${club.description}</p>      
          <a class="btn btn-flat red-text p-1 my-1 mr-0 mml-1 collapsed" data-toggle="collapse" href="#collapseContent${index}" aria-expanded="false" aria-controls="collapseContent${index}">Read more</a>
          <i class="fas fa-heart text-muted float-right p-1 my-1 mr-3" data-toggle="tooltip" data-placement="top" title="I like it" id="like" value="${club._id}"></i>
        </div>
      </div>`
      div.innerHTML = htmlClub
      document.getElementById('clubList').appendChild(div)
    })
  })

document.getElementById('btn-logout').addEventListener('click', (event) => {
  localStorage.clear()
  location.assign('login.html')
})

/* document.getElementById('like').addEventListener('click', (event) => {
  const newFavEvent = {
    eventsFav: document.getElementById('like').value
  api
    .put('me', newFavEvent)
    .then(function (response) {}
    .catch(function (error) {
      console.log(error.response)
    })
}) */
