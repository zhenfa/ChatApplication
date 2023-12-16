import React from 'react'

/** import React Components */
import UserArticle from './common/UserArticle';

import User from '../asset/user1.png';

/** Test Data Area */
let membersArticleList = [{
  "id": 1,
  "title": "Mr",
  "img": "https://robohash.org/eaqueducimuslaboriosam.png?size=50x50&set=set1",
  "subtitle": "Donec dapibus. Duis at velit eu est congue elementum."
}, {
  "id": 2,
  "title": "Mrs",
  "img": "https://robohash.org/laboriosametporro.png?size=50x50&set=set1",
  "subtitle": "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
}, {
  "id": 3,
  "title": "Honorable",
  "img": "https://robohash.org/fugaestmolestiae.png?size=50x50&set=set1",
  "subtitle": "In sagittis dui vel nisl. Duis ac nibh."
 }
 , {
  "id": 4,
  "title": "Ms",
  "img": "https://robohash.org/sitquisarchitecto.png?size=50x50&set=set1",
  "subtitle": "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus."
}, {
  "id": 5,
  "title": "Rev",
  "img": "https://robohash.org/voluptatesquidemqui.png?size=50x50&set=set1",
  "subtitle": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla."
}, {
  "id": 6,
  "title": "Mrs",
  "img": "https://robohash.org/etametprovident.png?size=50x50&set=set1",
  "subtitle": "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla."
}
, {
  "id": 7,
  "title": "Ms",
  "img": "https://robohash.org/autvelarchitecto.png?size=50x50&set=set1",
  "subtitle": "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros."
}, {
  "id": 8,
  "title": "Mrs",
  "img": "https://robohash.org/atexillum.png?size=50x50&set=set1",
  "subtitle": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue."
}, {
  "id": 9,
  "title": "Mr",
  "img": "https://robohash.org/quoilloimpedit.png?size=50x50&set=set1",
  "subtitle": "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum."
}, {
  "id": 10,
  "title": "Rev",
  "img": "https://robohash.org/assumendautquis.png?size=50x50&set=set1",
  "subtitle": "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
}
]

/** [React Component] Header */
const Header = () => {
  return (
    <>
      <header className="flex flex-row justify-between items-center p-6 border-b">
        <h1 className="text-xl font-semibold text-black">
          Directiry
        </h1>
        <svg className='fill-primary hover:fill-blue-400 transition-all duration-300 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
          <path d="M36.6667 20C36.6667 10.8167 29.1834 3.33334 20 3.33334C10.8167 3.33334 3.33335 10.8167 3.33335 20C3.33335 29.1833 10.8167 36.6667 20 36.6667C29.1834 36.6667 36.6667 29.1833 36.6667 20ZM18.3334 13.3333C18.3334 12.4 19.0834 11.6667 20 11.6667C20.9167 11.6667 21.6667 12.4167 21.6667 13.3333C21.6667 14.25 20.9167 15 20 15C19.0834 15 18.3334 14.2667 18.3334 13.3333ZM18.3334 20C18.3334 19.0667 19.0834 18.3333 20 18.3333C20.9167 18.3333 21.6667 19.0833 21.6667 20C21.6667 20.9167 20.9167 21.6667 20 21.6667C19.0834 21.6667 18.3334 20.9333 18.3334 20ZM18.3334 26.6667C18.3334 25.7333 19.0834 25 20 25C20.9167 25 21.6667 25.75 21.6667 26.6667C21.6667 27.5833 20.9167 28.3333 20 28.3333C19.0834 28.3333 18.3334 27.6 18.3334 26.6667Z"/>
        </svg>
      </header>
    </>
  )
}

/** [React Component] Team Members */
const MemberList = ({memberList}) => {
  return (
    <>
      <section className="flex flex-col grow px-4 gap-2 border-b overflow-auto">
        {/** title */}
        <div className="flex flex-row gap-2 items-center">
          <h1 className="text-sm text-black font-semibold">
            Teams Members
          </h1>
          <span className="flex px-2 py-1 text-xs font-semibold text-black rounded-3xl bg-gray-200">
            {
              ( memberList ) ? memberList.length : 0
            }
          </span>
        </div>
        {/** MemberList */}
        {
          <section className="flex flex-col gap-2 overflow-auto">
            {
              memberList.map( member => <UserArticle article={member} messageTags={[]} isActived={false} /> )
            }
          </section>
        }
      </section>
    </>
  );
}

/** [React Component] File List */
const FileList = ({ fileList }) => {
  return (
    <>
      <section className="flex flex-col grow px-4 gap-2 w-full overflow-auto">
        {/** title */}
        <div className="flex flex-row gap-2 items-center">
          <h1 className="text-sm text-black font-semibold">
            Files
          </h1>
          <span className="flex px-2 py-1 text-xs font-semibold text-black rounded-3xl bg-gray-200">
            { fileList.length }
          </span>
          
        </div>
        {
            <section className="flex flex-col gap-2 overflow-auto">
              {
                fileList.map( member => <UserArticle article={member} messageTags={[]} isActived={false} /> )
              }
            </section>
          }
      </section>
    </>
  )
} 

let test = [
  {
    id:1
  }
]

/** [React Component] Directory Component */
const Directory = () => {
  return (
    <>
      <section className="flex flex-col h-screen w-[362px] border-l gap-6">
        <Header />
        <MemberList memberList={membersArticleList} />
        <FileList fileList={membersArticleList} />
      </section>
    </>
  )
}

export default Directory