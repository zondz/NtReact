import './header.css';

function Header(props){
    return (
    <>
    <div style={{height:'500px',backgroundImage:`url(${props.backgroundImage})`,backgroundSize:"cover",marginBottom:"50px"}}>
        <div className='container'>
        <div className='row'>
            <div className='col-lg-8 col-md-10 mx-auto'>
                <div className='page-heading'>
                    <h1 className='author'>Ocean Nguyen</h1>
                    <span className='subheading'>Engineer/Video creator</span>
                </div>
            </div>
        </div>
        </div>
    </div>
    </>
    )
}

export default Header;