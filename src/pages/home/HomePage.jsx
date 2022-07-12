import Footer from "../../components/footer/Footer.jsx";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Post from "../../components/post/Post.jsx";
import BackgroundImage from '../../resources/images/bg-index.jpeg';
import 'antd/dist/antd.min.css'
import './homepage.css';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {getListPostService,get2Samples} from '../../service'
import { formatDateString } from "../../utils/formatDateString.js";
import ContentContainer from "../../components/content-container/ContentContainer.js";
import PageHeading from "../../components/header/heading/PageHeading.jsx";
const axios = require('axios').default;

function HomePage(){
    
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        
        get2Samples().then((response)=>{
            setPosts(response.data)
        });
    },[])
    return (
        <>
        <Navbar></Navbar>
        <Header backgroundImage={BackgroundImage} >
            <PageHeading heading="Ocean Nguyen" subHeading ="Engineer/Video Creator" />
        </Header>
        <ContentContainer>
        {
                        posts.map(x=>{
                            return (
                              <div key={x.id}>
                            <Post postId={x.id}  url={`/posts/${x.id}`} title={x.title} description={x.description} author={x.author.username} date={formatDateString(x.createdAt)}>

                            </Post>
                            <hr></hr>
                            </div>
                            )

                        })
                    }
                    <div className="btn-right-container">
                    <Link className="btn btn-primary view-all-post" to="/posts">View All Posts → </Link>
                    </div>


        </ContentContainer>
       
        <hr></hr>
        <Footer></Footer>

        </>
    )
}

export default HomePage;