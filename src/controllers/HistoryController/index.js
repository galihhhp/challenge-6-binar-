import { UserHistory } from '../../models'

class UserHistoryController {
  static get = (req, res) => UserHistory.findAll().then(
    (history) => res.status(200).json(history)
  ).catch(
    (err) => res.status(400).send({ msg: err })
  )

  static getById = (req, res) => {
    const { id } = req.params

    UserHistory.findOne({
        where: { id }
      })
      .then((history) => res.status(200).json(history))
      .catch((err) => res.status(400).send({ msg: err }))
  }

  static create = (req, res) => {
    const { win, lose, draw } = req.body

    UserHistory.create({
        win,
        lose,
        draw,
        userId: req.params.id
      })
      .then((history) => res.status(200).json(history))
      .catch((err) => res.status(400).send({ msg: err }))
  }

  static update = (req, res) => {
    const { id } = req.params
    const { win, lose, draw } = req.body

    UserHistory.update({
        win,
        lose,
        draw
      }, {
        where: { id }
      })
      .then(() => res.json({ msg: 'SUCCES!' }))
      .catch((err) => res.status(400).json(err))
  }

  static delete = (req, res) => {
    const { id } = req.params

    return UserHistory.destroy({
      where: { id }
    }).then(
      (user) => {
        if (!user) return res.status(400).json({ msg: 'Not Found' })

        return res.status(200).json({ msg: 'Deleted' })
      }
    ).catch((err) => res.status(400).json(err))
  }


}

export default UserHistoryController