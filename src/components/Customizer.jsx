import React, { useState } from "react";

function Customizer() {
  const [currentCard, setCurrentCard] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [finalCards, setFinalCards] = useState([]);

  const categories = {
    "Soch Turmagi": [
      { id: 1, text: "Santimetirovka", type: "hair" },
      { id: 2, text: "Kal", type: "hair" },
    ],
    Kiyim: [
      { id: 3, text: "zori", type: "clothing" },
      { id: 4, text: "skromnisi", type: "clothing" },
    ],
    Aksessuarlar: [
      { id: 5, text: "mishka", type: "accessory" },
      { id: 6, text: "klavyatura", type: "accessory" },
    ],
  };

  function dragStartHandle(e, card) {
    setCurrentCard(card);
  }

  function dragOverHandle(e) {
    e.preventDefault();
  }

  function dropHandle(e) {
    e.preventDefault();
    if (currentCard && !selectedItems.find((item) => item.id === currentCard.id)) {
      setSelectedItems((prevItems) => [...prevItems, currentCard]);
    }
  }

  function showFinalCards() {
    setFinalCards(selectedItems);
  }

  return (
    <div className="p-8 space-y-10 bg-gradient-to-br from-gray-50 to-gray-200 rounded-xl shadow-lg">
      <div className="flex flex-col space-y-8">
        {Object.keys(categories).map((category) => (
          <div key={category} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-blue-700">{category}</h3>
            <div className="flex gap-6 flex-wrap">
              {categories[category].map((card) => (
                <div
                  key={card.id}
                  className="p-5 border-2 border-blue-500 bg-blue-50 text-center text-lg font-medium rounded-lg shadow-lg cursor-grab hover:bg-blue-100 transition-transform transform hover:scale-105"
                  draggable={true}
                  onDragStart={(e) => dragStartHandle(e, card)}
                >
                  {card.text}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        className="min-h-[150px] p-8 border-4 border-dashed border-gray-400 bg-gray-200 rounded-xl flex flex-wrap gap-4 items-center justify-center shadow-inner"
        onDragOver={dragOverHandle}
        onDrop={dropHandle}
      >
        {selectedItems.length === 0 ? (
          <p className="text-gray-500 italic">Drop selected items here</p>
        ) : (
          selectedItems.map((item) => (
            <div
              key={item.id}
              className="p-5 bg-blue-300 text-white rounded-lg shadow-md"
            >
              {item.text}
            </div>
          ))
        )}
      </div>

      <button
        className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
        onClick={showFinalCards}
      >
        ADD
      </button>

      {finalCards.length > 0 && (
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-6 text-gray-800">Final Cards</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {finalCards.map((item) => (
              <div
                key={item.id}
                className="p-5 border border-gray-300 bg-gray-100 rounded-lg shadow-md"
              >
                <h4 className="text-center font-medium text-gray-700">{item.text}</h4>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Customizer;