
function PostHeading(props){
    return (
        <>
        <div className="post-heading">
            <h1 style={{color:'white'}} className="title">{props.title}</h1>
            <h2 style={{color:'white'}} className="description">{props.description}</h2>
            <span className="meta">Posted by {props.author} on {props.createdAt} · 8 mins read</span>

        </div>
        </>
    )
}

export default PostHeading;