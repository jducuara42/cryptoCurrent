import { ENDPOINT_CRYPTO_API } from "../util/constants"

export async function getAllCoins()
{
    try
    {
        let url: string = `${ENDPOINT_CRYPTO_API}/tickers`;
        console.log(url);    
        const response = await fetch(url);
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