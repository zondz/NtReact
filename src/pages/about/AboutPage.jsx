import ContentContainer from "../../components/content-container/ContentContainer"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import PageHeading from "../../components/header/heading/PageHeading"
import Navbar from "../../components/navbar/Navbar"
import BackgroundImage from '../../resources/images/bg-about.jpeg'
import  './aboutpage.css';

function AboutPage(){
    return (
        <>
        <Navbar></Navbar>
        <Header backgroundImage={BackgroundImage} >
            <PageHeading heading="About me" subHeading="This is what I do."/>
        </Header>
        <ContentContainer>
            <p className="about-me">Hello friends! I am Ocean Nguyen. Currently, I'm working at an untitled large tech company as software engineer. I love solving problems and developing myself that broaden my horizon about thousands of thing around the world.</p>
        <p className="about-me">This blog tries to intersect not only Day in a life of me as a software engineer but also Entertainment and Media.</p>
       <p className="mb-5 about-me">Hopefully, it would be good for you. Feel free to give me feedback.</p>
        </ContentContainer>
        <hr></hr>
        <Footer></Footer>
        </>
    )
}

export default AboutPage