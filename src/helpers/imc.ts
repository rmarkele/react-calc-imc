export type Level ={
    title: string,
    color: string,
    icon: string,
    imc_range: number[],
    imc?: number
}

export const levels: Level[] = [
    {title:'Magreza', color:'#96a3ab', icon: 'down', imc_range: [0, 18.5]},
    {title:'Normal', color:'#0ead69', icon: 'up', imc_range:[18.5, 25]},
    {title:'Sobrepeso', color:'#e2b036', icon: 'down', imc_range: [25, 30]},
    {title:'Obesidade', color:'#c3423f', icon: 'down', imc_range: [30, 99]}
]

export const calculateImc = (height: number, weight:number) => {
    const imc = weight / (height * height);

    for(let i in levels){
        if(imc < levels[i].imc_range[1]){
            let newLevel:Level = {... levels[i]};
            newLevel.imc = parseFloat(imc.toFixed(2));
            return newLevel;
        }
    }
    return null;

}