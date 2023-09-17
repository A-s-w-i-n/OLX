import React from 'react';
import Header from '../components/Header/Header';
import View from  '../components/View/View'

interface ViewPostProps {
  // Define the type for the props if needed
  // Example: title: string;
}

function ViewPost(props: ViewPostProps): JSX.Element {
  return (
    <div>
      <Header />
      <View />
    </div>
  );
}

export default ViewPost;
