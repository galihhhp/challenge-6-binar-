import fs from 'fs'
import path from 'path'
import data from '../../data/data.json'

const filePath = path.resolve(__dirname, '../../data/data.json')

class PostController {
  static getHistory = (req, res) => {
    res.status(200).json(data)
  }

  static getHistoryView = (req, res) => {
    return res.render(
      'posts/history.ejs', { results: data }
    )
  }

  static getIndexView = (req, res) => {
    res.render('posts/index')
  }

  static createHistory = (req, res) => {
    data.push(req.body)

    return fs.writeFile(
      filePath,
      JSON.stringify(data),
      'utf-8',
      () => res.status(201).json({ msg: `Your game history succesfully added on ${filePath}` })
    )
  }

  static deleteHistory = (req, res) => {
    let history = data;
    history.splice(0, history.length)

    return fs.writeFile(
      filePath,
      JSON.stringify(data),
      'utf-8',
      () => res.status(201).json({ msg: `Your game history succesfully deleted on ${filePath}` })
    )
  }
}

export default PostController