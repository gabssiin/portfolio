
"use client"; 

import React, { useState, useEffect, useRef } from 'react';

// Função para gerar um código secreto de 4 dígitos únicos
const generateSecretCode = () => {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let code = [];
  while (code.length < 4) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    code.push(digits.splice(randomIndex, 1)[0]); // Pega um dígito e o remove da lista
  }
  return code.join(''); // Retorna como string
};

// Componente principal do Jogo da Senha
export default function BullsAndCowsGame() {
  const [secretCode, setSecretCode] = useState('');
  const [guesses, setGuesses] = useState([]); // { guess: '1234', bulls: 1, cows: 2 }
  const [currentGuess, setCurrentGuess] = useState('');
  const [attemptsLeft, setAttemptsLeft] = useState(10);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [inputError, setInputError] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [showTutorial, setShowTutorial] = useState(true); // Novo estado para controlar o tutorial

  const inputRef = useRef(null); // Ref para focar o input após cada tentativa

  // Inicia um novo jogo ou mostra o tutorial quando o componente é montado
  useEffect(() => {
    // Se o tutorial deve ser mostrado, não inicia o jogo imediatamente
    if (!showTutorial) {
      startNewGame();
    }
  }, [showTutorial]); // Depende de showTutorial para iniciar o jogo após o tutorial ser fechado

  // Foca no input após cada tentativa ou início de jogo
  useEffect(() => {
    if (inputRef.current && !gameOver && !showTutorial) {
      inputRef.current.focus();
    }
  }, [guesses, gameOver, showTutorial]);

  // Função para iniciar/reiniciar o jogo
  const startNewGame = () => {
    setSecretCode(generateSecretCode());
    setGuesses([]);
    setCurrentGuess('');
    setAttemptsLeft(10);
    setGameOver(false);
    setGameWon(false);
    setInputError('');
    setShowMessage(false);
    setMessageText('');
    setShowTutorial(false); // Garante que o tutorial esteja oculto ao iniciar o jogo
    console.log("Novo jogo iniciado. Código secreto:", generateSecretCode());
  };

  // Valida o input do usuário
  const validateGuess = (guess) => {
    if (guess.length !== 4) {
      return "A senha deve ter 4 dígitos.";
    }
    for (let i = 0; i < guess.length; i++) {
      const char = guess[i];
      // Verifica se o caractere não é um dígito (0-9)
      // Se qualquer caractere não for um número, retorna o erro.
      if (char < '0' || char > '9') {
        return "A senha deve conter apenas números.";
      }
    }
    if (new Set(guess.split('')).size !== 4) {
      return "Os dígitos da senha devem ser únicos.";
    }
    return ""; // Retorna string vazia se válido
  };

  // Calcula 'Bulls' e 'Cows'
  const calculateBullsAndCows = (guess, secret) => {
    let bulls = 0;
    let cows = 0;
    const secretArr = secret.split('');
    const guessArr = guess.split('');

    for (let i = 0; i < 4; i++) {
      if (guessArr[i] === secretArr[i]) {
        bulls++;
      } else if (secretArr.includes(guessArr[i])) {
        cows++;
      }
    }
    return { bulls, cows };
  };

  // Lida com a submissão da tentativa do usuário
  const handleGuessSubmit = (e) => {
    e.preventDefault();
    if (gameOver) return;

    const error = validateGuess(currentGuess);
    if (error) {
      setInputError(error);
      return;
    }
    setInputError(''); // Limpa erros anteriores

    const { bulls, cows } = calculateBullsAndCows(currentGuess, secretCode);

    const newGuesses = [{ guess: currentGuess, bulls, cows }];
    setGuesses(prevGuesses => [...newGuesses, ...prevGuesses]); // Adiciona no início para ordem reversa
    setCurrentGuess('');
    setAttemptsLeft(prev => prev - 1);

    if (bulls === 4) {
      setGameWon(true);
      setGameOver(true);
      setMessageText(`Parabéns! Você acertou a senha '${secretCode}'!`);
      setShowMessage(true);
    } else if (attemptsLeft - 1 === 0) {
      setGameOver(true);
      setMessageText(`Fim de jogo! Você não conseguiu adivinhar a senha. A senha era '${secretCode}'.`);
      setShowMessage(true);
    }
  };

  // Lida com a mudança no input
  const handleInputChange = (e) => {
    const value = e.target.value;
    // Permite apenas 4 dígitos numéricos
    if (value.length <= 4 && /^\d*$/.test(value)) {
      setCurrentGuess(value);
      if (inputError && validateGuess(value) === "") {
        setInputError(''); // Limpa o erro se o input se tornar válido
      }
    }
  };

  // Exibe a senha secreta em uma caixa de mensagem personalizada
  const revealSecretCode = () => {
    setMessageText(`A senha secreta era: ${secretCode}`);
    setShowMessage(true);
  };

  // Fecha a caixa de mensagem personalizada
  const closeMessage = () => {
    setShowMessage(false);
    setMessageText('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-950 text-white p-4">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-cyan-400 drop-shadow-lg">
        Jogo da Senha
      </h1>

      {/* Caixa de Mensagem Personalizada */}
      {showMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 p-8 rounded-lg shadow-2xl border border-cyan-600 text-center max-w-md w-full">
            <p className="text-xl md:text-2xl mb-6 font-semibold">{messageText}</p>
            <button
              onClick={closeMessage}
              className="px-6 py-3 bg-cyan-600 text-white rounded-full hover:bg-cyan-500 transition-colors duration-300 transform hover:scale-105 shadow-md"
            >
              Entendi
            </button>
          </div>
        </div>
      )}

      {/* Tutorial do Jogo */}
      {showTutorial && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 p-8 rounded-lg shadow-2xl border border-cyan-600 text-center max-w-lg w-full">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Como Jogar: Jogo da Senha</h2>
            <p className="text-lg mb-4 text-left">
              Adivinhe a senha secreta de 4 dígitos.
            </p>
            <ul className="list-disc list-inside text-left mb-6 text-gray-300">
              <li className="mb-2">A senha é composta por 4 dígitos únicos (não se repetem).</li>
              <li className="mb-2">Você tem 10 tentativas para adivinhar a senha.</li>
              <li className="mb-2">Após cada tentativa, você receberá dicas:
                <ul className="list-circle list-inside ml-6 mt-2">
                  <li><span className="text-red-400 font-semibold">Bulls:</span> Dígitos corretos na posição correta.</li>
                  <li><span className="text-blue-400 font-semibold">Cows:</span> Dígitos corretos, mas na posição errada.</li>
                </ul>
              </li>
              <li className="mb-2">Exemplo: Se a senha for <span className="font-semibold">1234</span> e você tentar <span className="font-semibold">1456</span>, você terá:
                <ul className="list-circle list-inside ml-6 mt-2">
                  <li>1 Bull (o '1' está correto e na posição certa).</li>
                  <li>1 Cow (o '4' está correto, mas na posição errada).</li>
                </ul>
              </li>
            </ul>
            <button
              onClick={startNewGame}
              className="px-8 py-4 bg-cyan-600 text-white font-semibold rounded-full hover:bg-cyan-500 transition-colors duration-300 transform hover:scale-105 shadow-md"
            >
              Iniciar Jogo!
            </button>
          </div>
        </div>
      )}

      {/* Conteúdo principal do Jogo */}
      {!showTutorial && (
        <>
          <div className="bg-slate-800 p-8 rounded-xl shadow-2xl border border-slate-700 w-full max-w-lg mb-8">
            <p className="text-lg mb-4 text-center">
              Adivinhe a senha de 4 dígitos únicos!
            </p>
            <p className="text-md mb-6 text-center">
              Tentativas restantes: <span className="font-bold text-cyan-300">{attemptsLeft}</span>
            </p>

            {!gameOver ? (
              <form onSubmit={handleGuessSubmit} className="flex flex-col items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={currentGuess}
                  onChange={handleInputChange}
                  maxLength="4"
                  placeholder="Digite sua senha (ex: 1234)"
                  className="w-full p-3 mb-4 text-center text-xl bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-400 text-white"
                  disabled={gameOver}
                />
                {inputError && <p className="text-red-400 text-sm mb-4">{inputError}</p>}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-cyan-600 text-white font-semibold rounded-full hover:bg-cyan-500 transition-colors duration-300 transform hover:scale-105 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentGuess.length !== 4 || gameOver}
                >
                  Adivinhar
                </button>
              </form>
            ) : (
              <div className="text-center mt-6">
                <button
                  onClick={startNewGame}
                  className="px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-500 transition-colors duration-300 transform hover:scale-105 shadow-lg mr-4"
                >
                  Novo Jogo
                </button>
                <button
                  onClick={revealSecretCode}
                  className="px-8 py-4 bg-yellow-600 text-white font-semibold rounded-full hover:bg-yellow-500 transition-colors duration-300 transform hover:scale-105 shadow-lg"
                >
                  Revelar Senha
                </button>
              </div>
            )}
          </div>

          {/* Lista de Tentativas Anteriores */}
          {guesses.length > 0 && (
            <div className="bg-slate-800 p-6 rounded-xl shadow-xl border border-slate-700 w-full max-w-lg">
              <h2 className="text-2xl font-bold mb-4 text-center text-cyan-300">Tentativas Anteriores</h2>
              <div className="max-h-64 overflow-y-auto custom-scrollbar"> {/* Scrollbar customizada */}
                {guesses.map((g, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center p-3 mb-2 rounded-lg ${
                      g.bulls === 4 ? 'bg-green-900 border-green-700' : 'bg-slate-700 border-slate-600'
                    }`}
                  >
                    <span className="font-mono text-xl text-white">{g.guess}</span>
                    <div className="flex space-x-4 text-lg">
                      <span className="text-red-400">Bulls: {g.bulls}</span>
                      <span className="text-blue-400">Cows: {g.cows}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* Estilos CSS para o scrollbar customizado */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #334155; /* slate-700 */
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #06b6d4; /* cyan-500 */
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #0891b2; /* cyan-600 */
        }
      `}</style>
    </div>
  );
}
