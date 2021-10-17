import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumsUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deletePost, likePost } from '../../../actions/posts';


const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();

    return (
        <Card>
            {post.selectedFile ? <CardMedia size="medium" image={post.selectedFile} title={post.title}></CardMedia> : <div> {post.title} </div>}
            <div>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div>
                <Button size="small" onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize="medium"></MoreHorizIcon>
                </Button>
            </div>
            <div>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={ () => dispatch(likePost(post._id)) }>
                    <ThumsUpAltIcon fontSize="small"></ThumsUpAltIcon>
                    Like &nbsp;
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small"></DeleteIcon>
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
};

export default Post;