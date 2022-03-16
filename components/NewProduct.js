import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import Loader from './Loader'
const NewProduct = () => {
  const [form, setForm] = useState({
    nom: '',
    categorie: '',
    image: '',
    prix: 0,
    description: '',
    countInStock: 0,
    statut: '',
    marque: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const router = useRouter()
  useEffect(() => {
    if (isSubmitting) {
      console.log(Object.keys(errors).length + 'keys')
      if (Object.keys(errors).length === 0) {
        createProduct()
      } else {
        alert('please fill the required fields !')
      }
    }
  }, [isSubmitting])
  const createProduct = async () => {
    setIsLoading(true)
    try {
      const res = await fetch('http://localhost:3000/api/products', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
      setTimeout(() => {
        setIsLoading(false)
        alert('creation avec success')
      }, 500)
      console.log('created !' + JSON.stringify(form))
      // router.push('/')
    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    validate()
    setIsSubmitting(true)
  }
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const validate = () => {
    let err = {}

    if (!form.nom) {
      err.nom = 'nom est obligatoire'
    }
    if (!form.categorie) {
      err.categorie = 'categorie est obligatoire'
    }
    if (!form.image) {
      err.image = 'image est obligatoire'
    }
    if (!form.prix) {
      err.prix = 'prix est obligatoire'
    }
    if (!form.description) {
      err.description = 'Description est obligatoire'
    }
    if (!form.countInStock) {
      err.countInStock = 'countInStock est obligatoire'
    }
    if (!form.statut) {
      err.statut = 'statut est obligatoire'
    }
    if (!form.marque) {
      err.marque = 'statut est obligatoire'
    }

    setErrors(err)
  }

  return (
    <div className="container mx-auto px-4 py-16 pt-4">
      <div className="min-w-screen flex  min-h-screen  justify-center overflow-hidden bg-gray-100 font-sans  ">
        <div className="w-full lg:w-5/6">
          <h3 className="mb-8 text-3xl font-medium text-gray-700">
            Créer Produits
          </h3>
          <div class="leading-loose">
            {isLoading ? (
              <Loader />
            ) : (
              <form
                className="m-4 max-w-xl rounded bg-white p-10 shadow-xl"
                onSubmit={handleSubmit}
              >
                <div className="">
                  <label className="text-gray-00 block text-sm" for="cus_name">
                    Titre de produit
                  </label>
                  <input
                    className="w-full rounded bg-gray-200 px-5 py-1 text-gray-700"
                    id="cus_name"
                    name="nom"
                    type="text"
                    required=""
                    placeholder="titre de produit"
                    aria-label="Name"
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-2">
                  <label
                    className="block text-sm text-gray-600"
                    for="cus_email"
                  >
                    Image de produit
                  </label>
                  <input
                    className="w-full rounded  bg-gray-200 px-5 py-4 text-gray-700"
                    id="cus_email"
                    name="image"
                    type="file"
                    required=""
                    aria-label="Email"
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-2">
                  <label class=" block text-sm text-gray-600" for="cus_email">
                    Description
                  </label>
                  <input
                    className="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
                    id="cus_email"
                    name="description"
                    type="text"
                    placeholder="description"
                    aria-label="Email"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="mt-2 inline-block w-1/2 pr-1">
                  <label className=" text-sm text-gray-600" for="cus_email">
                    Prix
                  </label>
                  <input
                    className="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
                    id="cus_email"
                    name="prix"
                    type="number"
                    required
                    placeholder="20 DT"
                    aria-label="Email"
                    onChange={handleChange}
                  />
                </div>
                <div className="-mx-1 mt-2 inline-block w-1/2 pl-1">
                  <label className=" text-sm text-gray-600" for="cus_email">
                    Compter en stock
                  </label>
                  <input
                    className="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
                    id="cus_email"
                    name="countInStock"
                    type="number"
                    placeholder="compter en stock"
                    aria-label="Email"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="-mx-1 mt-2 inline-block w-1/2 pl-1">
                  <label className=" text-sm text-gray-600" for="cus_email">
                    catégorie
                  </label>
                  <select
                    id="vehicle_id"
                    name="categorie"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-200  py-2 px-3 text-gray-600 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    required
                    onChange={handleChange}
                  >
                    <option value="">select</option>
                    <option value="1" data-val="1">
                      option 1
                    </option>
                    <option value="2" data-val="2">
                      option 2
                    </option>
                  </select>
                </div>

                <div className="">
                  <label className="block text-sm text-gray-600" for="cus_name">
                    Statut
                  </label>
                  <input
                    className="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
                    id="cus_name"
                    name="statut"
                    type="text"
                    placeholder="statut"
                    aria-label="Name"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div class="">
                  <label class="block text-sm text-gray-600" for="cus_name">
                    Marque
                  </label>
                  <input
                    className="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
                    id="cus_name"
                    name="marque"
                    type="text"
                    placeholder="marque"
                    aria-label="Name"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-4">
                  <button
                    className="focus:shadow-outline rounded bg-teal-400 py-2 px-4 font-bold text-white shadow hover:bg-teal-400 focus:outline-none"
                    type="submit"
                  >
                    Ajouter un produit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewProduct
