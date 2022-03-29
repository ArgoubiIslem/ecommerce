import React, { useEffect, useState } from 'react'
import Head from 'next/head'
function ChatBox() {
  // const chatModal = document.querySelector('.chat-modal')
  // const chatServices = document.querySelector('.chat-services')

  // const showChat = document.querySelector('.show-chat')
  // const closeChat = document.querySelector('.close-chat')

  // showChat.addEventListener('click', function () {
  //   chatModal.classList.add('show')
  //   showChat.classList.add('hidden')
  //   setTimeout(() => {
  //     chatServices.classList.add('expand')
  //   }, 500)
  // })
  // closeChat.addEventListener('click', function () {
  //   setTimeout(() => {
  //     showChat.classList.remove('hidden')
  //   }, 820)
  //   chatServices.classList.remove('expand')
  //   setTimeout(() => {
  //     chatModal.classList.remove('show')
  //   }, 500)
  // })

  return (
    <div>
      {/* <!-- component --> */}

      <div class="fixed bottom-0 right-0 ml-6 flex w-full flex-col items-end">
        <div class="chat-modal show  mr-5 mb-5 flex flex-col shadow-lg sm:w-1/2 md:w-1/3 lg:w-1/4">
          {/* <!-- close button --> */}
          <button
            type="button"
            onclick="openModal(false)"
            class="close-chat mb-1 flex w-10 cursor-pointer items-center justify-center self-end rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600 "
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-x"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
              />
              <path
                fill-rule="evenodd"
                d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
              />
            </svg>
          </button>
          {/* <!-- admin profile --> */}
          <div class="mr-5 flex w-full items-center justify-between border bg-green-500 p-2 text-white shadow-lg">
            <div class="flex items-center">
              <img
                src="https://f0.pngfuel.com/png/136/22/profile-icon-illustration-user-profile-computer-icons-girl-customer-avatar-png-clip-art-thumbnail.png"
                alt="picture"
                class="mr-1 h-8 w-8 rounded-full"
              />
              <h2 class="font-semibold tracking-wider">HartDev</h2>
            </div>
            <div class="flex items-center justify-center">
              <small class="mr-1">online</small>
              <div class="h-2 w-2 rounded-full bg-white"></div>
            </div>
          </div>
          {/* <!-- chats --> */}
          <div class="chat-services expand flex flex-col overflow-auto bg-gray-200 px-2">
            <div class="chat my-2 mr-3 self-start rounded-md bg-white p-2 text-gray-700 shadow">
              apa ada yang bisa saya bantu ?
            </div>
            <div class="message my-2 ml-3 self-end rounded-md bg-green-500 p-2 text-white shadow">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Corrupti, ratione!
            </div>
            <div class="message my-2 ml-3 self-end rounded-md bg-green-500 p-2 text-white shadow">
              Lorem, ipsum.
            </div>
            <div class="message my-2 mr-3 self-start rounded-md bg-white p-2 text-gray-700 shadow">
              Lorem ipsum dolor sit amet.
            </div>
            <div class="message my-2 ml-3 self-end rounded-md bg-green-500 p-2 text-white shadow">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, quod.
            </div>
            <div class="message my-2 mr-3 self-start rounded-md bg-white p-2 text-gray-700 shadow">
              Lorem, ipsum dolor.
            </div>
          </div>
          {/* <!-- send message --> */}
          <div class="relative bg-white">
            <input
              type="text"
              name="message"
              placeholder="ketik pesan anda"
              class="w-full border border-green-500 py-2 pl-4 pr-16 focus:outline-none"
            />
            <button class="transistion-color absolute right-0 bottom-0 m-1  w-auto bg-white px-3 py-1 text-green-600 duration-100 hover:text-green-500 focus:outline-none">
              Send
            </button>
          </div>
        </div>

        <button
          type="button"
          onclick="toggleModal('modal-id')"
          class="show-chat  mx-10 mb-6 mt-4 flex cursor-pointer items-center justify-center text-green-500 hover:text-green-600 "
        >
          <svg
            width="4em"
            height="4em"
            viewBox="0 0 16 16"
            class="bi bi-chat-text-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ChatBox
