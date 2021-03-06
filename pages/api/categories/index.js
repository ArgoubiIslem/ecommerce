import Categorie from '../../../models/Categorie'
import dbConnect from '../../../utils/db'

dbConnect()
export default async (req, res) => {
  const { method } = req
  switch (method) {
    case 'GET':
      try {
        const categories = await Categorie.find({})
        res.status(200).json({ success: true, data: categories })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const categorie = await Categorie.create(req.body)

        res.status(200).json({ success: true, data: categorie })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
