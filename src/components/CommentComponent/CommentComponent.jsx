// CommentPluginComponent.jsx

import React from 'react';
import { FacebookProvider, Comments } from 'react-facebook';

function CommentComponent() {
  

  return (
    <FacebookProvider appId="1593441351450430">
      <Comments href="https://developers.facebook.com/docs/plugins/" numPosts={5} />
    </FacebookProvider>
  );
}

export default CommentComponent;
