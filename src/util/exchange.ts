export class exchange 
{
    public valor: number;
    constructor() 
    {
        this.valor = 0;
    }

    //getter para valor
    public getValor() 
    {
        return this.valor;
    }
    
    //setter para valor
    public setValor(valor: number) 
    {
        this.valor = valor;
    }

    //Metodo para calcular la conversion a dolares
    public getExchangeUSD(valueTo: number, ValueOf: number)
    {
        let cambio:number = valueTo * ValueOf;
        this.setValor(cambio);
    }

    //Metodo para calcular la conversion a otra moneda
    public getExchangeTo(valueTo: number, ValueOf: number)
    {
        let cambio:number = ValueOf / valueTo;
        this.setValor(cambio);
    }
}