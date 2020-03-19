// eslint-disable-next-line no-undef
const api = axios.create({
  baseURL: 'api/',
  timeout: 1000
})

document.getElementById('btn-signup').addEventListener('click', (event) => {
  const newUser = {
    name: document.getElementById('user_name').value,
    email: document.getElementById('user_email').value,
    password: document.getElementById('user_password').value,
    gender: document.getElementById('user_gender').value,
    birthday: document.getElementById('user_birthday').value,
    phone: document.getElementById('user_phone').value
  }

  api
    .post('auth/signup', newUser)
    .then(function (response) {
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('name', response.data.name)
      localStorage.setItem('email', response.data.email)
      location.assign('clubs.html')
    })
    .catch(function (error) {
      console.log(error.response)
    })
})

// document.getElementById('btn-api').addEventListener('click', (event) => {
//   api
//     .get('whoami', { headers: { token: localStorage.getItem('token') } })
//     .then(function (response) {
//       console.log(response.data)
//     })
//     .catch(function (error) {
//       console.log(error.response)
//     })
// })
