# WORDLE
WORDLE es una aplicación móvil desarrollada en React Native que desafía a los usuarios a adivinar palabras secretas. La aplicación proporciona una interfaz interactiva donde los jugadores pueden formar palabras tocando las letras disponibles y luego ir descubriendo la palabra correcta con las pistas.

## Capturas de Pantalla

![image](https://github.com/NicoCastaneda/WORDLE/assets/101200949/c3273c7d-c3cc-471d-81ea-b7ae7461ac86)

![image](https://github.com/NicoCastaneda/WORDLE/assets/101200949/5d9024fa-48bb-4d82-be34-9bf64bef1044)

![image](https://github.com/NicoCastaneda/WORDLE/assets/101200949/b465221a-0e63-472e-ac1f-16dcf972aa96)

![image](https://github.com/NicoCastaneda/WORDLE/assets/101200949/612d1001-db10-4900-9cf9-d8ef92fca5cb)

![image](https://github.com/NicoCastaneda/WORDLE/assets/101200949/a3c53100-fbdc-4530-a7d8-5e3f63f776c0)

## Características
- Juego de palabras interactivo.
- Estadísticas del juego que muestran el total de juegos, palabras adivinadas, total de puntos y promedio de puntos por juego.
- Interfaz de usuario intuitiva y atractiva.
- Teclado virtual para seleccionar letras.
- Modal de victoria o derrota al adivinar o no la palabra secreta.

## Instalación
1. Clona este repositorio: `git clone https://github.com/NicoCastaneda/WORDLE.git`.
2. Instala las dependencias: `npm install`.
3. Inicia la aplicación con expo: `npx expo start`.

## Tecnologías Utilizadas
- React Native
- AsyncStorage
- React Navigation
- TypeScript

## Cómo Funciona
La aplicación presenta tres pantallas principales:

1. **Inicio**: La pantalla de inicio da la bienvenida al usuario y proporciona información sobre cómo jugar.

2. **Juego**: Aquí es donde los usuarios pueden interactuar con el juego.

3. **Estadísticas**: Esta pantalla muestra estadísticas sobre el progreso del usuario en el juego, incluyendo el total de juegos jugados, palabras adivinadas, total de puntos acumulados y el promedio de puntos por juego.

## Estructura del Proyecto
- **App.js**: Archivo principal que configura la navegación y el proveedor del contexto del juego.
- **AppNavigator.tsx**: Configuración de la navegación utilizando `BottomTabNavigator`.
- **GameContext.tsx**: Proveedor del contexto del juego que almacena la palabra seleccionada para adivinar.
- **GameScreen.tsx**: Pantalla principal del juego que permite al usuario interactuar con la palabra secreta.
- **StatsScreen.tsx**: Pantalla que muestra las estadísticas del juego.
- **HomeScreen.tsx**: Pantalla de inicio que da la bienvenida al usuario y proporciona información sobre cómo jugar.
- **VirtualKeyboard.tsx**: Componente que muestra un teclado virtual para seleccionar letras.
- **GameGrid.tsx**: Componente que muestra la cuadrícula de letras y los intentos del usuario.

## Flujo del Juego
1. El usuario selecciona una letra tocándola en el teclado virtual.
2. La letra seleccionada se muestra en la pantalla de juego.
3. Una vez que el usuario completa una palabra, puede confirmarla tocando el botón "ENTER".
4. El juego verifica si la palabra es correcta y resalta las letras en verde, amarillo o gris, de acuerdo a si está, está en la posición incorrecta o no está respectivamente.
5. Se muestra en un modal si el jugador ganó o perdió
6. Se actualizan las estadísticas del juego.

## Autor
NICOLÁS MAURICIO CASTAÑEDA OLIVEROS

