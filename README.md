# Start Proyect

Este proyecto es creado con Vite, intalacion
> npm init vite@latest


Iniciar proyecto termiando 
1. Instalar Dependencias
    > npm install
2. Correr servidor
    > npm run dev

## JSX (JavaScript Syntax Extencion)
* Extencion creado por META para React
* Lenguaje de templates que muestra el HTML pero tiene todas las funciones de JS
* Una vez compilado son archivos de JS con funciones y objetos (en el Bundle)
* Es estricto con la escritura del HTML dentro
* Cada componente debe tener un return 
* Cuando la tag no tiene etiqueta se cierre se usa /> ejem: ` <img src="alguna-imagen.jpg" /> `
* Todas las funciones o componenetes deben tener un return
* El return debe contener como maximo un elemento en el nivel superior
* En el caso de Vite es necesario usar .jsx en los archivos, lo cual no es necesario en otros drivers

### Otros templates de codigo
1. CreateReactApp
2. Next

## NOTAS

1. **Vite**
    * Vite es un manejador de proyectos que instalara una plantilla, puede ser usado para react, vue, svelt y mas...
2. **Estrucura React**
    * React es generalmente usado de forma micro-referencial o atomic designe, esto permite mayor escalabilidad en los proyectos.
    * En React Pudes definir una hoja de estilos para un componente , se les llama modulos
    * Los componentes y los archivos de los componentes deben de ser nombrados con mayuscula en la primera letra, es requerido para las herramientas usadas 
    * Todos lo componenetes son funciones
3. **CSS en React**
    *Formas de integrar hay muchas, entre ellas:*
        * CSS Plano (archivo css)
        * Framework CSS (tailwind, boostrap etc)
        * Modulos con CSS
        * Componentes 
        * SASS
        * Styled Components
4. **Hook**
    * Uno de las APIs mas importantes de React, que permite crear aplicaciones de manera sencilla
    * Nos permite controlar el estado de la aplicacion
    *Tipos:*
        * UseState
        * UseEffect
        * UseContext
        * Otros: useReducer, useCallback, useMemo, useRef, useImperativeHandle, useLayoutEffect, useDebugValue
    * Se pueden crear Hooks propios
    *Reglas:*
        * Deben se colocarce en la parte superior del componente y antes de otras funciones
        * No deben estar dentro de condicionales, y deben estar antes del return
5. **State - Estado en React**
    * Es la pieza centrar de react
    * Es donde se encuentra nuestra aplicacion
    * Este estado es guardado en una elemento integrado llamado state
    * Los states creados solo pueden ser usados en el mismo componente
6. **Eventos en React**
    * Son muy parecidos a los de JS en nombre
    * Se escriben en formato camelCase
    * se escriben como etiqueta de HTML con un leve cambion en la sintax
    `<button onClick={descargarPedido()}> Descargar </button>`
    * En funciones submit
    `<form onSubmit={handleSubmit}>`
7. **Props**
    * Son para integrar una tipo herencia en los States y que estos states puedan ser usados en otros componentes 
    * Solo puden ser heredados y no pueden pasar de hijos a padres 
    *Sintax:*
        * Componente Padre
            `<Header nombreProp = {datos o funciones } />`
        * Componente Hijo
            `cosnt Componemt = ({prop}) => { <something{prop}> }`
    * Se puede pasar mucha informacion via props a un componente 
    * Cada nivel de componentes debera tomar y pasar el prop hacia otros componenetes
    * Para evitar usar este tipo de herencia existe Redux o Context 
8. **Mas Sobre Props**
    * Otra forma de integrar un prop
    * De esta manera se pasara toda la info que se le pase al prop
    * Se usa la palabra recervada en React 'children' :
        * En el Hijo
        `const Cmponent = ({children}) => {}`
        * En el Padre
        `{<Prop> Todo lo que se le quiera pasar </Prop>}`


### Dependencias Adicionales Para CSS

Usamos PostCSS con Tailwind

`npm install -D tailwindcss@latest postcss@latest autoprefixer@latest`

Crear archivos necesarios

`npx tailwindcss init -p`

