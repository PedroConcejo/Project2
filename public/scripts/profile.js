// eslint-disable-next-line no-undef
const api = axios.create({
  baseURL: 'api/',
  timeout: 1000
})

document.getElementById('btn-logout').addEventListener('click', (event) => {
  localStorage.clear()
  location.assign('login.html')
})

document.getElementById('btn-update').addEventListener('click', (event) => {
  const updateUser = {
    name: document.getElementById('user_name').value,
    password: document.getElementById('user_password').value,
    gender: document.getElementById('user_gender').value,
    birthday: document.getElementById('user_birthday').value,
    phone: document.getElementById('user_phone').value
  }

  api
    .post('auth/signup', updateUser)
    .then(function (response) {
      localStorage.clear()
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('name', response.data.name)
      localStorage.setItem('email', response.data.email)
      location.assign('clubs.html')
    })
    .catch(function (error) {
      console.log(error.response)
    })
})
