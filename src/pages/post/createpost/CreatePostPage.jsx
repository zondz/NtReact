import { Instant } from "@js-joda/core";
import { useState } from "react";
import ContentContainer from "../../../components/content-container/ContentContainer";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import PageHeading from "../../../components/header/heading/PageHeading";
import Navbar from "../../../components/navbar/Navbar";
import BackgroundImage from "../../../resources/images/bg-post.jpeg"
import { createtNewPost } from "../../../service";

let LocalDateTime = require('@js-joda/core').LocalDateTime
function CreatePostPage(){

    const [formState,setFormState] = useState({
        authorUsername : 'author',
        title : '',
        description : '',
        content:''
    })

    const handleSubmit=(event)=>{
        event.preventDefault();
        const submitValue = {
            ...formState,
            createdAt: LocalDateTime.ofInstant(Instant.now()).toString()
        }
        createtNewPost(submitValue).then(response=>{
            console.log("create response : ",response);
        })
    }

    const handleChange=(event)=>{

        setFormState({
            ...formState,
            [event.target.name]:event.target.value
        })

    }

    return (<>

        <Navbar/>
        <Header backgroundImage={BackgroundImage}>
            <PageHeading heading="Create Post"/>
        </Header>
        <ContentContainer>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
         <label htmlFor="author" className="form-label">Author</label>
         <input disabled onChange={handleChange} name="authorUsername" className="form-control" id="author" value={formState.authorUsername}/>
        </div>
        <div className="mb-3">
         <label htmlFor="title" className="form-label">Title</label>
         <input  onChange={handleChange} name="title"  className="form-control" id="title" value={formState.title} />
        </div>
        <div className="mb-3">
         <label htmlFor="description" className="form-label">Description</label>
         <input  onChange={handleChange} name="description"  className="form-control" id="description" value={formState.description} />
        </div>
        <div className="mb-3">
         <label htmlFor="content" className="form-label" >Content</label>
         <textarea  onChange={handleChange} name="content" className="form-control" id="content"  value={formState.content}/>
        </div>

        <input className="btn btn-primary" type="submit" value="Submit" />

        
        

        </form>

        </ContentContainer>
        <hr></hr>
        <Footer/>
        
    </>)
}

export default CreatePostPage;