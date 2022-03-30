import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import NewCategorie from './NewCategorie'
function categorie() {
  const [categoriesData, setCategoriesData] = useState(null)
  const [newCategorie, setNewCategorie] = useState(false)

  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch('http://localhost:3000/api/categories')

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`)
        }

        const result = await response.json()
        console.log(result['data'])
        setCategoriesData(result['data'])
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
    <div className="container mx-auto px-4 py-16 pt-4 ">
      <h3 className="mb-8 text-3xl font-medium text-gray-700">catégories</h3>
      <div className="absolute top-40 right-4 ">
        {/* <Link
          href="/NewProduct"
          className="mt-4 flex items-center border-l-4 px-6 py-2 duration-200"
        > */}
        <button
          onClick={() =>
            !newCategorie ? setNewCategorie(true) : setNewCategorie(false)
          }
          className="bg-grey-light hover:bg-grey text-grey-darkest inline-flex items-center rounded py-2 px-4 font-bold"
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
          <span>Créer categories</span>
        </button>
        {/* </Link> */}

        <button
          className="focus:shadow-outline ml-8 rounded bg-blue-500 py-2 px-4 font-bold text-white shadow hover:bg-blue-500 focus:outline-none  "
          type="button"
        >
          Export
        </button>
      </div>

      {/* <div class="items-center  justify-center bg-gradient-to-br">
        <form>
          <div className="w-screen max-w-sm rounded-xl  px-10 py-8 shadow-md">
            <div className="space-y-4">
              <h1 className="text-center text-2xl font-semibold text-gray-600">
                Ajouter categorie
              </h1>
              <div>
                <label className="mb-1 block font-semibold text-gray-600">
                  Categorie
                </label>
                <input
                  type="text"
                  className="w-full rounded-md bg-indigo-50 px-4 py-2 outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block font-semibold text-gray-600">
                  Description
                </label>
                <input
                  type="text"
                  className="w-full rounded-md bg-indigo-50 px-4 py-2 outline-none"
                />
              </div>
            </div>
            <button
             className="mt-4 w-full rounded-md bg-gradient-to-tr from-blue-600 to-indigo-600 py-2 text-lg tracking-wide text-indigo-100">
              Ajouter
            </button>
          </div>
        </form>
      </div> */}
      <h1 className="mb-10 text-3xl font-medium text-gray-700">
        List des catégories
      </h1>
      {newCategorie ? (
        <NewCategorie />
      ) : (
        <div className="my-6 rounded bg-white shadow-md">
          <table className="w-full rounded shadow-lg">
            <thead>
              <tr className="bg-gray-200 text-sm uppercase leading-normal text-gray-600">
                <th className="py-3 px-6 text-left">ID</th>
                <th className="py-3 px-6 text-left">catégorie</th>
                <th className="py-3 px-6 text-center">Déscription</th>

                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="text-sm font-light text-gray-600">
              {categoriesData?.map(function (categorie, i) {
                console.log(categoriesData)
                return (
                  <tr
                    className="border-b border-gray-200 hover:bg-gray-100"
                    key={categorie._id}
                  >
                    <td className="whitespace-nowrap py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2"></div>
                        <span className="font-medium">#</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <span>{categorie.categorieLib}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex items-center justify-center">
                        {categorie.description}
                      </div>
                    </td>

                    <td className="py-3 px-6 text-center">
                      <div className="item-center flex justify-center">
                        <div className="mr-2 w-4 transform hover:scale-110 hover:text-purple-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </div>

                        <div className="mr-2 w-4 transform hover:scale-110 hover:text-purple-500">
                          <Link href={`/${categorie._id}/editCategorie`}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                          </Link>
                        </div>

                        <div className="mr-2 w-4 transform hover:scale-110 hover:text-purple-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </div>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default categorie
