import { useState,useEffect } from "react"
import  './navbar.css';
import { Link, Outlet, NavLink, useSearchParams } from 'react-router-dom';

function Navbar(){
    const [showNavbar,setShowNavbar] = useState(true);
    const [lastScrollY,setLastScrollY]=useState(0)
    const controlNavbar = () => {
        if (typeof window !== 'undefined') { 
          if (window.scrollY > lastScrollY) {
              // if scroll down hide the navbar
              setShowNavbar(false); 

          }
        
          else { // if scroll up show the navbar
         
            setShowNavbar(true);  
          }
    
          // remember current page location to use in the next move
          setLastScrollY(window.scrollY); 
        }
      };
      useEffect(() => {
        if (typeof window !== 'undefined') {
          window.addEventListener('scroll', controlNavbar);
    
          // cleanup function
          return () => {
            window.removeEventListener('scroll', controlNavbar);
          };
        }
      }, [lastScrollY]);

    return (
        <>
        {/* navbar-expand-lg */}
<nav  className={`navbar active  navbar-expand-lg ${showNavbar&&window.scrollY!==0 && 'scroll-up'} ${!showNavbar && 'hidden'} `}>
 <div className="container" style={{marginLeft:"134px",marginRight:"134px",paddingLeft:"15px",paddingRight:"15px"}}>
   <Link className="navbar-brand" to="/">
       <img style={{width:"150px"}} src={require('../../resources/images/ocean_logo.png')}></img>
   </Link>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
      <span className="navbar-toggler-icon"></span>
   </button>
  <div className="collapse navbar-collapse" id="main_nav">
	<ul className="navbar-nav ms-auto" >
	<li className="nav-item"><Link className="nav-link" to={"/"}>Home</Link></li>
	<li className="nav-item"><Link className="nav-link" to={"/about"}>About</Link></li>
	<li className="nav-item"><Link className="nav-link" to={"/posts"}>Posts</Link></li>
    <li className="nav-item"><Link className="nav-link" to={"/contact"}>Contact</Link></li>

	</ul>
  </div> 
 </div> 
</nav>

</>
    )
}
export default Navbar