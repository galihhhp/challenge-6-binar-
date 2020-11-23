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