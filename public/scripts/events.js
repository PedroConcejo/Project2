// eslint-disable-next-line no-undef
const api = axios.create({
  baseURL: 'api/',
  timeout: 1000
})

api
  .get('events', { headers: { token: localStorage.getItem('token') } })
  .then(events => {
    // console.log(clubs.data[2])
    events.data.forEach(event => {
      console.log(event)

      var div = document.createElement('div')
      div.className = 'card col-3 m-1'
      // var i = 0
      var htmlEvent =
      `<h4 class="card-title font-weight-bold mb-2">${event.name}</h4>
      <!-- Subtitle -->
      <p class="card-text"><i class="far fa-clock pr-2"></i>${event.date}</p>

    </div>

  </div>

  <!-- Card image -->
  <div class="view overlay">
    <img class="card-img-top rounded-0" src="img/${event.photoUrl}" alt="Card image cap">
    <a href="#!">
      <div class="mask rgba-white-slight"></div>
    </a>
  </div>

  <!-- Card content -->
  <div class="card-body">

    <div class="collapse-content">

      <!-- Text -->
      <p class="card-text collapse" id="collapseContent">${event.address + ' ' + event.description}</p>
      <!-- Button -->
      <a class="btn btn-flat red-text p-1 my-1 mr-0 mml-1 collapsed" data-toggle="collapse" href="#collapseContent" aria-expanded="false" aria-controls="collapseContent">Read more</a>
      <i class="fas fa-heart text-muted float-right p-1 my-1 mr-3" data-toggle="tooltip" data-placement="top" title="I like it" id="like" value="${event._id}"></i>

    </div>

  </div>

</div>`
      div.innerHTML = htmlEvent
      document.getElementById('eventList').appendChild(div)
    })
  })

document.getElementById('btn-logout').addEventListener('click', (event) => {
  localStorage.clear()
  location.assign('login.html')
})

/*document.getElementById('like').addEventListener('click', (event) => {
  const newFavEvent = {
    eventsFav: document.getElementById('like').value
  api
    .put('me', newFavEvent)
    .then(function (response) {}
    .catch(function (error) {
      console.log(error.response)
    })
})*/
