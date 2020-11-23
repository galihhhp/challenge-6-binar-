// static getDashboardView = (req, res) => {
//     const apis = `http://localhost:3000/apis/users`
//     const { id, username, password } = User
//     const options = {
//       method: 'GET',
//     }

//     fetch(apis, options)
//       // fetch(apis, {
//       //     method: 'GET'
//       //   })
//       .then((data) => res.render('dashboard', {
//         users: data
//       })).catch((err) => {
//         if (err.response) {
//           console.log(err.response.data);
//           console.log(err.response.status);
//           console.log(err.response.headers);
//         } else if (err.requiest) {
//           console.log(err.requiest);
//         } else {
//           console.log('Error', err.message);
//         }
//       })

// const deleteButton = document.querySelector('#delBtn');
// const endpoint = `/apis/history`
// deleteButton.addEventListener('click', () => {
//   fetch(endpoint, {
//       method: 'DELETE'
//     })
//     .then(res => res.json())
//     .then(res => location.reload())
//     .catch(err => console.log(err));
// })

// const p = document.querySelectorAll('.player')
// p.forEach((choice) => {
//   choice.addEventListener('click', () => {
//     player.playerChoice(choice)

//     const data = {
//       result: game.startResult
//     }

//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     }

//     fetch('/apis/history', options)
//   })
// })

// res.render('dashboard', {
//   users: User
// })
//   }

const username = document.querySelector('#usernameForm').value
const password = document.querySelector('#passwordForm').value
const createUser = document.getElementById('createUser')
createUser.addEventListener('click', () => {

  const apis = `http://localhost:3000/apis/users/`
  const data = {
    username: username,
    password: username
  }
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  const blank = {
    username: '',
    password: ''
  }

  if (blank) {
    alert('Please, insert your biodata!')
  }

  fetch(apis, options)
    .then(res => res.json())
    .catch(err => res.send(err))
})