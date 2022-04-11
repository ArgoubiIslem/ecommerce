import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import NewProduct from './NewProduct'

function Produits() {
  const [searchTerm, setSearchTerm] = useState('')
  const [productsData, setProductsData] = useState(null)
  const [newProduct, setNewProduct] = useState(false)

  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch('http://localhost:3000/api/products')

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`)
        }

        const result = await response.json()
        console.log(result['data'])
        setProductsData(result['data'])
        return result
      } catch (err) {
        console.log(err)
      }
    }
    // declare the async data fetching function

    // call the function
    getUser()
      // make sure to catch any error
      .catch(console.error)
  }, [])

  return (
    <div className="w-full ">
      <h3 className="mt-8 text-3xl font-medium text-gray-700"> Les Produits</h3>

      <div className="absolute top-40 right-4 ">
        {/* <Link
          href="/NewProduct"
          className="mt-4 flex items-center border-l-4 px-6 py-2 duration-200"
        > */}
        <button
          onClick={() =>
            !newProduct ? setNewProduct(true) : setNewProduct(false)
          }
          className="bg-grey-light  hover:bg-grey text-grey-darkest inline-flex items-center rounded bg-green-200 py-2 px-4 font-bold"
        >
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
        {/* </Link> */}

        <button
          className="focus:shadow-outline ml-8 rounded bg-blue-500 py-2 px-4 font-bold text-white shadow hover:bg-blue-500 focus:outline-none  "
          type="button"
        >
          Export
        </button>
      </div>

      <script
        src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
        defer
      ></script>

      <div className="mx-auto grid w-full justify-evenly gap-6 px-6">
        <div>
          <div
            class="mx-auto flex max-w-md items-center rounded-lg bg-white "
            x-data="{ search: '' }"
          >
            <div class="w-full">
              <input
                onChange={(event) => {
                  setSearchTerm(event.target.value)
                }}
                type="text"
                class="w-full rounded-full px-4 py-1 text-gray-800 focus:outline-none"
                placeholder="search"
                x-model="search"
                id="myInput"
              />
            </div>
            <button
              type="submit"
              class="flex h-12 w-12 items-center justify-center rounded-r-lg bg-blue-500 text-white"
            >
              <svg
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <span className="mt-3 text-sm text-gray-500"></span>

        {newProduct ? (
          <NewProduct />
        ) : (
          <div className="flex w-full gap-6 ">
            {productsData
              ?.filter((product) => {
                if (searchTerm == '') {
                  return product
                } else if (
                  product.nom.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return product
                }
              })
              .map(function (product, i) {
                console.log(productsData)
                return (
                  <div className="mt-10 w-full " key={product._id}>
                    <div className="mx-auto w-full max-w-sm overflow-hidden rounded-md shadow-md">
                      <div className="min-h-80 aspect-w-1 aspect-h-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                        <img
                          className="h-full w-full object-cover object-center lg:h-full lg:w-full "
                          src={product.image}
                          alt=""
                        />
                      </div>
                      <div className="px-5 py-3">
                        <span className="mt-2 text-gray-500">
                          {product.nom}
                        </span>
                        <br></br>
                        <span className="mt-2 text-gray-500">
                          {product.prix} DT
                        </span>
                        <br></br>
                        <Link href={`/${product._id}/edit`}>
                          <button
                            className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white shadow hover:bg-blue-500 focus:outline-none"
                            type="button"
                          >
                            Edit
                          </button>
                        </Link>
                        <button
                          className="focus:shadow-outline ml-8 rounded bg-red-500 py-2 px-4 font-bold text-white shadow hover:bg-red-500 focus:outline-none"
                          type="button"
                        >
                          Supprimer
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        )}
      </div>
    </div>
  )
}
// produits.getInitialProps = async () => {
//   const res = await fetch('http://localhost:3000/api/products')
//   const { data } = await res.json()

//   return { products: data }
// }

export default Produits
