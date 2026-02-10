import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { Box, Container } from '@mui/system'
import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"

import * as yup from "yup"
import { registerSchema } from '../../validation/Registervalid'

function Register() {


  
  const{register,handleSubmit, formState: { errors },}=useForm({
        resolver: yupResolver(registerSchema),

  });



  const registerhandle = async (valuse)=>{
    try{
      console.log(valuse)
   const responce = await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/Register',valuse);
   console.log(responce);
}catch(error){
console.log(error);
}finally{

}
  }
  return (
    <div>
      
       <Container>
         <Box Container maxWidth="sm" sx={{padding:"30px"}}>
      <Typography component={'h1'} variant='h2' >Register Page :</Typography>
     </Box>

       <Box component={'form'} onSubmit={handleSubmit(registerhandle)} sx={{padding:"30px", display:"flex", flexDirection:"column", gap:"13px", alignItems:"center"}}>
       <TextField {...register('userName')} fullWidth label="userName" variant="filled" error={errors.userName} helperText={errors.userName?.message} />
       <TextField {...register('fullName')} fullWidth label="fullName" variant="filled" error={errors.fullName} helperText={errors.fullName?.message}/>
       <TextField {...register('email')} fullWidth label="email" variant="filled" error={errors.email} helperText={errors.email?.message}/>
       <TextField {...register('password')} fullWidth label="password" variant="filled" error={errors.password} helperText={errors.password?.message}/>
       <TextField {...register('phoneNumber')} fullWidth label="phoneNumber" variant="filled" error={errors.phoneNumber} helperText={errors.phoneNumber?.message}/>
<Button variant="outlined" type='submit'>Submit</Button>


       </Box>
      
       </Container>
    


    </div>
  )
}

export default Register
