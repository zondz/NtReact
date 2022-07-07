import { Link, NavLink } from 'react-router-dom';
import './post.css';

function Post(props){

    return (
        
        <article className="post-review">
            {/* <NavLink  style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
                
              };
            }} className='post-link' to={props.url}>
                <h2 className="post-title">
                    {props.title}
                </h2>
                <h3 className="post-subtitle">
                    {props.description}
                </h3>
            </NavLink> */}
          <NavLink to="/example" className="nav_link">
                 <p className="post-title">
                    {props.title}
                </p>
                <p className="post-subtitle">
                    {props.description}
                </p>

         </NavLink>

            
            <p className="post-meta">
              Posted by {props.author} on {props.date} · 8 mins read
            </p>

        </article>
         
    )
}
export default Post;