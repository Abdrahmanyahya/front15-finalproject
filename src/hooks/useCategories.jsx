import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import axiosInstance from '../API/axiosInstance';

export default function useCategories(){
const getCatrgories = async ()=>{
   const response = await axiosInstance.get("/Categories");
   console.log(response.data);
   return response.data;
}


const query = useQuery({
queryKey:['categories'],
queryFn:getCatrgories,
staleTime:1000*60*5


});

return query
}