import React, { useState } from "react";
import "./App.css";
import ListItems from "./ListItems";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

const App = () => {
  const [items, setItems] = useState([]);
  const [key, setKey] = useState();
  const [text, setText] = useState("");

  const addItem = (e) => {
    e.preventDefault();
    if (text !== "") {
      const newItems = [...items, { text, key }];
      setItems(newItems);
      setKey(null);
      setText("");
    }
  };
  const handleInput = (e) => {
    setText(e.target.value);
    setKey(Date.now());
  };

  const deleteItem = (key) => {
    const filteredItems = items.filter((item) => item.key !== key);
    setItems(filteredItems);
  };

  const setUpdate = (text, key) => {
    const updated = items.map((item) =>
      item.key === key ? { key, text } : item
    );
    setItems(updated);
  };

  return (
    <div className="App">
      <header>
        <form id="to-do-form" onSubmit={addItem}>
          <input
            type="text"
            placeholder="Enter task"
            value={text}
            onChange={handleInput}
          ></input>
          <button type="submit">Add</button>
        </form>

        <ListItems
          items={items}
          deleteItem={deleteItem}
          setUpdate={setUpdate}
        />
      </header>
    </div>
  );
};

export default App;
