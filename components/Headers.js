import React, { useState } from 'react'
import Link from 'next/link'

function Headers() {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [showRecuperation, setShowRecuperation] = useState(false)

  return (
    <div className="">
      {/* pour desktop */}
      <section className="fixed z-40 m-0 mx-auto flex w-full content-center justify-between bg-transparent ">
        <nav className="flex w-screen justify-between bg-white text-black">
          <img
            className="font-heading mx-auto hidden h-[150px]  w-[300px] px-4 font-semibold md:flex"
            src="l8.png"
          />
          <div className="flex w-full items-center px-5 py-6 xl:px-12">
            <a className="font-heading text-3xl font-bold" href="#"></a>

            <ul className="font-heading mx-auto hidden space-x-12 px-4 font-semibold md:flex">
              <li>
                <Link href="/">
                  <a>Accueil</a>
                </Link>
              </li>

              <li>
                <li>
                  <div className="group  inline-block">
                    <button className="min-w-32 flex items-center rounded-sm  bg-transparent px-3  outline-none focus:outline-none">
                      <span className="flex-1 pr-1 font-semibold">
                        Catégorie
                      </span>
                      <span>
                        <svg
                          className="h-4 w-4 transform  fill-current transition duration-150 ease-in-out group-hover:-rotate-180"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                    </button>
                    <ul className="min-w-32 absolute z-50  origin-top  scale-0 transform rounded-sm bg-transparent  text-black transition duration-150 ease-in-out group-hover:scale-100">
                      <Link href="ProdHomme">
                        <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                          Homme
                        </li>
                      </Link>
                      <Link href="ProdFemme">
                        <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                          Femme
                        </li>
                      </Link>
                      <Link href="ProdEnfant">
                        <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                          Enfant
                        </li>
                      </Link>
                    </ul>
                  </div>
                </li>
              </li>

              <li>
                <Link href="/Carousels">
                  <a>Promotion</a>
                </Link>
              </li>

              <li>
                <Link href="/Contacte">
                  <a href="#" className="whitespace-nowrap">
                    Contactez-nous
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex w-full items-center px-5 py-6 xl:px-12">
            <div className="hidden items-center space-x-5 xl:flex">
              <a className="" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </a>
              <a className="flex items-center " href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="absolute -mt-5 ml-4 flex">
                  <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-pink-500"></span>
                </span>
              </a>

              {/* <Link
                href="/Login"
                className="mt-4 flex items-center border-l-4 px-6 py-2 duration-200"
              > */}

              <a
                onClick={() =>
                  !showLogin
                    ? setShowLogin(true) || setShowRegister(false)
                    : setShowLogin(false) || setShowRegister(false)
                }
                // className="mt-4 flex items-center border-l-4 px-6 py-2 duration-200"
              >
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>

              {/* </Link> */}

              <a>
                <div className="flex items-center">
                  <button className="text-gray-500 focus:outline-none lg:hidden">
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6H20M4 12H20M4 18H11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <div class="flex items-center rounded-xl border-2 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search"
                      class="ml-2 w-full outline-none"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </nav>
      </section>

      {/* pour mobile version */}
      <section className="flex md:hidden">
        <h1>For Mobile</h1>
      </section>

      {showLogin ? (
        <div className="fixed  top-20 right-8 z-50 mx-auto  max-h-full w-full rounded-md bg-gray-100 p-5 sm:max-w-md">
          <h6 className="mb-1 block font-extrabold">
            CONNECTEZ-VOUS A VOTRE COMPTE
          </h6>
          <form>
            <div className="mb-4">
              <label className="mb-1 block" for="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="mb-1 block" for="password">
                Mot de passe
              </label>
              <input
                id="password"
                type="password"
                name="password"
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100"
              />
            </div>
            <div className="mt-6">
              <Link href="/DashboardLayout">
                <a className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 font-semibold capitalize text-white transition hover:bg-blue-700 focus:border-blue-700 focus:outline-none focus:ring focus:ring-blue-200 active:bg-blue-700 disabled:opacity-25">
                  Connexion
                </a>
              </Link>
            </div>
            <div className=" mt-6 text-center">
              {/* <Link href="/Recuperation"> */}
              <a
                className="underline"
                onClick={() =>
                  !showRecuperation
                    ? setShowRecuperation(true) ||
                      setShowLogin(false) ||
                      setShowRegister(false)
                    : setShowLogin(false) ||
                      setShowRegister(false) ||
                      setShowRecuperation(false)
                }
              >
                Mot de passe oublié?{' '}
              </a>
              {/* </Link> */}
            </div>
            <div className="mt-6 text-center">
              {/* <Link href="/Register"> */}
              <a
                onClick={() =>
                  !showRegister
                    ? setShowRegister(true) || setShowLogin(false)
                    : setShowRegister(false) || setShowLogin(false)
                }
                className="cursor-pointer underline "
              >
                Créer un compte
              </a>
              {/* </Link> */}
            </div>
          </form>
        </div>
      ) : null}
      {showRegister ? (
        <div className="absolute right-8  top-16 z-50 mx-auto  max-h-full w-full  overflow-y-hidden rounded-md bg-gray-100 p-5 sm:max-w-md">
          <h6 className="mb-1 block font-extrabold">
            CONNECTEZ-VOUS A VOTRE COMPTE
          </h6>
          <form>
            <div className="mb-4">
              <label className="mb-1 block" for="nomprenpom">
                Nom et prénom
              </label>
              <input
                id="nomprenom"
                type="text"
                name="nomprenom"
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="mb-1 block" for="adresse">
                Adresse
              </label>
              <input
                id="adresse"
                type="text"
                name="adresse"
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="mb-1 block" for="numtel">
                Numéro de téléphone
              </label>
              <input
                id="numtel"
                type="tel"
                name="numtel"
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="mb-1 block" for="email">
                Email
              </label>
              <input
                id="email"
                type="text"
                name="email"
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="mb-1 block" for="password">
                Mot de passe
              </label>
              <input
                id="password"
                type="password"
                name="password"
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100"
              />
            </div>

            <div className="mt-6">
              <Link href="/Dashboard">
                <a className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 font-semibold capitalize text-white transition hover:bg-blue-700 focus:border-blue-700 focus:outline-none focus:ring focus:ring-blue-200 active:bg-blue-700 disabled:opacity-25">
                  Enregistrer
                </a>
              </Link>
            </div>

            <div className="mt-6 text-center">
              Vous avez déjà un compte?
              {/* <Link href="/Login"> */}
              <a
                className="underline"
                onClick={() =>
                  !showLogin
                    ? setShowLogin(true) || setShowRegister(false)
                    : setShowLogin(false) || setShowRegister(false)
                }
              >
                Connectez-vous!
              </a>
              {/* </Link> */}
            </div>
          </form>
        </div>
      ) : null}
      {showRecuperation ? (
        <div className="fixed  right-8 top-16 z-50 mx-auto  max-h-full w-full rounded-md bg-gray-100 p-5 sm:max-w-md">
          <div className="mx-auto w-full p-5 sm:max-w-md">
            <h6 className="mb-1 block font-extrabold">
              Réinitialiser votre mot de passe
            </h6>
            <p>
              Veuillez entrer l'adresse e-mail que vous avez utilisée pour vous
              inscrire. Vous recevrez un lien temporaire pour réinitialiser
              votre mot de passe.
            </p>
            <form>
              <div className="mb-4">
                <label className="mb-1 block" for="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100"
                />
              </div>
              <div className="mt-6">
                <Link href="">
                  <a className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 font-semibold capitalize text-white transition hover:bg-blue-700 focus:border-blue-700 focus:outline-none focus:ring focus:ring-blue-200 active:bg-blue-700 disabled:opacity-25">
                    Réinitialisation de mot de passe
                  </a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Headers
