package com.carsmoviesinventory.app.Controllers;

import com.carsmoviesinventory.app.Services.CarsMoviesService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RootController {

    private final CarsMoviesService carsMoviesService;

    public RootController(CarsMoviesService carsMoviesService) {
        this.carsMoviesService = carsMoviesService;
    }

    @GetMapping("/")
    public ResponseEntity<?> home() {
        // Puedes ajustar el paginado según lo que desees mostrar
        return carsMoviesService.getAllMovies(null);
    }
}