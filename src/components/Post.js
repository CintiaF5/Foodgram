import * as React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CommentIcon from "@material-ui/icons/Comment";
import CommentList from "./CommentList";

export default function Post(props) {
  const post = props.post;

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[510] }}
            aria-label="recipe"
            src={post.user.avatar}
          ></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.user.name}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={post.content_image}
        alt="Propaganda"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.content}
        </Typography>
      </CardContent>
      <CardContent>
        <CardActions disableSpacing aria-label="likes">
          <IconButton aria-label="add to favorites" className="icons">
            {post.likes}
            <FavoriteIcon />
          </IconButton>
          <IconButton disableSpacing aria-label="share" className="icons">
            {post.shares}
            <ShareIcon />
          </IconButton>
          <IconButton disableSpacing aria-label="comment" className="icons">
            {post.total_comments}
            <CommentIcon />
          </IconButton>
        </CardActions>
      </CardContent>
      <CommentList comments={post.comments}></CommentList>
    </Card>
  );
}
