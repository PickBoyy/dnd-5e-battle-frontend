import { iniciativa } from './iniciação'
import {IPersonagem, Personagem} from '../ModelsTs/ModeloDePersonagem'
import {Ataque} from '../scripts/ataque'
import { iniciativa3 } from './iniciativa2'


export function batalha(Personagem1:IPersonagem,Personagem2:IPersonagem){
    var iniciacao = iniciativa(Personagem1,Personagem2)
    var vencedor = iniciacao.vencendor
    var perdedor = iniciacao.perdedor
  
while(vencedor.PontosDeVida > 0 || perdedor.PontosDeVida > 0 ) {
        Ataque(vencedor,perdedor)
       
        
        if (perdedor.PontosDeVida <= 0) {
            console.log(`${vencedor.nome} Saiu vitorioso do combate`)
            console.log(`${perdedor.nome} Morreu...`)
            break
        } else 
        if (vencedor.PontosDeVida <= 0) {
            console.log(`${perdedor.nome} Saiu vitorioso do combate`)
            console.log(`${vencedor.nome} Morreu...`)  
            break
        } else {
            Ataque(perdedor,vencedor)
          
        }
        if (perdedor.PontosDeVida <= 0) {
            console.log(`${vencedor.nome} Saiu vitorioso do combate`)
            console.log(`${perdedor.nome} Morreu...`)
            break
        } else 
        if (vencedor.PontosDeVida <= 0) {
            console.log(`${perdedor.nome} Saiu vitorioso do combate`)
            console.log(`${vencedor.nome} Morreu...`)  
            break
        }
        
    }
   
}