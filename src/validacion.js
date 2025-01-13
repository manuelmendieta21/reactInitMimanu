const defaultTodos=[{
    text: 'Cortar el césped',
    completed: 'false',
  },
  {
    text: 'Comprar comida',
    completed: 'true',
  },
  {
    text: 'Pasear al perro',
    completed: 'false',
  },
  {
    text: 'Hacer la tarea',
    completed: 'true',
  },
  {
    text: 'Estudiar',
    completed: 'false',
  },
  
  ]

  function validar(){
    let tareasfinalizadas=0;
    let tareaspendientes=0;
    defaultTodos.forEach(element => {
        if (element.completed=='true'){
            tareasfinalizadas=tareasfinalizadas +1}
        else{
            tareaspendientes=tareaspendientes +1}
        })
        console.log(`Tareas finalizadas: ${tareasfinalizadas}`);
        console.log(`Tareas pendientes: ${tareaspendientes}`);
  }
  validar(defaultTodos)