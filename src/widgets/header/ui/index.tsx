import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <div>
      header
      <ul>
        <li>
          <Link to={'/'}>Home page</Link>
        </li>
        <li>
          <Link to={'/profile'}>Profile page</Link>
        </li>
      </ul>
    </div>
  )
}
