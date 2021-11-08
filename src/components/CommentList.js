import * as React from "react";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CommentIcon from "@material-ui/icons/Comment";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

export default function CommentList(props) {
  const comments = props.comments;

  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {comments.map((comment) => {
          return (
            <>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="usuario" src={comment.user.avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={comment.user.name}
                  secondary={
                    <>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {comment.content}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          );
        })}
      </List>

      <CardContent>
        <IconButton disableSpacing aria-label="comment">
          <CommentIcon />
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "30ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                id="outlined-textarea"
                label="Comente"
                placeholder="Digite seu comentário..."
                multiline
              />
            </div>
          </Box>
        </IconButton>
      </CardContent>
    </>
  );
}
