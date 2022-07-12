import './header.css';

function Header(props){
    
    return (
    <>
    {/*
    ,background:`no-repeat center center linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)),url(${props.backgroundImage})`}*/}
    <div 
    style={{height:'500px',
    backgroundImage:`url(${props.backgroundImage})`,
    backgroundSize:"cover",
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      marginBottom:"50px",
     

      }} 
      className='header-bg'>
        <div className='container'>
        <div className='row'>
            <div  className='col-lg-8 col-md-10 mx-auto'>
                {props.children}
            </div>
        </div>
        </div>
    </div>
    </>
    )
}

export default Header;