import Footer from "../../components/footer/Footer.jsx";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Post from "../../components/post/Post.jsx";
import BackgroundImage from '../../resources/images/bg-index.jpeg';
import 'antd/dist/antd.min.css'
import './homepage.css';
import { Link } from "react-router-dom";
import { useState } from "react";
function HomePage(){

    return (
        <>
        <Navbar></Navbar>
        <Header backgroundImage={BackgroundImage}></Header>
        <div className="container-patch">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <Post url={"url1"} title="title1" description="description 1" author="authorA" date="10/10/2022"></Post>
                    <div className="btn-right-container">
                    <Link className="btn btn-primary view-all-post" to="/posts">View All Posts → </Link>
                    </div>

                </div>

            </div>

        </div>
        <Footer></Footer>

        </>
    )
}

export default HomePage;