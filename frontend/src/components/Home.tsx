import React, { useEffect, useState } from 'react';
import { getVideos } from '../services/videoService';
import './Home.css';

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await getVideos();
      setVideos(res.data);
    };

    fetchVideos();
  }, []);

  return (
    <div className="home-container">
      <header className="header">
        <h1>LearningVerse</h1>
        <p>Your one-stop destination for video content!</p>
      </header>

      <div className="video-list">
        {videos.map((video: any) => (
          <div key={video._id} className="video-item">
            <img src={video.thumbnail} alt="Video Thumbnail" className="thumbnail" />
            <a href={video.link} target="_blank" rel="noopener noreferrer" className="link-button">
              Watch Video
            </a>
          </div>
        ))}
      </div>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Tum Btao. All rights reserved.</p>
        <p>Made by Abhishek Srivastav</p>
        <p>Email: <a href="mailto:sriabhishek24@gmail.com">sriabhishek24@gmail.com</a></p>
        <p>Phone: 7310715243</p>
        <p>
          <a href="https://www.linkedin.com/in/abhishek-srivastav-01998b17a/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
