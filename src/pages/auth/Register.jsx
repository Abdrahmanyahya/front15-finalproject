import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { Box, Container } from '@mui/system'
import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"

import * as yup from "yup"
import { registerSchema } from '../../validation/Registervalid'
import CircularProgress from '@mui/material/CircularProgress'

function Register() {

const [serverError,setserverError] = useState([]);

  const{register,handleSubmit, formState: { errors,isSubmitting },}=useForm({
        resolver: yupResolver(registerSchema),mode:"onBlur"

  });



  const registerhandle = async (valuse)=>{
    try{
      console.log(valuse)
   const response = await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/Register',valuse);
   console.log(response);
}catch(error){
  setserverError(error.response.data.errors)
console.log(error.response)
}finally{

}
  }
  return (
    <div>
      
       <Container>
         <Box Container maxWidth="sm" sx={{padding:"30px"}}>
      <Typography component={'h1'} variant='h2' >Register Page :</Typography>
      {serverError?.length > 0 && (
        serverError.map((err)=>{
        return <Typography sx={{color:"red"}}>{err}</Typography>
        })


      )}
     </Box>

       <Box component={'form'} onSubmit={handleSubmit(registerhandle)} sx={{padding:"30px", display:"flex", flexDirection:"column", gap:"13px", alignItems:"center"}}>
       <TextField {...register('userName')} fullWidth label="userName" variant="filled" error={errors.userName} helperText={errors.userName?.message} />
       <TextField {...register('fullName')} fullWidth label="fullName" variant="filled" error={errors.fullName} helperText={errors.fullName?.message}/>
       <TextField {...register('email')} fullWidth label="email" variant="filled" error={errors.email} helperText={errors.email?.message}/>
       <TextField {...register('password')} fullWidth label="password" variant="filled" error={errors.password} helperText={errors.password?.message}/>
       <TextField {...register('phoneNumber')} fullWidth label="phoneNumber" variant="filled" error={errors.phoneNumber} helperText={errors.phoneNumber?.message}/>
<Button variant="outlined" type='submit'>  {isSubmitting?<CircularProgress></CircularProgress>:"Submit"} </Button>


       </Box>
      
       </Container>
    


    </div>
  )
}

export default Register
