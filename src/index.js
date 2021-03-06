import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import PostPage from './pages/post/PostPage';
import ContactPage from './pages/contact/ContactPage';
import PostdetailPage from './pages/post/postdetail/PostdetailPage';
import CreatePostPage from './pages/post/createpost/CreatePostPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  
    <Routes>
      <Route path="/" element={<App/>}>
        <Route index element={<HomePage/>}/>
        <Route path="about" element={<AboutPage/>}/>
        <Route path="posts" element={<PostPage/>}/>
        <Route path="contact" element={<ContactPage/>}/>
        <Route path="posts/:postId" element={<PostdetailPage/>}/>
        <Route path="posts/create" element={<CreatePostPage/>}></Route>
        {/* <Route path="posts/:postId" component={(props)=>{<PostdetailPage {...props} key={window.location.pathname}/>}}/> */}

        <Route path="*" element={ <main style={{ padding: '1rem' }}>
            <p>There's nothing here!</p>
          </main>}></Route>

      </Route>
    </Routes>
  </BrowserRouter>
);


