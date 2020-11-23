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


// View Form
const reset = document.getElementById('reset')
reset.addEventListener('click', () => {
  const apis = `http://localhost:3000/apis/users/del/all`
  const options = {
    method: 'DELETE'
  }
  fetch(apis, options)
    .then(res => res.json())
    .catch(err => { throw err })
})

const toAllHistory = document.getElementById('toAllHistory')
toAllHistory.addEventListener('click', () => {
  const apis = `http://localhost:3000/apis/histories`
  const options = {
    method: 'GET'
  }

  fetch(apis, options)
    .then(res => res.json())
    .then(() => window.location.replace('http://localhost:3000/alldetails'))
    .catch(err => { throw err })
})

const toAllDetails = document.getElementById('toAllDetails')
toAllDetails.addEventListener('click', () => {
  const apis = `http://localhost:3000/apis/bios`
  const options = {
    method: 'GET'
  }

  fetch(apis, options)
    .then(res => res.json())
    .then(() => window.location.replace('http://localhost:3000/alldetails'))
    .catch(err => { throw err })
})