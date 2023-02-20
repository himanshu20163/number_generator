import './number.css';
function Nogenerator(props){
    var ans = props.num;
    var color = props.color;
    console.log(ans)
    return(
        <>
        { ans%2 === 0 ? <p className='redbox' style={{backgroundColor:`${color}`}}>{ans}</p> :(ans % 2 !== 0 ? <p className='yellowbox' style={{backgroundColor:`${color}`}}>{ans}</p>: 
        <p className='redbox' style={{backgroundColor:`${color}`}}>{ans}</p>)   }
            {console.log(ans%2)}
        </>     
    );
}
export default Nogenerator;