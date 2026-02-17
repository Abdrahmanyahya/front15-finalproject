import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Box, Container, Grid } from '@mui/system';
import { useQuery } from '@tanstack/react-query';
import CircularProgress from '@mui/material/CircularProgress';
import useCategories from '../../hooks/useCategories';
function Categories() {

 const {data,isLoading,isError,error} = useCategories();


if(isLoading)return<CircularProgress></CircularProgress>
if(isError)return <Typography>Error</Typography>

  return (

 <>
 <Container maxWidth="lg">
      <Box sx={{display:"flex",flexDirection:"column",gap:"20px"}}>
{data.response.map((item)=>{

   return <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
       
        <CardContent>

          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           {item.id}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    
    })}     
            </Box> 

    </Container>
    </>
  )
}

export default Categories

