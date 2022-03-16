import React, { useEffect, useState } from 'react'
function Carousels() {
  // useEffect(() => {
  //   document.addEventListener('alpine:init', () => {
  //     Alpine.data('slider', () => ({
  //       currentIndex: 1,
  //       images: [
  //         'https://source.unsplash.com/1600x900/?beach',
  //         'https://source.unsplash.com/1600x900/?cat',
  //         'https://source.unsplash.com/1600x900/?dog',
  //         'https://source.unsplash.com/1600x900/?lego',
  //         'https://source.unsplash.com/1600x900/?textures&patterns',
  //       ],
  //       back() {
  //         if (this.currentIndex > 1) {
  //           this.currentIndex = this.currentIndex - 1
  //         }
  //       },
  //       next() {
  //         if (this.currentIndex < this.images.length) {
  //           this.currentIndex = this.currentIndex + 1
  //         } else if (this.currentIndex <= this.images.length) {
  //           this.currentIndex = this.images.length - this.currentIndex + 1
  //         }
  //       },
  //     }))
  //   })
  // }, [])
  const [count, setCount] = useState(0)
  const [list, setList] = useState([
    '7.jpg',
    '11.jpg',
    '20.jpg',
    '18.jpg',
    '12.jpg',
  ])
  function next() {
    if (count < 5) {
      setCount(count + 1)
    }
  }
  function prev() {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <template
      x-data="slider"
      className=" relative flex w-full flex-shrink-0 overflow-hidden shadow-2xl"
    >
      <div className="absolute  top-5 right-5 z-10 rounded-full bg-gray-600 px-2 text-center text-sm text-black">
        {/* <span>{count}</span>/<span>{list.length}</span> */}
      </div>

      <div>
        <div
          className="h-96"
          // x-show="currentIndex == index + 1"
          // x-transition:enter="transition transform duration-300"
          // x-transition:enter-start="opacity-0"
          // x-transition:enter-end="opacity-100"
          // x-transition:leave="transition transform duration-300"
          // x-transition:leave-start="opacity-100"
          // x-transition:leave-end="opacity-0"
        >
          <img
            src={list[count]}
            alt="Image"
            className="absolute inset-0 z-10 h-full w-full object-cover opacity-70"
          />
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-14 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md hover:bg-gray-200"
      >
        <svg
          className=" h-8 w-8 transform font-bold text-gray-500 transition duration-500 ease-in-out hover:-translate-x-0.5 hover:text-gray-600 motion-reduce:transform-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>

      <button
        onClick={next}
        className="absolute right-14 top-1/2 z-10 flex h-11 w-11 translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md hover:bg-gray-200"
      >
        <svg
          className=" h-8 w-8 transform font-bold text-gray-500 transition duration-500 ease-in-out hover:translate-x-0.5 hover:text-gray-600 motion-reduce:transform-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </template>
  )
}

export default Carousels

// import React, { useEffect, useState } from 'react'
// function Navbar() {
//   const [count, setCount] = useState(0)
//   const [list, setList] = useState([
//     '7.jpg',
//     '11.jpg',
//     '20.jpg',
//     '18.jpg',
//     '12.jpg',
//   ])
//   function next() {
//     if (count < 4) {
//       setCount(count + 1)
//     }
//   }
//   function prev() {
//     if (count > 0) {
//       setCount(count - 1)
//     }
//   }

//   return (
//     <template
//       x-data="slider"
//       className="relative flex w-full flex-shrink-0 overflow-hidden shadow-2xl"
//     >
//       <div className="absolute top-5 right-5 z-10 mt-56 rounded-full bg-gray-600 px-2 text-center text-sm text-white">
//         <span>{count}</span>/<span>{list.length - 1}</span>
//       </div>

//       <div>
//         <div className="mt-96 h-96">
//           <img
//             src={list[count]}
//             alt="Image"
//             className="absolute inset-0 z-10 h-full w-full object-cover opacity-70"
//           />
//           <div className="absolute inset-x-0 bottom-1 z-20 mx-auto w-96 bg-gray-300 bg-opacity-25 p-4 text-center text-sm font-light leading-snug tracking-widest">
//             {/* Any kind of content here! Primum in nostrane potestate est, quid */}
//             {/* meminerimus? Nulla erit controversia. Vestri haec verecundius, illi */}
//             {/* fortasse constantius. */}
//           </div>
//         </div>
//       </div>

//       <button
//         onClick={prev}
//         className="absolute left-14 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md hover:bg-gray-200"
//       >
//         <svg
//           className=" h-8 w-8 transform font-bold text-gray-500 transition duration-500 ease-in-out hover:-translate-x-0.5 hover:text-gray-600 motion-reduce:transform-none"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2.5"
//             d="M15 19l-7-7 7-7"
//           ></path>
//         </svg>
//       </button>

//       <button
//         onClick={next}
//         className="absolute right-14 top-1/2 z-10 flex h-11 w-11 translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md hover:bg-gray-200"
//       >
//         <svg
//           className=" h-8 w-8 transform font-bold text-gray-500 transition duration-500 ease-in-out hover:translate-x-0.5 hover:text-gray-600 motion-reduce:transform-none"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2.5"
//             d="M9 5l7 7-7 7"
//           ></path>
//         </svg>
//       </button>
//     </template>
//   )
// }

// export default Navbar
