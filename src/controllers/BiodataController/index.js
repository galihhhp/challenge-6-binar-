import { UserBiodata } from '../../models'

class UserBiodataController {
  static get = (req, res) => UserBiodata.findAll().then(
    (bios) => res.status(200).json(bios)
  ).catch(
    (err) => res.status(400).send({ msg: err })
  )

  static getById = (req, res) => {
    const { id } = req.params

    UserBiodata.findOne({
        where: { id }
      })
      .then((bio) => res.status(200).json(bio))
      .catch((err) => res.status(400).send({ msg: err }))
  }

  static create = (req, res) => {
    const { name, email, gender, age, city } = req.body

    UserBiodata.create({
        name,
        email,
        gender,
        age,
        city,
        userId: req.params.id
      })
      .then((bios) => res.status(200).json(bios))
      .catch((err) => res.status(400).send({ msg: err }))
  }

  static update = (req, res) => {
    const { id } = req.params
    const { name, email, gender, age, city } = req.body

    UserBiodata.update({
        name,
        email,
        gender,
        age,
        city
      }, {
        where: { id }
      })
      .then(() => res.json({ msg: 'SUCCES!' }))
      .catch((err) => res.status(400).json(err))
  }

  static delete = (req, res) => {
    const { id } = req.params

    return UserBiodata.destroy({
      where: { id }
    }).then(
      (user) => {
        if (!user) return res.status(400).json({ msg: 'Not Found' })

        return res.status(200).json({ msg: 'Deleted' })
      }
    ).catch((err) => res.status(400).json(err))
  }


}

export default UserBiodataController