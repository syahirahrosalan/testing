'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox';


ReactDOM.render( <
  CommentBox url = 'http://localhost:3001/api/comments'
  pollInterval = {
    60000
  }
  />,
  document.getElementById('root')
);
