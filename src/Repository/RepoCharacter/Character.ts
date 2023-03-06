import { EspadaLonga,Machado,ArcoCurto,Adaga } from "../RepoWeapons";
import { Personagem } from "../../ModelsTs/ModeloDePersonagem";


export var Pick = new Personagem('Breno','PickBoy','humano','barbaro', 1,0,15,16,14,6,5,10,EspadaLonga);
export var Niendol = new Personagem('Gabriel', 'Niendol', 'humano', 'barbaro', 1,0,10,12,14,15,6,10,Machado);
export var Emy = new Personagem ('Emilly','Emy','humano', 'druid',1,0,10,16,14,6,6,10,EspadaLonga);
export var Julia = new Personagem('Julia','Juli','humano','bardo',1,0,8,16,6,12,5,15,Adaga);
export var Zeka = new Personagem('José','Zekinha','humano','barbaro',1,0,10,16,6,12,5,15,Adaga);
export var Luiza = new Personagem('Luiza','LuizaAD','humano','barbaro', 1,0,15,16,14,6,5,10,Machado);
export var Bibi = new Personagem ('Gabi','Bibi','humano','druid',1,0,15,16,14,6,5,10,EspadaLonga);

export const Characters = [
  Pick,
  Niendol,
  Emy,
  Julia,
  Zeka,
  Luiza,
  Bibi
]