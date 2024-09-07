import Teste from './Teste'
import Imagem from './assets/Imagem.jpg'

function App() {

  //declarando variaveis
  let nome="Fiapinho";
  let sobreNome="Mascote";
  let novoNome =nome.toUpperCase();

  //criando uma função

  function soma(a,b){
      return a + b;
  }

  //criando uma arrow function
  const soma1=(w,f)=>{return w + f}

  return (
    //fragments
 <>
 <Teste/>
  <h1>Fiap</h1>
  <h2>O meu nome é {novoNome} sou o {sobreNome}</h2>
  <p>A soma da função é: {soma(10,70)}</p>
  <p>O resultado da arrow function é: {soma1(4,9)}</p>
  <img src={Imagem} alt="imagem" width="300"/>
 </>
    
  
  )
}

export default App
