

function PageHeading(props){

    

    return(
        <div className='page-heading' style={{color:"white"}}>
        <h1 className='author'>{props.heading}</h1>
        <span className='subheading'>{props.subHeading}</span>

         </div>
    )


}

export default PageHeading;