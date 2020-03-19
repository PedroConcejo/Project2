// eslint-disable-next-line no-undef
const api = axios.create({
  baseURL: 'api/',
  timeout: 1000
})

api
  .get('clubs', { headers: { token: localStorage.getItem('token') } })
  .then(clubs => {
    clubs.forEach(club => {
      var htmlClub = `<div class="card col-3 m-1">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${club.name}</h5>
          <p class="card-text collapse" id="collapseContent">${club.description}</p>
            <a class="btn btn-flat red-text p-1 my-1 mr-0 mml-1 collapsed" data-toggle="collapse" href="#collapseContent" aria-expanded="false" aria-controls="collapseContent">Saber mas</a>
            <a href="#" id="mb" class="boton" onclick = "changeColor(this);"><img src="img/fav.png" alt="..."></a>
            <i class="fas fa-share-alt text-muted float-right p-1 my-1" data-toggle="tooltip" data-placement="top" title="Share this post"></i>
            <i class="fas fa-heart text-muted float-right p-1 my-1 mr-3" data-toggle="tooltip" data-placement="top" title="I like it"></i>
        </div>
      </div>`
      document.getElementById('clubList').appendChild(htmlClub)
    })
  })
