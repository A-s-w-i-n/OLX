import React, { Fragment } from 'react';
import Header from   '../components/Header/Header'
import Create from '../components/Create/Create';

const CreatePage: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <Create />
    </Fragment>
  );
};

export default CreatePage;
