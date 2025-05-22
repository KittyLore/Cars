package com.carsmoviesinventory.app.Repositories;

import com.carsmoviesinventory.app.Entities.CarsMoviesEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CarsMoviesRepository extends JpaRepository<CarsMoviesEntity, UUID>{

    Page<CarsMoviesEntity> findAllByCarMovieNameContaining(String carMovieName, Pageable pageable);

}