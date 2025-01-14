function TodoCounter({ total, completed }) {
  return (
    <h2 className="p-2 flex justify-center items-center text-center text-xl sm:text-2xl  font-semibold text-white">
      Has completado {completed} de {total} Tareas
    </h2>
  );
}

export {TodoCounter};
