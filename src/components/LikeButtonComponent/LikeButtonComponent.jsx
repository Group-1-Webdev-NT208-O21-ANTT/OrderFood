
import React from 'react';
import { FacebookProvider, Like } from 'react-facebook';

function LikeButtonComponent() {
  
  return (
    
    <FacebookProvider appId="1593441351450430">
      <Like href="https://developers.facebook.com/docs/plugins/" colorScheme="dark" showFaces="true" share="true" />
    </FacebookProvider>
  );
}

export default LikeButtonComponent;
