import React from 'react';
import { Link } from "react-router-dom"

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const NoticeWrite = ({clickHandler}) => {

  return (
    <div>
      <h2>공지사항 작성</h2>
      <CssBaseline />
      <Container maxWidth="sm">
      <Typography component="div" style={{ backgroundColor: '#cfe8fc' }}>
        <form>
          <TextField
            required
            id="outlined-required"
            label="제목"
            variant="outlined"
            fullWidth={true}
          />
          <TextField
            required
            id="outlined-multiline-static"
            label="내용"
            multiline
            rows={4}
            variant="outlined" 
            fullWidth={true}
          />
          <Button variant="contained" color="primary" onClick={clickHandler}>
            완료
          </Button>
          <Link to="/notice">
            <Button variant="contained" color="secondary">
              취소
            </Button>
          </Link>
        </form>
        </Typography>
      </Container>
    </div>
  );
};

export default NoticeWrite;