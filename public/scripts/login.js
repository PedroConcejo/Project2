// eslint-disable-next-line no-undef
const api = axios.create({
  baseURL: 'api/',
  timeout: 1000
})

document.getElementById('btn-login').addEventListener('click', (event) => {
  console.log('click')
  const newUser = {
    user_email: document.getElementById('login_email').value,
    user_password: document.getElementById('login_password').value
  }
  console.log('info')
  api
    .post('auth/login', newUser)
    .then(function (response) {
      if (response.data.error) {
        alert('WRONG PASSWORD')
      } else {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('email', response.data.email)
        location.assign('clubs.html')
      }
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
