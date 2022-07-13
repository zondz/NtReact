import { useEffect, useState } from "react"
import ContentContainer from "../../components/content-container/ContentContainer"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import Post from "../../components/post/Post"
import BackgroundImage from '../../resources/images/bg-post.jpeg'
import { getListPostService } from "../../service"
import { formatDateString } from "../../utils/formatDateString"
import PageHeading from '../../components/header/heading/PageHeading'
import { Link } from "react-router-dom"
function PostPage(){
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        getListPostService().then(response=>{
            console.log("test date : ",response.data)
            setPosts(response.data);
        })
    },[])

    return (
        <>
        <Navbar/>
        <Header backgroundImage={BackgroundImage} >
            <PageHeading heading="Posts"/>
        </Header>
        <ContentContainer>
            {posts.map(element=>{
                return (
                    <div key={element.id}>
                        <Post 
                        postId={element.id}
                        url={`/posts/${element.id}`}
                         title={element.title} 
                         description={element.description}
                          author={element.author.username} 
                          date={formatDateString(element.createdAt)}>

                          </Post>
                          <hr></hr>
                    </div>
                )
            })}

        <Link hidden={posts.length===0} className="btn btn-primary" to={"/posts/create"}>Add post</Link>


        </ContentContainer>
        <hr></hr>
        <Footer></Footer>

        
        
        </>
    )
}
export default PostPage