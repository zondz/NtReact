import { Link, NavLink } from 'react-router-dom';
import './post.css';

function Post(props){

    return (
        
        <article className="post-review">
       
          <NavLink state={{
            //   id:props.postId,
              title:props.title,
              description:props.description,
              author:props.author,
              date:props.date

          }} to={props.url} className="nav_link">
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