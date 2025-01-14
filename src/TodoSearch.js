import React, { useState } from 'react';

function TodoSearch({ onSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleChange = (event) => {
    setSearchText(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="max-w-xl lg:max-w-lg">
      <h2 className="text-4xl font-semibold tracking-tight text-white">Todo List</h2>
      <div className="mt-6 flex max-w-md ">
        <label className="sr-only">Buscar Tarea</label>
        <input
          type="text"
          placeholder="Buscar Tarea"
          className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
          value={searchText}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm "
        >
           🔍
        </button>
      </div>
    </div>
  );
}

export { TodoSearch };