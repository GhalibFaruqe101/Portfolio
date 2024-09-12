import './nav.css';

// import React from 'react';

// function Header(){


//     return(


// <nav>
//   <ul>
//     <li><a href='#home'>Home</a></li>
//     <li><a href='#work'>Work</a></li>
//     <li><a href="#review">Review</a></li>
//   </ul>
// </nav>


// );
   
// }

// export default Header

// portfolio/src/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/work">About</Link>
        </li>
        <li>
          <Link to="/work">Review</Link>
        </li>
       
      </ul>
    </nav>
  );
}

export default Header;