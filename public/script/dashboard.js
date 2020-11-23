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



// const getData = () => {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'http://localhost:3000/apis/users');
//   xhr.onload = (onload) => {
//     console.log(xhr.response);
//   }
//   xhr.send();
// }


// fetch('http://localhost:3000/apis/users')
//   .then(res => res.json())
//   .then(res => {
//     let tables = ''
//     Array.from(tables).forEach(table => tables += showTable(table))

//     const tableCon = document.querySelector('.tables')
//     tableCon.innerHTML = tables
//   })
//   .catch(res => console.log(res))

// function showTable(table) {
//   return `
//     <tr>
//       <td>
//       ${table.id}
//       </td>
//       <td>
//       ${table.username}
//       </td>
//       <td>
//         ${table.password}
//       </td>
//       <td>
//         <a href="">See Details</a>
//       </td>
//       <td>
//         <a href="">See History</a>
//       </td>
//       <td>
//         <a href="">Edit</a>
//       </td>
//       <td>
//         <a href="">Delete</a>
//       </td>
//     </tr>`
// }