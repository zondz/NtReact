import './contentcontainer.css'
function ContentContainer({children}){
    return(
        <div className="container-patch">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ContentContainer;