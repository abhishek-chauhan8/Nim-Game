import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [stones, setStones] = useState(10); // Initial number of stones
  const [currentPlayer, setCurrentPlayer] = useState("Player 1");
  const [winner, setWinner] = useState("");

  const handleRemove = (num) => {
    if (num < 1 || num > 3) return; // Ensure the number is between 1 and 3
    if (num > stones) return; // Ensure we do not remove more stones than available

    // Update the number of stones
    const newStones = stones - num;
    setStones(newStones);

    // Check for winner
    if (newStones === 0) {
      setWinner(`${currentPlayer} wins!`);
      return;
    }

    // Switch player
    setCurrentPlayer(currentPlayer === "Player 1" ? "Player 2" : "Player 1");
  };

  const handleChange = (e) => {
    setStones(parseInt(e.target.value));
  };
  return (
    <div className="flex items-center justify-center h-screen bg-fuchsia-50	 ">
      <div className="flex flex-col justify-center items-center mx-auto w-[38vw] h-[50vh] shadow-md duration-200 rounded-xl shadow-violet-200 hover:shadow-violet-400 bg-blue-50 border border-black">
        <h1 className="text-4xl font-bold tracking-wide bg-violet-400 mb-8 mt-0 bg text-white px-6 py-3 rounded-md">
          Nim-game
        </h1>

        <div className="tracking-wide px-8 mx-auto">
          <label className="text-xl tracking-wide">
            Select Number of stones:
            <input
              className="ml-16 w-52 h-8 p-2 border border-gray-300 font-bold text-xl rounded hover:shadow-sm hover:shadow-slate-400"
              type="number"
              value={stones}
              onChange={handleChange}
              min="1"
            />
          </label>

          <p className="text-center text-xl m-4">
            Current Player: {currentPlayer}
          </p>

          {winner ? (
            <p>{winner}</p>
          ) : (
            <div className="buttons flex justify-center">
              {[1, 2, 3].map((num) => (
                <button
                  className=" border-2 border-black bg-yellow-100 rounded-md hover:shadow-sm hover:shadow-slate-500"
                  key={num}
                  onClick={() => handleRemove(num)}
                >
                  Remove {num} Stone{num > 1 ? "s" : ""}
                </button>
              ))}
            </div>
          )}

          <div>
            <ul className="list-disc list-inside text-blue-400">
            <p className="text-center text-xl font-bold text-blue-500  mt-5 mb-3">How to play -</p>
              <li className="mb-2 text-sm">
                You are playing the Nim Game with your friend:
              </li>
              <li className="mb-2 text-sm">
                Initially, there is a heap of stones on the table.
              </li>
              <li className="mb-2 text-sm">
                You and your friend will alternate taking turns, and you go
                first.
              </li>
              <li className="mb-2 text-sm">
                On each turn, the person whose turn it is will remove 1 to 3
                stones from the heap.
              </li>
              <li className="mb-2 text-sm">
                The one who removes the last stone is the winner.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
