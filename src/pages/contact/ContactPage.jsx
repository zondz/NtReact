import { useState } from "react";
import ContentContainer from "../../components/content-container/ContentContainer";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import PageHeading from "../../components/header/heading/PageHeading";
import Navbar from "../../components/navbar/Navbar";
import BackgroundImage from '../../resources/images/bg-contact.jpeg'
import './contactpage.css'
function ContactPage(){

    const [floatingLabelWithFocusClass,setFormClass] = useState({
        name : false,
        email :false,
        phoneNumber:false,
        message:false,

    })

    const [formValue,setFormValue]=useState({
        name : '',
        email : '',
        phoneNumber:'',
        message:''
    })

    const handleClick =(event)=>{
        

        setFormClass({
            ...floatingLabelWithFocusClass,
            [event.target.name]:true
        })
    }
    const handleBlur=(event)=>{
        
        setFormClass({
            ...floatingLabelWithFocusClass,
            [event.target.name] : false
        })

    }

    const handleChange=(event)=>{
        
        setFormValue({
            ...formValue,
            [event.target.name]:event.target.value

        })
    }


    return (
        <>
        <Navbar/>
        {/* <Header className='header-bg' backgroundImage={BackgroundImage} heading="Contact Me" subHeading="Have questions? I have answers."/> */}

        <Header className='header-bg' backgroundImage={BackgroundImage} >
            <PageHeading heading="Contact Me" subHeading="Have questions? I have answers." />
        </Header>
        <ContentContainer>
        <p className="description">
        Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!
        </p>
        <form>
            <div className="control-group">
                <div  className={`form-group floating-label-form-group controls ${floatingLabelWithFocusClass.name&& "floating-label-form-group-with-focus"} ${formValue.name.length!==0&& "floating-label-form-group-with-value"} `}>
                    <label>name</label>
                    <input onClick={handleClick} onBlur={handleBlur} onChange={handleChange} type="text" className="form-control" placeholder="name" name="name" id="name" required data-validation-required-message="please enter your name"></input>
                    <p className="help-block text-danger"></p>
                </div>
            </div>
            <div className="control-group">
                <div  className={`form-group floating-label-form-group controls ${floatingLabelWithFocusClass.email&& "floating-label-form-group-with-focus"} ${formValue.email.length!==0&& "floating-label-form-group-with-value"} `}>
                    <label>Email</label>
                    <input  onClick={handleClick} onBlur={handleBlur} onChange={handleChange} type="email" className="form-control" placeholder="Email Address" name="email" id="email" required data-validation-required-message="please enter your email"></input>
                    <p className="help-block text-danger"></p>
                </div>
            </div>
            <div className="control-group">
                <div  className={`form-group floating-label-form-group controls ${floatingLabelWithFocusClass.phoneNumber&& "floating-label-form-group-with-focus"} ${formValue.phoneNumber.length!==0&& "floating-label-form-group-with-value"} `}>
                    <label>Phone number</label>
                    <input onClick={handleClick} onBlur={handleBlur} onChange={handleChange} type="text" pattern="[0-9]*" className="form-control" placeholder="Phone number" name="phoneNumber" id="phoneNumber" required data-validation-required-message="please enter your phone number"></input>
                    <p className="help-block text-danger"></p>
                </div>
            </div>
            <div className="control-group">
                <div  className={`form-group floating-label-form-group controls ${floatingLabelWithFocusClass.message&& "floating-label-form-group-with-focus"} ${formValue.message.length!==0&& "floating-label-form-group-with-value"} `}>
                    <label>Message</label>
                    <textarea rows={5} onClick={handleClick} onBlur={handleBlur} onChange={handleChange} type="text" className="form-control" placeholder="Message" name="message" id="message" required data-validation-required-message="please enter your message"></textarea>
                    <p className="help-block text-danger"></p>
                </div>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary rounded-0 submit-btn" id="sendMessageButton">Send</button>
            </div> 
        </form>
        </ContentContainer>
        <hr></hr>
        <Footer/>
        </>
    )
}
export default ContactPage;