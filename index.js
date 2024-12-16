class Cola {
    constructor() {
      this.items = []; // Usamos un arreglo para almacenar los elementos de la cola
    }
  
    // Agregar un elemento al final de la cola
    encolar(elemento) {
      this.items.push(elemento);
      console.log(`${elemento} añadido a la cola`);
    }
  
    // Eliminar un elemento del frente de la cola
    desencolar() {
      if (this.estaVacia()) {
        console.log("La cola está vacía");
        return null;
      }
      const elemento = this.items.shift();
      console.log(`${elemento} eliminado de la cola`);
      return elemento;
    }
  
    // Ver el primer elemento de la cola
    frente() {
      if (this.estaVacia()) {
        console.log("La cola está vacía");
        return null;
      }
      return this.items[0];
    }
  
    // Verificar si la cola está vacía
    estaVacia() {
      return this.items.length === 0;
    }
  
    // Obtener el tamaño de la cola
    tamaño() {
      return this.items.length;
    }
  
    // Mostrar los elementos de la cola
    imprimir() {
      console.log("Cola:", this.items.join(" <- "));
    }
  }
  
  // Ejemplo de uso
  const cola = new Cola();
  
  cola.encolar(10); // Añade 10
  cola.encolar(20); // Añade 20
  cola.imprimir();  // Muestra: 10 <- 20
  
  cola.desencolar(); // Elimina 10
  cola.imprimir();   // Muestra: 20
  
  console.log("Primer elemento:", cola.frente()); // Muestra: 20
  console.log("Tamaño de la cola:", cola.tamaño()); // Muestra: 1
  cola.desencolar(); // Elimina 20
  cola.desencolar(); // La cola está vacía
  