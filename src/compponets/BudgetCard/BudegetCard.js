import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import './BudgetCard.css'

import { useHistory, useLocation } from 'react-router-dom';
import { GrDiamond } from 'react-icons/gr';
import { Link ,Button } from '@material-ui/core';
// import { Button } from 'bootstrap';

const LogIn = () => {

 
  return (
    <div className='Card-style'>
      
      <Card className="card-style" >

        <div className="my-5 d-flex diamond">
        💎 Upgrade once, use lifetime 💎
          {/* <button className="google-button my-3" >Continue with Google</button> */}
          {/* <p>Don't have account?<span className="commonColor">Create a account</span></p> */}
          <p className='upgrade'>Upgrading to PREMIUM helps you eliminate any barriers and difficulties in managing your cash flow, monthly budget, or future goals. Just one payment and it's yours. 🙌 </p>
           
          <Button style={{color:'gray'}}><h5>Close</h5></Button>
          <Button style={{color:'black'}}><h4>GO PREMIUM</h4></Button>
         
          
        </div>
      </Card>
    </div>
  );
};

export default LogIn;