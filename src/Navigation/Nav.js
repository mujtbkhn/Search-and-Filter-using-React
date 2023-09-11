import { FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';

import "./Nav.css";

function Nav({ handleInputChange, query }) {
  return (
    <nav>
      <div className="nav-container">
        <div className="flex-container">
          <input
            type="text"
            className="search-input"
            onChange={handleInputChange}
            value={query}
            placeholder="Enter your search shoes."
          />
          <div className="centered-content">
            <h1>GeekyNess</h1>
          </div>
        </div>
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>

    </nav>
  )
}

export default Nav;