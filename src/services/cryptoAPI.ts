import { ENDPOINT_CRYPTO_API, START_COINS, LIMIT_COINS } from "../util/constants"

let contador: number = 0;

export async function getAllCoins()
{
    try
    {
        let url: string = `${ENDPOINT_CRYPTO_API}/tickers?start=${LIMIT_COINS*contador}&limit=${LIMIT_COINS}`;
        console.log(url);    
        const response = await fetch(url);
        //const result = await response.json();
        //return result;
        
        if (response.ok) 
        {
            const result = await response.json();
            contador = contador + 1;
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