import React from 'react'
import Logo from '../asset/Logo.png';
import MessageIcon from '../asset/message.png';
import HomeIcon from '../asset/home.png';
import SteamIcon from '../asset/stream.png';
import SearchIcon from '../asset/search.png';
import DateIcon from '../asset/date.png';

/**  */
const NavItem = ({item}) => {
	return <>
		<img className='cursor-pointer' src={item.img} alt="" />
	</>
}

let object = [
	{
		id:1,
		img:HomeIcon
	},
	{
		id:2,
		img:MessageIcon
	},
	{
		id:3,
		img:SteamIcon
	},
	{
		id:4,
		img:SearchIcon
	},
	{
		id:5,
		img:DateIcon
	}
]

function Navbar() {
	return (
		<>
			<nav className="flex flex-col px-4 pt-4 pb-6 items-center bg-white h-screen shadow-md gap-12">
				<img src={Logo} alt="" />
				{
					object.map(img => <NavItem key={img.id} item={img} />)
				}
			</nav>
		</>
	)
}

export default Navbar