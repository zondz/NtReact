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
function PostPage(){
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        getListPostService().then(response=>{
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

        </ContentContainer>
        <hr></hr>
        <Footer></Footer>

        
        
        </>
    )
}
export default PostPage