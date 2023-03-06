import {D4,D8,D10,D20 } from '../scripts/dados'
import {IPersonagem} from '../ModelsTs/ModeloDePersonagem'


export function iniciativa (Personagem1:IPersonagem , Personagem2:IPersonagem) {
    console.log("Iniciando combate")
//==================================================================================================================================
//          PERSONAGEM 1!
    console.log(`${Personagem1.nomeDoJogador} teste de destreza`)
    let testep1 = Teste(Personagem1.moddestreza)
      console.log(`${testep1}`)
    
//===================================================================================================================================
//          PERSONAGEM 2!
    console.log(`${Personagem2.nomeDoJogador} teste de destreza`)
    let testep2 = Teste(Personagem2.moddestreza)
    console.log(`${testep2}`) 
//==================================================================================================================================== 
    do {
        if( testep1 > testep2 ) {
       console.log(`${Personagem1.nomeDoJogador} começa jogando!`)
        
        var vencendor = Personagem1
        var perdedor = Personagem2
        return {vencendor,perdedor}

        } else{
        console.log(`${Personagem2.nomeDoJogador} começa jogando!`)
        var vencendor = Personagem2
        var perdedor = Personagem1
        return {vencendor,perdedor}

        }
    }while(testep1 === testep2)
        
    
}


export function Teste(habilidade:number){
    var d20 = D20() 
    var resultadoFinal = d20 + habilidade 

    return resultadoFinal
}

