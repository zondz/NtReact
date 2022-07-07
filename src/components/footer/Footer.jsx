import './footer.css';
import { FaHeart, FaRegHeart,BsFacebook,FaFacebook } from 'react-icons/fa';
import GitIcon from '../../resources/icons/github-icon.png'
import FbIcon from '../../resources/icons/fb-icon.png'
import Insta from '../../resources/icons/insta-icon.png'

function Footer(){
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 col-md-10 mx-auto'>
                        <ul className='list-inline text-center'>
                            <li className='list-inline-item'>
                                <a href='facebook.com'>
                                <img style={{width:'50px',height:'50px',paddingLeft:'0px',paddingRight:'0px',marginRight:'30px'}} src={FbIcon} alt="" />

                                </a>
                            </li>
                            <li className='list-inline-item'>
                                <a>
                                <img style={{width:'50px',height:'50px',paddingLeft:'0px',paddingRight:'0px'}} src={Insta} alt="" />

                                </a>
                            </li>
                            <li className='list-inline-item'>
                                <a>
                                <img style={{width:'50px',height:'50px',paddingLeft:'0px',paddingRight:'0px',marginLeft:'30px'}} src={GitIcon} alt="" />

                                </a>
                            </li>
                        </ul>
                        <p className='copyright text-muted'>Copyright © Ocean Nguyen 2019</p>
                    </div>
                   

                  </div>
            </div>

        </footer>

    )
}

export default Footer;