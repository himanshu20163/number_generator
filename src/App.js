import logo from './logo.svg';
import './App.css';

const head ={
  textAlign:"center",
}

function App() {
  function checkPrime(n) {        
    let  i, flag = true;
    if(n<2){
      flag = false;
    }
    for (i = 2; i <= n - 1; i++)
        if (n % i == 0) {
            flag = false;
            break;
        }     
    // Check and display output
    if (flag == true)
        return true;
    else
        return false;
}

 //backgroundColor:checkPrime(i)? "red":i%2==0 ?"green":"yellow"}
  return (
    <>
    <div >
      <h1 style={head}>30 days of React</h1>
      <h5 style={head}>Number generator</h5>
    </div>
    <div className='box' >
      
      {Array(32).fill("").map((number, i) => {
        return(
          <div style={{ 
            height:"80px",
          width:"80px",
          color:"black",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          border:"2px solid white",
          backgroundColor:checkPrime(i)? "red":i%2==0 ?"green":"yellow",
          transition:"width .2s",
          boxShadow: "2px 2px 2px black",
          }}>
          {<h2 >{i}</h2>}
        </div>
        );
      }
    )}
    </div>
    </>
    
  );
}

export default App;
