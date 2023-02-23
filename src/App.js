import './App.css';
import Cards from './Components/Cards';

function App() {
  return (
    <div className="App" style={{display:"flex",flexDirection:'column',justifyContent:'center',alignItems:"center" ,backgroundColor:'black'}}>
     <Cards imgs="./Images/spider-mannowayhome.jpg" name="Spider-Man: No Way Home" year="2021" director="jon watts" time="2h 28min" subtitle="Action/Adventure" description="Spider-Man seeks the help of Doctor Strange to forget his exposed secret identity as Peter Parker. However, Strange's spell goes horribly wrong, leading to unwanted guests entering their universe."/>
     <Cards imgs="./Images/Tomb_Raider.png" name="Tomb Raider" year="2018" director="Roar Uthang" time="1h 58m" subtitle="Action" description="Lara Croft, a courageous and independent young woman, sets out on a dangerous journey to unravel the truth behind her adventurer father's mysterious disappearance."/>
     <Cards imgs="./Images/avengers.jpg" name="Avengers: Endgame" year="2019" director="Joe russo" time="3h 2m" subtitle="Action/Sci-fi" description="After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance."/>
     <Cards imgs="./Images/avatar2.jpg" name="Avatar: The Way of Water" year="2022" director="james cameron" time="3h 12m" subtitle="Sci-fi/Action" description="Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans."/>
    </div>
  );
}

export default App;
