import { useState, createContext } from "react";
import React from "react";
import { StyledFind } from "./find.styles.js";
import { crudProcesses } from "../../backend/controller/crudProcesses.js";
import Search from "../search/search.js";
import List from "../list/list.js";

const QueryContext = createContext("");

export default function Find() {
  const [items, setItems] = useState(crudProcesses.getAll());
  const [query, setQuery] = useState("");

  return (
    <QueryContext.Provider value={query}>
      <StyledFind>
        <Search query={query} setQuery={setQuery} setItems={setItems} />
        <List items={items} setItems={setItems} />
      </StyledFind>
    </QueryContext.Provider>
  );
}

export { QueryContext };
