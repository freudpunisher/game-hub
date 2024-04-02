import { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';





    
    export interface Genre {
        id: number;
        name:string;
        
    }

    interface FetchGenresResponse {
 
count : number;
results: Genre[];

    }
    
   

const useGenres = () => {

    const [ genre, setgenre] = useState<Genre[]>([]);
    const [ error, seterror] = useState('');
    const [ isLoading, setisLoading] = useState(false);
useEffect(() => {
    const controller = new AbortController();
    setisLoading(true);
    apiClient.get<FetchGenresResponse>('/genres', {signal: controller.signal}).then(res => {setgenre(res.data.results)
        setisLoading(false);
    }).catch(error =>{
        if(error instanceof CanceledError) return;
        seterror(error.message)
        setisLoading(false);
    });

    return () => controller.abort();
},[])

return {genre, error, isLoading}
  
}

export default useGenres
