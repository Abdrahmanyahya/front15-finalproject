import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { Box, Container } from '@mui/system'
import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from '../../validation/Loginvail'

function Login() {




  const {register,handleSubmit, formState: { errors },} = useForm({

    resolver: yupResolver(loginSchema),

  })

  const loginhandle = async (valuse)=>{
  try{
const responce = await axios.post("https://knowledgeshop.runasp.net/api/auth/Account/Login",valuse);
console.log(responce);
  }
  catch(error){
console.log("error");
  }finally{

  }
 
 
  }

  return (
    <div>
      <Container maxWidth="lg">

        <Typography component={'h1'} variant='h2' sx={{padding:"30px"}} >Login Page:</Typography>

        <Box component={"form"} sx={{display:"flex", flexDirection:"column", gap:'20px',alignItems:"center"}} onSubmit={handleSubmit(loginhandle)}>
          <TextField {...register('email')} label="email" variant="filled"fullWidth error={errors.email} helperText={errors.email?.message}/>
          <TextField {...register('password')} label="password" variant="filled" fullWidth error={errors.password} helperText={errors.password?.message}/>
        <Button variant="outlined" type='submit'>submit</Button>
        </Box>


      </Container>

    </div>
  )
}

export default Login
