import {D4,D8,D10,D20 } from '../scripts/dados'
import {IPersonagem, Personagem} from '../ModelsTs/ModeloDePersonagem'
import {Teste} from './iniciação'

export function Iniciativa2(...Personagens:IPersonagem[]){    
    console.log(`Definindo iniciativa`);
    var ordemDeAtaque = Personagens.map(function(Personagem) {
        var Personagem_iniciativa = D20() + Personagem.moddestreza
        console.log(`${Personagem.nomeDoJogador} conseguiu ${Personagem_iniciativa}`);

        return Personagem_iniciativa
    })        

    return ordemDeAtaque
}

export function iniciativa3(...Personagens:IPersonagem[]){    
    console.log(`Definindo iniciativa`);
    console.log('-----------------------------------------------------------')
    var ordem = Personagens.map(function(Personagem) {
        var Personagem_iniciativa = D20() + Personagem.moddestreza
       //console.log(`${Personagem.nomeDoJogador} conseguiu ${Personagem_iniciativa}`);

       const Teste_Personagem = {Teste: Personagem_iniciativa, Personagem: Personagem}
       const Teste_Nome = {Teste: Personagem_iniciativa, Personagem: Personagem.nome}
       console.log(Teste_Nome)
       return Teste_Personagem
       
    })        

    var ordemDeAtaque = ordem.sort((a,b)=>{
        return b.Teste - a.Teste
    })
    
     

}


 
export function testeIniciativa4(Personagem:IPersonagem){
    var iniciativa = D20() + Personagem.moddestreza
    console.log(`${Personagem.nomeDoJogador} conseguiu ${iniciativa}`);
    var Personagem_iniciativa = {
        Personagem:Personagem,
        iniciativa:iniciativa
    }
    return Personagem_iniciativa
}
/**/

