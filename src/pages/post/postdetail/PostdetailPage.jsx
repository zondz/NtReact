import Header from "../../../components/header/Header";
import Navbar from "../../../components/navbar/Navbar";
import BackgroundImage from '../../../resources/images/detail-bg.png'
import PostHeading from '../../../components/header/heading/PostHeading'
import './postdetail.css'
import { Link, NavLink, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import ContentContainer from "../../../components/content-container/ContentContainer";
import { useEffect, useState } from "react";
import { getPostDetail,getListPostService } from "../../../service";
import {Interweave } from 'interweave'
import { formatDateString } from "../../../utils/formatDateString";
import Footer from "../../../components/footer/Footer";
function PostdetailPage(){
    let location = useLocation();
    const params = useParams();
    let navigate = useNavigate();

    const [post,setPost]=useState({
        id:-1,
        title:"",
        description:"",
        author:{
            username:""
        },
        createdAt:""
    })
    
    const [posts,setPosts]=useState([]);

    const currentIndex = posts.findIndex(x=>x.id===post.id);
    

    useEffect(()=>{
        console.log("use effect called")
        
        getPostDetail(params.postId).then(response=>{
            // console.log("response data : ",response.data)

            setPost(response.data)
        })

        getListPostService().then(response=>{
            // console.log("post list : ",response.data)
            
            setPosts(response.data);
        })


        


    },[location])

    console.log("component render")

    // DOING
    // useEffect(()=>{
    //     console.log("params id : ",params.postId);
    // },[location])


    // console.log("post  : ",post)
    // console.log("post list : ",posts);
    // console.log("current index : ",currentIndex)

    const buttonClass =(currentIndex,postsLength)=>{
            if(currentIndex===-1||postsLength===0){
                return "";
            }

            if(currentIndex>0&&currentIndex<postsLength-1){
                return "btn-container"
            }else if(currentIndex===0){
                return "btn-right-container"
            }
            else if(currentIndex===postsLength-1){
                return "btn-left-container"
            }
           
    }

    const displayButtonClass = buttonClass(currentIndex,posts.length);


    const handleNext=()=>{
        console.log("user click button")
        navigate(`/posts/${posts[currentIndex+1].id}`);
        // setPosts(posts[currentIndex+1]);
    }

    const handlePrev=()=>{
        navigate(`/posts/${posts[currentIndex-1].id}`);

    }

    return (
        <>
        <Navbar></Navbar>
        <Header backgroundImage={BackgroundImage}>
            <PostHeading title={post.title} description={post.description} author={post.author.username} createdAt={formatDateString(post.createdAt)}/>
        </Header>
        <ContentContainer>
            {/* {content} */}
            <Interweave content={post.content}></Interweave>
            {/* based on current index*/ }
      <div className={displayButtonClass}>
          <button hidden={displayButtonClass==='btn-right-container'} className="btn btn-primary navigate-btn" onClick={handlePrev}>
          Previos Post
          </button>
          <button hidden={displayButtonClass==='btn-left-container'} className="btn btn-primary navigate-btn" onClick={handleNext} >
          Next Post →   
           </button>
        {/* <Link className="btn btn-primary navigate-btn"
        to={posts.length!==0`/posts/${posts[currentIndex-1].id}:''`}
        >
        </Link>  */}

        {/* <Link className="btn btn-primary navigate-btn" 
        to={`/posts/${posts[currentIndex+1].id}`}
        >
        </Link> */}
      </div>
      
    

         {/* { currentIndex<posts.length-1 && <NavLink 
        to={`/posts/${currentIndex-1}`}
        >Next Post  →</NavLink>} */}
        
        </ContentContainer>
        <hr></hr>
        <Footer/>
        </>
    )
}

export default PostdetailPage;