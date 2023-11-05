import React, { useState, useEffect } from 'react';

function App() {
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [operador, setOperador] = useState('');
  const [resp, setResp] = useState('');
  const [display, setDisplay] = useState('');

  useEffect(() => {
    setDisplay(resp.toString());
  }, [resp]);

  function leNumero(num) {
    if (resp !== '' && operador === '') {
      apaga();
    }

    if (operador === '') {
      setDisplay(display + num);
      setN1(n1 + num);
    } else if (operador !== '' && n2 === '') {
      setDisplay(num);
      setN2(num);
    } else {
      setDisplay(display + num);
      setN2(n2 + num);
    }
  }

  function apaga() {
    setN1('');
    setN2('');
    setOperador('');
    setResp('');
    setDisplay('');
  }

  function leOperador(op) {
    if (n1 !== '') {
      setOperador(op);
      setDisplay(op);
    }
  }

  function calcular(event) {
    event.preventDefault();

    if (n1 !== '' && n2 !== '' && operador !== '') {
      switch (operador) {
        case '+':
          setResp(parseInt(n1) + parseInt(n2));
          break;

        case '-':
          setResp(parseInt(n1) - parseInt(n2));
          break;

        case '*':
          setResp(parseInt(n1) * parseInt(n2));
          break;

        case '/':
          setResp(parseInt(n1) / parseInt(n2));
          break;

        case '^':
          setResp(parseInt(n1) ** parseInt(n2));
          break;

        default:
          break;
      }
      setN1(resp.toString());
      setN2('');
      setOperador('');
    }
  }


  return (
    <div id="calculator">
      <form onSubmit={calcular}>
        <span id="display">{display}</span>
        <section id="buttonsGrid">
          <article id="numbersGrid">
            <button type="button" className="operatorButton" onClick={() => apaga()}>
              C
            </button>
            <button type="button" className="operatorButtonOff"></button>
            <button type="button" className="operatorButton" onClick={() => leOperador('^')}>
              ^
            </button>
            <button type="button" className="numbersButton" onClick={() => leNumero('7')}>
              7
            </button>
            <button type="button" className="numbersButton" onClick={() => leNumero('8')}>
              8
            </button>
            <button type="button" className="numbersButton" onClick={() => leNumero('9')}>
              9
            </button>
            <button type="button" className="numbersButton" onClick={() => leNumero('4')}>
              4
            </button>
            <button type="button" className="numbersButton" onClick={() => leNumero('5')}>
              5
            </button>
            <button type="button" className="numbersButton" onClick={() => leNumero('6')}>
              6
            </button>
            <button type="button" className="numbersButton" onClick={() => leNumero('1')}>
              1
            </button>
            <button type="button" className="numbersButton" onClick={() => leNumero('2')}>
              2
            </button>
            <button type="button" className="numbersButton" onClick={() => leNumero('3')}>
              3
            </button>
            <button type="button" className="numbersButtonOff"></button>
            <button type="button" className="numbersButton" onClick={() => leNumero('0')}>
              0
            </button>
            <button type="button" className="numbersButtonOff"></button>
          </article>

          <article id="operatorsGrid">
            <button type="button" className="operatorButton" onClick={() => leOperador('/')}>
              ÷
            </button>
            <button type="button" className="operatorButton" onClick={() => leOperador('*')}>
              x
            </button>
            <button type="button" className="operatorButton" onClick={() => leOperador('-')}>
              -
            </button>
            <button type="button" className="operatorButton" onClick={() => leOperador('+')}>
              +
            </button>
            <button type="submit" className="submitButton">
              =
            </button>
          </article>
        </section>
      </form>
    </div>
  );
}

export default App;
