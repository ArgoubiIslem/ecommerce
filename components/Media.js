import React from 'react'

function Media() {
  return (
    <div>
      <div className="pt-2">
        <div className="text-black-400 m-auto flex max-w-6xl flex-col border-t border-gray-500 px-3 pb-5 pt-5 text-sm md:flex-row">
          <div className="mt-2 flex flex-row md:flex-auto md:flex-row-reverse">
            <div>
              <a
                title="Follow me on facebook"
                href="https://www.whatsapp.com"
                target="_blank"
                className="block h-16 w-16 transform rounded-full shadow transition-all hover:rotate-12 hover:scale-110 hover:shadow-lg"
              >
                <img
                  className="h-full w-full rounded-full object-cover object-center"
                  src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
                />
              </a>
            </div>

            <div>
              <a
                title="Follow me on facebook"
                href="https://www.instagram.com"
                target="_blank"
                className="block h-16 w-16 transform rounded-full shadow transition-all hover:rotate-12 hover:scale-110 hover:shadow-lg"
              >
                <img
                  className="h-full w-full rounded-full object-cover object-center"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                />
              </a>
            </div>
            <div>
              <a
                title="Follow me on facebook"
                href="https://www.facebook.com/dkh.amal.5/"
                target="_blank"
                className="block h-16 w-16 transform rounded-full shadow transition-all hover:rotate-12 hover:scale-110 hover:shadow-lg"
              >
                <img
                  className="h-full w-full rounded-full object-cover object-center"
                  src="https://icones.pro/wp-content/uploads/2021/02/facebook-icones.png"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Media
