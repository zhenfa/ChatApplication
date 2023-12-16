import React from 'react'
import Avatar from './common/Avatar'

import Add from '../asset/add.png';

/** Test Data Area */
const user = {
  id: 1,
  username: 'Florencio Dorrance',
  img: null,
  online: true
}

/** [React Component] */
const Header = ({ user }) => {
  return (
    <header className="flex flex-row px-6 py-4 w-full border-b justify-between">
      <section className="flex flex-row gap-4">
        <Avatar img={user.img} />
        <div className="flex flex-col justify-between">
          <h1 className="text-xl font-semibold text-black">
            {user.username}
          </h1>
          <div className="flex flex-row items-center gap-2">
            <svg className={`${(user.online) ? 'fill-green-400' : 'fill-red-600'}`} xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11">
              <circle cx="5" cy="5.5" r="5" />
            </svg>
            {(user.online) ? 'Online' : 'Offline'}
          </div>
        </div>
      </section>
      <button className='flex flex-row px-4 py-2.5 gap-2 bg-[#615EF01A] hover:bg-blue-100 transition-all rounded-lg items-center' type='button'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M11.05 14.95L9.2 16.8C8.81 17.19 8.19 17.19 7.79 16.81C7.68 16.7 7.57 16.6 7.46 16.49C6.44877 15.472 5.5161 14.3789 4.67 13.22C3.85 12.08 3.19 10.94 2.71 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C10.83 13.32 10.94 13.42 11.04 13.52C11.44 13.91 11.45 14.55 11.05 14.95ZM21.97 18.33C21.9687 18.7074 21.8833 19.0798 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C19.39 21.62 19.38 21.63 19.37 21.63C18.78 21.87 18.14 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C10.36 19 9.97 18.71 9.6 18.4L12.87 15.13C13.15 15.34 13.4 15.5 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" fill="#615EF0" />
        </svg>
        <span className="text-base font-semibold text-primary">
          Call
        </span>
      </button>
    </header>
  )
}

/** [React Conponent] */
const MessagePanel = ({messageArray}) => {
  return (
    <>
      <section className="flex flex-col grow overflow-auto gap-2.5 p-6">
        <h1>Message Panel</h1>
      </section>
    </>
  );
}

/** [React Conponent] */
const MessageInput = ({ callback }) => {
  return (
    <section className="flex flex-row grow-0 w-full p-6 gap-4 items-center">
      <label className='cursor-pointer w-10 h-10 flex justify-center items-center rounded-lg hover:bg-gray-100 tansition-all duration-300' htmlFor="input-upload">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M11.97 12V15.5C11.97 17.43 13.54 19 15.47 19C17.4 19 18.97 17.43 18.97 15.5V10C18.97 6.13 15.84 3 11.97 3C8.1 3 4.97 6.13 4.97 10V16C4.97 19.31 7.66 22 10.97 22" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <input className='hidden' type="file" name="input-upload" id="input-upload" />
      </label>
      <div className="flex flex-row gap-2 rounded-lg border-2 w-full py-2.5 px-5">
        <input className='w-full outline-none' type="text" name="input-message" id="input-message" placeholder='Type a message' />
        <button type="button">
          <svg className='fill-[#615EF0] hover:fill-blue-400 tansition-all duration-300' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M16.14 2.96001L7.11 5.96001C1.04 7.99001 1.04 11.3 7.11 13.32L9.79 14.21L10.68 16.89C12.7 22.96 16.02 22.96 18.04 16.89L21.05 7.87001C22.39 3.82001 20.19 1.61001 16.14 2.96001ZM16.46 8.34001L12.66 12.16C12.51 12.31 12.32 12.38 12.13 12.38C11.94 12.38 11.75 12.31 11.6 12.16C11.4605 12.0189 11.3823 11.8284 11.3823 11.63C11.3823 11.4316 11.4605 11.2412 11.6 11.1L15.4 7.28001C15.69 6.99001 16.17 6.99001 16.46 7.28001C16.75 7.57001 16.75 8.05001 16.46 8.34001Z"/>
          </svg>
        </button>
      </div>
    </section>
  )
}

/** [React Conponent] */
const ChatBoard = () => {
  return (
    <>
      <section className="flex flex-col flex-1 h-screen">
        <Header user={user} />
        <MessagePanel messageArray={[]} />
        <MessageInput callback={() => {}} />
      </section>
    </>

  )
}

export default ChatBoard