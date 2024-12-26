import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cards from './components/Cards';
import Copy from './components/Copy';
import Customizer from './components/Customizer';
import Past from './components/Past';

export const TasksContext = createContext();

function App() {
  const [cardList, setCardList] = useState([
    { id: 1, order: 3, text: "CARD 3" },
    { id: 2, order: 1, text: "CARD 1" },
    { id: 3, order: 2, text: "CARD 2" },
    { id: 4, order: 4, text: "CARD 4" },
  ]);

  return (
    <Router>
      <TasksContext.Provider value={{ cardList, setCardList }}>
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col">
          <nav className="bg-blue-800 text-white shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-3xl font-bold tracking-wide">My App</h1>
              <div className="space-x-4">
                <Link
                  to="/cards"
                  className="px-4 py-2 hover:bg-blue-700 transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                >
                  Cards
                </Link>
                <Link
                  to="/copy"
                  className="px-4 py-2 hover:bg-blue-700 transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                >
                  Copy
                </Link>
                <Link
                  to="/customizer"
                  className="px-4 py-2 hover:bg-blue-700 transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                >
                  Customizer
                </Link>
                <Link
                  to="/past"
                  className="px-4 py-2 hover:bg-blue-700 transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                >
                  Past
                </Link>
              </div>
            </div>
          </nav>
          <main className="container mx-auto flex-grow p-6 bg-white shadow-lg rounded-lg mt-6">
            <Routes>
              <Route path="/cards" element={<Cards />} />
              <Route path="/copy" element={<Copy />} />
              <Route path="/customizer" element={<Customizer />} />
              <Route path="/past" element={<Past />} />
            </Routes>
          </main>
        </div>
      </TasksContext.Provider>
    </Router>
  );
}

export default App;