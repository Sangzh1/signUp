import React from 'react';
import { TextField } from "@mui/material";

import {wrapper,title,section} from './style.module.css';

function Auth() {
          const [value, setValue] = useState(0);
        
          const handleChange = (event, newValue) => {
            setValue(newValue);
          }};
     return(
          <section className='section'>
<Tabs
 value={value}
  onChange={handleChange}
   aria-label="disabled tabs example">
  <Tab label="LogIn" />
  <Tab label="SignUp" />
</Tabs>

{value=== 0 ?(
<Login/>
):(

<div className={SignUp}>
<form>
<h2 className={title}>SignUp</h2>
               <TextField 
               id="outlined-basic" 
               label="Name"
               type="text"
               variant="outlined" />
               <TextField 
               type='text'
               id="outlined-basic"
                label="Phone" 
                variant="outlined" />
                 <TextField 
               id="outlined-basic" 
               label="Username"
               type="text"
               variant="outlined" />
                <TextField 
               id="outlined-basic" 
               label="Password"
               type="text"
               variant="outlined" />
                <Button variant="contained">Sumbit....</Button>
        </form>
     </div> )
          </section>
     );


