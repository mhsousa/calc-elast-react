import React, {useState} from 'react'
import './App.css';


function App() {
<div>
<link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap" rel="stylesheet"></link>
</div>
const [precoinicial, setPrecoinicial] = useState();
const [qtdinicial, setQtdInicial] = useState();
const [precofinal, setPrecoFinal] = useState();
const [qtdfinal, setQtdFinal] = useState();

function handleInputChange(event) {
  if (event.key === "Enter") {
    const value = event.target.value;
    atualiza();  }
}

function atualiza(){
  if(precofinal!=undefined & precoinicial!=undefined & qtdinicial!=undefined & qtdfinal!=undefined){
  document.getElementById('resultado').textContent=`RECEITA INICIAL: R$ ${precoinicial*qtdinicial} `;
  document.getElementById('resultado2').textContent=`RECEITA FINAL: R$ ${precofinal*qtdfinal} `;
  document.getElementById('resultado3').textContent=`DIFERENÇA PERCENTUAL: ${(((precofinal*qtdfinal)-(precoinicial*qtdinicial))/(precoinicial*qtdinicial)).toFixed(4)*100}% `;
  var elast=(((qtdfinal-qtdinicial)/qtdinicial)/((precofinal-precoinicial)/precoinicial)).toFixed(4)
  document.getElementById('resultado4').textContent=`ELASTICIDADE: ${elast}`}
  if (elast== 1){
    document.getElementById('exp').textContent=`Resultado: A elasticidade é unitária`}
  else if( elast > 1){
    document.getElementById('exp').textContent=`Resultado: O bem é Elástico`}
  else if( elast < 1){
    document.getElementById('exp').textContent=`Resultado: O bem é Inelástico`}
  }


  return (
    <div className="App">
      <header className="App-header">
        <br></br><br></br><br></br><br></br>
        <h1>CALCULADORA DE ELASTICIDADE PREÇO-DEMANDA</h1>          
        <br></br><br></br><br></br><br></br><br></br>
      </header>
      <br></br>
    <div class="linha">
           <form className='App-inputs'>
          <label>PREÇO INICIAL:</label> <br></br><input type="number" value={precoinicial} placeholder="R$" onChange={(e) => {if(e.target.value>=0){setPrecoinicial(e.target.value)}else{alert("Não insira números negativos.")}}} onKeyDown={handleInputChange}/><br></br><br></br>
          <label>PREÇO FINAL:</label><br></br><input type="number" value={precofinal} placeholder="R$" onKeyDown={handleInputChange} onChange={(e) => {setPrecoFinal(e.target.value);}}/><br></br><br></br>

          </form>
          <form className='App-inputs'>
          <label>QUANTIDADE INICIAL:</label><br></br> <input type="number" value={qtdinicial} placeholder="Qtd"  onKeyDown={handleInputChange} onChange={(e) => {setQtdInicial(e.target.value);}} /><br></br><br></br>
          <label>QUANTIDADE FINAL:</label><br></br><input type="number" value={qtdfinal} placeholder="Qtd" onKeyDown={handleInputChange} onChange={(e) => {setQtdFinal(e.target.value);}}/><br></br><br></br>
          </form>
  </div>
      <body>

   
        </body>
        <br></br>
      <footer>
      <button onClick={atualiza}>CALCULAR</button>

      
        <p id="resultado"  className="resultados">RECEITA INICIAL:</p>
        <p id="resultado2" className="resultados">RECEITA FINAL: </p>
        <p id="resultado3" className="resultados">DIFERENÇA PERCENTUAL:</p>
        <p id="resultado4" className="resultados">ELASTICIDADE: </p>
        <p id="exp" className="resultados">RESULTADO:</p>
        </div>

   
 
      </footer>
       
  );
}

export default App;
