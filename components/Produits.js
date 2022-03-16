import React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
const produits = ({ products }) => {
  return (
    <div>
      <h3 className="mt-9 text-2xl font-medium text-gray-700">Produits</h3>
      <div className="absolute top-8 right-4 ">
        <Link
          href="/NewProduct"
          className="mt-4 flex items-center border-l-4 px-6 py-2 duration-200"
        >
          <a>
            <button className="bg-grey-light hover:bg-grey text-grey-darkest inline-flex items-center rounded py-2 px-4 font-bold">
              <svg
                className="h-3 w-3 text-black"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />{' '}
                <line x1="12" y1="5" x2="12" y2="19" />{' '}
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              <span>Créer produit</span>
            </button>
          </a>
        </Link>

        <button
          className="focus:shadow-outline ml-8 rounded bg-teal-400 py-2 px-4 font-bold text-white shadow hover:bg-teal-400 focus:outline-none  "
          type="button"
        >
          Export
        </button>
      </div>

      <script
        src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
        defer
      ></script>

      <div className="container mx-auto px-6">
        <div className="relative mx-auto pt-2 text-gray-600">
          <input
            className="h-10 rounded-lg border-2 border-gray-300 bg-white px-5 pr-16 text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 mt-5 mr-4"
          ></button>
        </div>
        <span className="mt-3 text-sm text-gray-500"></span>

        {products.map((product) => {
          return (
            <div
              className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              key={product._id}
            >
              <div className="mx-auto w-full max-w-sm overflow-hidden rounded-md shadow-md">
                <div className="min-h-80 aspect-w-1 aspect-h-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                  <img
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full "
                    src={product.image}
                    alt="girl-image"
                  />
                </div>
                <div className="px-5 py-3">
                  <span className="mt-2 text-gray-500">{product.nom}</span>
                  <br></br>
                  <span className="mt-2 text-gray-500">{product.prix}</span>
                  <br></br>
                  <Link href={`/${product._id}/edit`}>
                    <button
                      className="focus:shadow-outline rounded bg-teal-400 py-2 px-4 font-bold text-white shadow hover:bg-teal-400 focus:outline-none"
                      type="button"
                    >
                      Edit
                    </button>
                  </Link>
                  <button
                    className="focus:shadow-outline ml-8 rounded bg-teal-400 py-2 px-4 font-bold text-white shadow hover:bg-teal-400 focus:outline-none"
                    type="button"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          )
        })}

        <div className="flex justify-center">
          <div className="mt-8 flex rounded-md">
            <a
              href="#"
              className="ml-0 rounded-l border border-r-0 border-gray-200 bg-white py-2 px-4 leading-tight text-blue-700 hover:bg-blue-500 hover:text-white"
            >
              <span>Previous</span>
            </a>
            <a
              href="#"
              className="border border-r-0 border-gray-200 bg-white py-2 px-4 leading-tight text-blue-700 hover:bg-blue-500 hover:text-white"
            >
              <span>1</span>
            </a>
            <a
              href="#"
              className="border border-r-0 border-gray-200 bg-white py-2 px-4 leading-tight text-blue-700 hover:bg-blue-500 hover:text-white"
            >
              <span>2</span>
            </a>
            <a
              href="#"
              className="border border-r-0 border-gray-200 bg-white py-2 px-4 leading-tight text-blue-700 hover:bg-blue-500 hover:text-white"
            >
              <span>3</span>
            </a>
            <a
              href="#"
              className="rounded-r border border-gray-200 bg-white py-2 px-4 leading-tight text-blue-700 hover:bg-blue-500 hover:text-white"
            >
              <span>Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
produits.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/products')
  const { data } = await res.json()

  return { products: data }
}

export default produits
