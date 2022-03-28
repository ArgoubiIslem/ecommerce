const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  Categorie: {
    type: mongoose.Types.ObjectId,
    ref: 'Categorie',
  },
  Marque: {
    type: mongoose.Types.ObjectId,
    ref: 'Marque',
  },
  nom: { type: String, required: true },
  categorie: { type: String, required: true },
  image: { type: String, required: true },
  prix: { type: Number, required: true },
  description: { type: String, required: true },
  countInStock: { type: Number, required: true, default: 0 },
  statut: { type: String, required: true },
  marque: { type: String, required: true },
})

const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema)

export default Product
