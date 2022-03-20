const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const movies = require("../sample.json");

router.get('/', (req, res) => {
    res.json(movies);
});

router.post('/', (req, res) => {
    const { title, director, year, rating } = req.body; //GUARDA CADA PROPIEDAD EN UNA CONSTANTE CON SU MISMO NOMBRE
    if(title && director && year && rating){ //VALIDACION DE TODOS LOS DATOS RECIBIDOS
        const id = movies.length + 1; //SE CREA EL ID ACTUAL PARA LA NUEVA PELICULA
        const newMovie = {...req.body, id}; //SE CREA UN OBJETO CON TODAS LAS PROPIEDADES DEL OBJETO RECIBIDO MAS EL ID
        
        movies.push(newMovie); //SE GUARDA TEMPORALMENTE LA NUEVA PELICULA EN EL ARRAY DE LAS PELICULAS
        res.json(movies); //SE ENVIA LA LISTA ACTUALIZADA DE LAS PELICULAS
    }else{
        res.status(500).json({error: 'There was an error. Wrong Request!'}); //SI ESTA ALGUN DATO MAL O FALTANTE SE ENVIA UN MENSAJE AL CLIENTE
    }
});

router.put("/:id", (req,res) => {
    const {id} = req.params;
    const {title,director,year,rating} = req.body;
    if(title && director && year && rating){
        _.each(movies, (movie, i) => {
            if(movie.id == id){
                movie.title = title,
                movie.director = director,
                movie.year = year,
                movie.rating = rating
            }
        });
        res.json(movies);
    }else{
        res.status(500).json({error: 'The Was a Error. Insert all Data is requerited!'});
    }
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    _.each(movies, (movie, i) => {
        console.log(movie.id);
        if(movie.id == id){
            movies.splice(i, 1);
        }
    });
    res.json(movies);
});

module.exports = router;