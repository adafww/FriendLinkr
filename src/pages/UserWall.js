import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserWall = ({ userId }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`/api/v1/users/${userId}/wall`);
                setPosts(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPosts();
    }, [userId]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Стена пользователя</h1>
                    <ul>
                        {posts.map((post) => (
                            <li key={post.id}>
                                <Link to={`/post/${post.id}`}>{post.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserWall;