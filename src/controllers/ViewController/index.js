import {get, getById } from '../UserController'
import admin from '../../data/userLogin.json'
import fetch from 'node-fetch'
import { json } from 'express'

class ViewController {
  static getHomeView = (req, res) => {
    res.render('homepage')
  }

  static getDashboardView = (req, res) => {
    const apis = `http://localhost:3000/apis/users`
    const user = json(apis)
    const options = {
      method: 'GET'
    }

    fetch(apis, options)
      .then(res => {
        return res.json()
      })
      .then(() => res.render('dashboard', {
        users: user
      })).catch((err) => {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else if (err.requiest) {
          console.log(err.requiest);
        } else {
          console.log('Error', err.message);
        }
      })

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
  }

  static getDetailsView = (req, res) => {
    res.render('details')
  }

  static getAllDetailsView = (req, res) => {
    res.render('allDetails')
  }

  static getHistoryView = (req, res) => {
    res.render('history')
  }

  static getAdminLoginView = (req, res) => {
    res.render('adminLogin', {
      admins: admin
    })
  }

  static getFormsView = (req, res) => {
    res.render('forms')
  }
}

export default ViewController