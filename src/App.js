import React from 'react';
import { Button } from 'semantic-ui-react';
import {getAuth} from "firebase/auth"

const App = () => {

  console.log(getAuth());
  return (
    <div>
      
      <Button primary>Primary</Button>
      
    </div>
  );
};

export default App;