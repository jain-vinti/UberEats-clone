import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from '@material-ui/core';

import Post from "./Post/Post";

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);

    //console.log(posts);
    return (
        !posts.length ? <CircularProgress></CircularProgress> : (
            <Grid container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId}></Post>
                    </Grid>
                ))}
            </Grid>
        )
    );
};

export default Posts;