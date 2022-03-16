import React from 'react'

function Fashion() {
  return (
    <div>
      <div className="mt-16">
        <h3 className="text-center text-2xl  font-medium text-gray-600">
          MEILLEURES VENTES
        </h3>
        <h2 className="text-center text-2xl  font-medium text-gray-600">
          Femme
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-md shadow-md">
            <div className="flex h-56 w-full items-end justify-end bg-cover">
              <img
                class="h-full w-full object-cover object-center"
                src="25.jpg"
                alt="girl-image"
              />
              <button className="mx-5 -mb-4 rounded-full bg-blue-600 p-2 text-white hover:bg-blue-500 focus:bg-blue-500 focus:outline-none">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </button>
            </div>

            <div className="px-5 py-3">
              <h3 className="uppercase text-gray-700">Titre</h3>
              <span className="mt-2 text-gray-500">Prix</span>
            </div>
          </div>
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-md shadow-md">
            <div className="flex h-56 w-full items-end justify-end bg-cover">
              <img
                class="h-full w-full object-cover object-center"
                src="26.jpg"
                alt="girl-image"
              />
              <button className="mx-5 -mb-4 rounded-full bg-blue-600 p-2 text-white hover:bg-blue-500 focus:bg-blue-500 focus:outline-none">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </button>
            </div>
            <div className="px-5 py-3">
              <h3 className="uppercase text-gray-700">Titre</h3>
              <span className="mt-2 text-gray-500">Prix</span>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-md shadow-md">
            <div className="flex h-56 w-full items-end justify-end bg-cover">
              <img
                class="h-full w-full object-cover object-center"
                src="2.jpg"
                alt="girl-image"
              />
              <button className="mx-5 -mb-4 rounded-full bg-blue-600 p-2 text-white hover:bg-blue-500 focus:bg-blue-500 focus:outline-none">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </button>
            </div>
            <div className="px-5 py-3">
              <h3 className="uppercase text-gray-700">Titre</h3>
              <span className="mt-2 text-gray-500">Prix</span>
            </div>
          </div>
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-md shadow-md">
            <div className="flex h-56 w-full items-end justify-end bg-cover">
              <img
                class="h-full w-full object-cover object-center"
                src="27.jpg"
                alt="girl-image"
              />
              <button className="mx-5 -mb-4 rounded-full bg-blue-600 p-2 text-white hover:bg-blue-500 focus:bg-blue-500 focus:outline-none">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </button>
            </div>
            <div className="px-5 py-3">
              <h3 className="uppercase text-gray-700">Titre</h3>
              <span className="mt-2 text-gray-500">Prix</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fashion
