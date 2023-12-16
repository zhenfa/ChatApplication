import Default from '../../asset/profile.png'

const Avatar = ({img}) => {
  return <img className='rounded-lg h-12 w-12' src={img ? img : Default} alt="user-avatart" />
}

export default Avatar