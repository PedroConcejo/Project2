// eslint-disable-next-line no-undef
const api = axios.create({
  baseURL: 'api/',
  timeout: 1000
})

api
  .get('clubs', { headers: { token: localStorage.getItem('token') } })
  .then(clubs => {
    // console.log(clubs.data[2])
    clubs.data.forEach((club, idx) => {
      var div = document.createElement('div')
      div.className = 'card col-3 m-1'
      // var i = 0
      var htmlClub =
      `<h4 class="card-title font-weight-bold mb-2">${club.name}</h4>
      <!-- Subtitle -->
      <p class="card-text"><i class="far fa-clock pr-2"></i>${club.schedule}</p>

    </div>

  </div>

  <!-- Card image -->
  <div class="view overlay">
    <img class="card-img-top rounded-0" src="img/${club.photoUrl}" alt="Card image cap">
    <a href="#!">
      <div class="mask rgba-white-slight"></div>
    </a>
  </div>

  <!-- Card content -->
  <div class="card-body">

    <div class="collapse-content">

      <!-- Text -->
      <p class="card-text collapse" id="collapseContent${idx}">${club.address + ' ' + club.description}</p>
      <!-- Button -->
      <a class="btn btn-flat red-text p-1 my-1 mr-0 mml-1 collapsed" data-toggle="collapse" href="#collapseContent${idx}" aria-expanded="false" aria-controls="collapseContent${idx}">Read more</a>
      <i class="fas fa-share-alt text-muted float-right p-1 my-1" data-toggle="tooltip" data-placement="top" title="Share this post"></i>
      <i class="fas fa-heart text-muted float-right p-1 my-1 mr-3" data-toggle="tooltip" data-placement="top" title="I like it"></i>

    </div>

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
