import { User, UserBiodata, UserHistory } from '../../models'
import fetch from 'node-fetch'


class UserController {
  static get = (req, res) => User.findAll().then(
    (users) => res.status(200).json(users)
  ).catch(
    (err) => res.status(400).send({ msg: err })
  )

  static getById = (req, res) => {
    const { id } = req.params

    User.findOne({
        where: { id }
      })
      .then((user) => res.status(200).json(user))
      .catch((err) => res.status(400).send({ msg: err }))
  }

  static getAll = (req, res) => {
    User.findAll({
      include: [{
        model: UserBiodata,
        model: UserHistory
      }]
    }).then(users => {
      const resObj = users.map(user => {

        return Object.assign({}, {
          id: user.id,
          username: user.username,
          password: user.password,
          bio: user.bio.map(bio => {
            return Object.assign({}, {
              id: bio.id,
              name: bio.name,
              email: bio.email,
              gender: bio.age,
              age: bio.age,
              city: bio.city,
              userId: user.id
            })
          }),
          histoy: user.histoy.map(history => {
            return Object.assign({}, {
              id: history.id,
              win: history.win,
              draw: history.draw,
              lose: history.lose,
              userId: user.id
            })
          })
        })
      })
      res.json(resObj)
    }).catch((err) => {
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
  }

  static create = (req, res) => {
    const { username, password } = req.body

    User.create({
        username,
        password
      })
      .then((user) => res.status(200).json(user))
      .catch((err) => res.status(400).send({ msg: err }))
  }

  static createAll = (req, res) => {
    const {
      username,
      password,
    } = req.body

    User.create({
        username,
        password,
        include: [{
          model: UserBiodata,
          attributes: [
            'name',
            'email',
            'gender',
            'age',
            'city'
          ]
        }]
      }).then((user) => res.status(200).send(user))
      .catch((err) => res.status(400).send(err))
  }

  static update = (req, res) => {
    const { id } = req.params
    const { username, password } = req.body

    User.update({
        username,
        password
      }, {
        where: { id }
      })
      .then(() => res.json({ msg: 'SUCCES!' }))
      .catch((err) => res.status(400).json(err))
  }

  static deleteAll = (req, res) => {
    return User.destroy({
      truncate: true,
      cascade: true
    }).then(
      (user) => {
        if (user) return res.status(400).json({ msg: 'Not Found' })

        return res.status(200).json({ msg: 'Deleted' })
      }
    ).catch((err) => res.status(400).json(err))
  }

  static delete = (req, res) => {
    const { id } = req.params

    return User.destroy({
      where: { id }
    }).then(
      (user) => {
        if (!user) return res.status(400).json({ msg: 'Not Found' })

        return res.status(200).json({ msg: 'Deleted' })
      }
    ).catch((err) => res.status(400).json(err))
  }


}

export default UserController