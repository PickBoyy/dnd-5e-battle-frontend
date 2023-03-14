import "./App.css";
import Navbar from "./components/navbar/Navbar";
import "./components/navbar/Navbar.css";
import { Button } from "reactstrap";
//---------------------------------------
//IMPORT BTNS
import BP1 from "./components/buttons/BP1";
import BP2 from "./components/buttons/BP2";
//---------------------------------------
//IMPORT LISTS
import LP2 from "./components/list/LP2";
import LP1 from "./components/list/LP1";
//------------------------------------------
import SelectBoard from "./components/Boards/selectBoard";
import { AppContext, useAppContext } from "./hooks/context";
import { Turno } from "./scripts/Turno";
import { IPersonagem } from "./ModelsTs/ModeloDePersonagem";
import { IMonstro } from "./ModelsTs/ModeloDeMonstros";
import { useContext } from "react";
import { PlaceBatle } from "./components/PlaceBatle";
import { PlaceD20 } from "./components/D20";

type typeContext = {
  infoText1:string,
  infoText2:string,
  chosenCharacters:Array<IPersonagem|IMonstro>,
  chosenMonsters:Array<IMonstro|IPersonagem>
}
function App() {
  const { infoText1, infoText2, chosenCharacters,chosenMonsters } = useContext<typeContext>(AppContext);

  const handlerBatle = (lutadores: Array<IPersonagem | IMonstro>) => {
    const personagens = lutadores.filter(lutador => lutador.tipo === 'personagem') as IPersonagem[];
    const monstros = lutadores.filter(lutador => lutador.tipo === 'monstro') as IMonstro[];
    Turno([...personagens, ...monstros]);
  }
  
  
  

  return (
    <div className="App">
      <Navbar />
      <div className="grid">
        <div className="left">
          <p className="infoText1">{infoText1}</p>
          <div className="select">
            <hr />
            <h2>Choose the Character</h2>
            <BP1 className="btnSelect" text="Select" />
            <hr />
            <LP1 />
            <PlaceBatle/>
            <PlaceD20/>
          </div>
        </div>

        <div className="center">
          <Button onClick={() => handlerBatle(chosenCharacters,chosenMonsters)} color="dark" className="btn_battle">
            Start Battle
          </Button>
          <hr />
          <SelectBoard />
        </div>
        <div className="rigth">
          <p className="infoText2">{infoText2}</p>
          <div className="select">
            <hr />
            <h2>Choose the Monster</h2>
            <BP2 className="btnSelect" text="Select" />
            <hr />
            <LP2 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
