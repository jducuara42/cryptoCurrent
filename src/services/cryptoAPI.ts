import { ENDPOINT_CRYPTO_API } from "../util/constants"

export async function getAllCoins()
{
    try
    {
        let url: string = `${ENDPOINT_CRYPTO_API}/tickers?start=0&limit=20`;
        console.log(url);    
        const response = await fetch(url);
        //const result = await response.json();
        //return result;
        
        if (response.ok) 
        {
            const result = await response.json();
            return result;
        }
        else
        {
            const error = new Error();
            return Promise.reject(error);
        }
    }
    catch(error)
    {
        //console.log("error: ", error);
        //throw(error);
        console.error(error);
    }
}

export async function getDetailsCoin(id:string) 
{
    try
    {
        let url: string = `${ENDPOINT_CRYPTO_API}/ticker/?id=${id}`;
        console.log(url); 
        const response = await fetch(url);
        //const result = await response.json();
        if (response.ok) 
        {
            const result = await response.json();
            return result;
        }
        else
        {
            const error = new Error();
            return Promise.reject(error);
        }
    } 
    catch (error) 
    {
        throw(error);
    }
}