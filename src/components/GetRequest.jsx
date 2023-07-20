import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const GetRequest = () => {
        const [posts, setPosts] = useState([]);

        useEffect(() => {
            // Function to fetch data from the API
            const fetchPosts = async () => {
              try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setPosts(response.data);
              } catch (error) {
                console.error('Error fetching data:', error);
              }
            };
        
            fetchPosts();
          }, []);

  return (
    <div>
        <h1>Post List</h1>
        <ul>
            {posts.map((post) => (
            <li key={post.id}>
                <strong>{post.title}</strong>
                <p>{post.body}</p>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default GetRequest