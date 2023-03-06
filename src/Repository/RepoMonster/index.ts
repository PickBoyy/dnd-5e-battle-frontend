import { Monstro } from "../../ModelsTs/ModeloDeMonstros"
import { EspadaLonga,Mordida } from "../RepoWeapons"

// Monstros--------------------------------------------------------------- 
export var Esqueleto = new Monstro('Esqueleto', 10,14,15,6,8,5,EspadaLonga )
export var AranhaGigante = new Monstro('Aranha gigante', 14,16,12,2,11,4,Mordida)
export var Lobo = new Monstro('Lobo atroz',15,12,12,5,5,3,Mordida)

export const Monsters = [
    Esqueleto,
    AranhaGigante,
    Lobo
]
//-----------------------------------------------------------------------------