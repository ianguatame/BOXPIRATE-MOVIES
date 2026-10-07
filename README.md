# Catálogo de películas

Aplicación web estilo Netflix/IMDb. los datos viven en `src/data/movies.js`.

**Grupo**: Ian Guatame - Ivan Romero

## Funcionalidades

- Catálogo con 12 películas: póster, título, género, año, calificación y descripción.
- Buscador por título que se actualiza mientras se escribe.
- Filtros por género, año, calificación mínima y solo favoritas, combinables con el buscador.
- Detalle de cada película, que se cierra con el botón ×, haciendo clic fuera o con la tecla `Esc`.
- Favoritos: agregar, quitar, ver el panel "Mis favoritas" y filtrar solo favoritas.
- Valoración personal de 1 a 5 estrellas.
- Mensaje cuando no hay resultados.

## Tecnologías

React, JavaScript (con React Compiler), Vite y ESLint.

## Cómo ejecutarlo

Requisito: tener instalado [Node.js](https://nodejs.org/).

```bash
git clone <URL-DEL-REPOSITORIO>
cd Movies
npm install
npm run dev
```

Luego abre `http://localhost:5173/` en el navegador.

## Estructura del proyecto


src/
├── components/
│   ├── FavoriteButton.jsx
│   ├── Favorites.jsx
│   ├── Filters.jsx
│   ├── Header.jsx
│   ├── MovieCard.jsx
│   ├── MovieDetail.jsx
│   ├── MovieList.jsx
│   ├── NoResults.jsx
│   ├── SearchBar.jsx
│   └── StarRating.jsx
├── data/
│   └── movies.js
├── utils/
│   ├── filterMovies.js
│   ├── getFilterOptions.js
│   └── placeholder.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx

