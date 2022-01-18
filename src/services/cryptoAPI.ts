//Importe constante endpoint del API y de las imagenes
import { ENDPOINT_CRYPTO_API, LIMIT_COINS } from "../util/constants";

let contador: number = 0;

//Funcion para llamado de API monedas
export async function getAllCoins()
{
    try
    {
        let url: string = `${ENDPOINT_CRYPTO_API}/tickers?start=${LIMIT_COINS*contador}&limit=${LIMIT_COINS}`;
        const response = await fetch(url);
        
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
        throw(error);
    }
}

//Funcion para llamado de API al detalle de una moneda
export async function getDetailsCoin(id:string) 
{
    try
    {
        let url: string = `${ENDPOINT_CRYPTO_API}/ticker/?id=${id}`;
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
    catch (error) 
    {
        throw(error);
    }
}