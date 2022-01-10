export class exchange 
{
    public valor: number;
    constructor() 
    {
        this.valor = 0;
    }

    public getValor() 
    {
        return this.valor;
    }
    
    public setValor(valor: number) 
    {
        this.valor = valor;
    }

    public getExchangeUSD(valueTo: number, ValueOf: number)
    {
        let cambio:number = valueTo * ValueOf;
        this.setValor(cambio);
    }

    public getExchangeTo(valueTo: number, ValueOf: number)
    {
        let cambio:number = ValueOf / valueTo;
        this.setValor(cambio);
    }
}