import {Link} from 'react-router-dom'

const Nav = ()=> {
  return (

    <div className ="row navbar navbar-expand-lg navbar-light bg-light justify-content-center">
      <ul className ="navbar-nav m-auto mb-2 mb-lg-8 justify-content-center col-8 g-4">
        <li className ="nav-item me-4">
          <Link to='/' >Home</Link>
        </li>
        <li className ="nav-item">
          <Link to='/Groups' >Groups</Link>
        </li>
      </ul>
    </div>
    
  )
}

export default Nav