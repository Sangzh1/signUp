import React from 'react';
import { Button,TextField } from "@mui/material";

function Login({styles:{wrapper,title}}) {
     return(
      < div className = {wrapper} >  
                
<form>
<h2 className={title}>Login</h2>
               <TextField 
               id="outlined-basic" 
               label="Username"
               type="text"
               variant="outlined" />
               <TextField 
               type='text'
               id="outlined-basic"
                label="Password" 
                variant="outlined" />
                <Button variant="contained">Sumbit....</Button>

        </form>
     </div> 
     )
}

