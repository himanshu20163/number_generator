import logo from './logo.svg';
import './App.css';
import Nogenerator from './Number';

function App() {
  const num_arr=[
    {no:"0",color:"green"},
    {no:"1",color:"Yellow"},
    {no:"2",color:"red"},
    {no:"3",color:"red"},
    {no:"4",color:"green"},
    {no:"5",color:"red"},
    {no:"6",color:"green"},
    {no:"7",color:"red"},
    {no:"8",color:"green"},
    {no:"9",color:"green"},
    {no:"10",color:"Yellow"},
    {no:"11",color:"red"},
    {no:"12",color:"red"},
    {no:"13",color:"green"},
    {no:"14",color:"red"},
    {no:"15",color:"green"},
    {no:"16",color:"red"},
    {no:"17",color:"green"},
  ];
  return (
      <div className='box'>
        {num_arr.map((number) =>(
           <Nogenerator num={number.no} color={number.color} />
        ))}
      </div>
    );
}

export default App;
