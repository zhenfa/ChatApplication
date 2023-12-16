import React, { useMemo } from 'react'

/** import Icons */
import Vector from '../asset/Vector.png'
/** import Common Components */
import Avatar from './common/Avatar'
// import UserArticle from '../conponents/common/UserArticle';

/** Config for Message Tags */
const tags = [
	{
		/** Questions */
		type: 1,
		bgColor: 'bg-orange-200',
		textColor: 'text-orange-600',
		title: 'Question'
	},
	{
		/** Help wanted */
		type: 2,
		bgColor: 'bg-green-200',
		textColor: 'text-green-600',
		title: 'Help wanted'
	},
	{
		/** Default */
		type: 3,
		bgColor: 'bg-white',
		textColor: 'text-gray-600',
		title: 'Some content'
	}
]

/** Test Data Area */
const userList = [{
	"id": 1,
	"username": "mcuttles0",
	"message": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
	"img": "https://robohash.org/maioreslaborumet.png?size=50x50&set=set1",
	"tags": [
		2
	]
}, {
	"id": 2,
	"username": "ehanes1",
	"message": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
	"img": "https://robohash.org/maioresquinisi.png?size=50x50&set=set1",
	"tags": [
		2
	]
}, {
	"id": 3,
	"username": "eboothe2",
	"message": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
	"img": "https://robohash.org/commodiullamid.png?size=50x50&set=set1",
	"tags": [
		2
	]
 }//, {
// 	"id": 4,
// 	"username": "mhazeldene3",
// 	"message": "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
// 	"img": "https://robohash.org/expeditamagnamnatus.png?size=50x50&set=set1",
// 	"tags": [
// 		1
// 	]
// }, {
// 	"id": 5,
// 	"username": "trichardson4",
// 	"message": "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
// 	"img": "https://robohash.org/etautlaboriosam.png?size=50x50&set=set1",
// 	"tags": [
// 		3
// 	]
// }, {
// 	"id": 6,
// 	"username": "mnehls5",
// 	"message": "Suspendisse ornare consequat lectus.",
// 	"img": "https://robohash.org/accusantiumanimiet.png?size=50x50&set=set1",
// 	"tags": [
// 		2
// 	]
// }, {
// 	"id": 7,
// 	"username": "mlidden6",
// 	"message": "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
// 	"img": "https://robohash.org/totamsaepesint.png?size=50x50&set=set1",
// 	"tags": [
// 		3,
// 		1
// 	]
// }, {
// 	"id": 8,
// 	"username": "gpurnell7",
// 	"message": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
// 	"img": "https://robohash.org/nonrepellatsoluta.png?size=50x50&set=set1",
// 	"tags": [
// 		3
// 	]
// }, {
// 	"id": 9,
// 	"username": "cfinn8",
// 	"message": "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
// 	"img": "https://robohash.org/utbeataequi.png?size=50x50&set=set1",
// 	"tags": [
// 		3,
// 		2
// 	]
// }, {
// 	"id": 10,
// 	"username": "mwhitlaw9",
// 	"message": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
// 	"img": "https://robohash.org/nobissintcorporis.png?size=50x50&set=set1",
// 	"tags": [
// 		2,
// 		3
// 	]
// }
]

/** [ACTION] Get MessageTag Property */
const getMessageProperty = (type) => {
	let result = tags.find(tag => tag.type === type);

	/** Default option */
	return (result) ? result : tags.find(tag => tag.type === 3);
}

/** [React Component] */
const MessageTag = ({ bgColor, textColor, title }) => {
	return <label className={`text-xs rounded-xl px-2 py-1 font-semibold ${bgColor} ${textColor}`}>{title}</label>
}

/** [React Component] Header */
const Header = ({ Unread }) => {
	return <>
		<header className="flex flex-row justify-between p-6 border-b">
			<div className="flex flex-row gap-2.5 items-center">
				<h1 className="text-xl font-semibold">Messages</h1>
				<img className='h-1 w-2.5 cursor-pointer' src={Vector} alt="" />
				<div className="flex rounded-3xl bg-gray-200 px-2 items-center font-semibold">{Unread || 0}</div>
			</div>
			<svg className="fill-primary hover:fill-blue-400 transition-all duration-300 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
				<path d="M20 3.33334C10.8167 3.33334 3.33334 10.8167 3.33334 20C3.33334 29.1833 10.8167 36.6667 20 36.6667C29.1833 36.6667 36.6667 29.1833 36.6667 20C36.6667 10.8167 29.1833 3.33334 20 3.33334ZM26.6667 21.25H21.25V26.6667C21.25 27.35 20.6833 27.9167 20 27.9167C19.3167 27.9167 18.75 27.35 18.75 26.6667V21.25H13.3333C12.65 21.25 12.0833 20.6833 12.0833 20C12.0833 19.3167 12.65 18.75 13.3333 18.75H18.75V13.3333C18.75 12.65 19.3167 12.0833 20 12.0833C20.6833 12.0833 21.25 12.65 21.25 13.3333V18.75H26.6667C27.35 18.75 27.9167 19.3167 27.9167 20C27.9167 20.6833 27.35 21.25 26.6667 21.25Z" />
			</svg>
		</header>
	</>
}

/** [React Component] Article */
const UserArticle = ({ user, isActived }) => {
	return <>
		<article className={`flex flex-row p-3 gap-4 cursor-pointer rounded-xl ${isActived && 'bg-[#615EF00F]'}`}>
			<Avatar img={user.img} />
			<section className="flex flex-col w-3/4">
				<h1 className="text-sm font-semibold">{user.username}</h1>
				<p className="text-xs text-gray-400 font-semibold mb-2 overflow-hidden whitespace-nowrap text-ellipsis">{user.message}</p>
				<div className="flex flex-row w-full gap-2">
					{
						(user.tags.length !== 0) ?
							user.tags.map(type => {
								let tagProp = getMessageProperty(type);
								return <MessageTag bgColor={tagProp.bgColor} textColor={tagProp.textColor} title={tagProp.title} />
							})
							: null
					}
				</div>
			</section>
		</article>
	</>
}

/** [React Component] */
function Contact() {
	return (
		<>
			<section className="flex flex-col h-screen w-[349px] border-r">
				{/** Header */}
				<Header Unread={12} />

				{/** Search Input */}
				<section className="flex w-full px-6 py-3">
					<input className="rounded-xl px-5 py-2.5 bg-[#F3F3F3] w-full outline-none" type="text" name="" id="" placeholder='Search messages' />
				</section>

				{/** Articel List */}
				<section className="flex flex-col flex-1 overflow-auto px-4">
					{
						(userList.length !== 0) ?
							userList.map(user => (user.id === 2)
								? <UserArticle user={user} isActived={true} />
								: <UserArticle user={user} isActived={false} />
							) : null
					}
				</section>

			</section>
		</>
	)
}

export default Contact