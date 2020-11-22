import User from '../UserController'
import admin from '../../data/userLogin.json'

class ViewController {
  static getHomeView = (req, res) => {
    res.render('homepage')
  }

  static getDashboardView = (req, res) => {
    res.render('dashboard', {
      users: User.get
    })
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
}

export default ViewController