import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="bg-gray-400 ">
      <div className="flex justify-between items-center max-w-2xl mx-auto p-2">
        <Link to='/'>
        <h1 className="font-bold">Manager</h1>
        </Link>
        <ul className="flex gap-5">
            <Link to='/'>
            <li>Home</li>
            </Link>
            <Link to='about'>
            <li>About</li>
            </Link>
            <Link to='sign-in'>
            <li>Sign In</li>
            </Link>
        </ul>
      </div>
    </div>
  )
}

export default Header
