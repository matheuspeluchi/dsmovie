package com.mpr.dsmovie.services;

import com.mpr.dsmovie.dto.MovieDTO;
import com.mpr.dsmovie.entities.Movie;
import com.mpr.dsmovie.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class MovieService {

    @Autowired
    private MovieRepository repository;

    public Page<MovieDTO> findAll(Pageable pageable) {
        Page<Movie> result = this.repository.findAll(pageable);
        return result.map(MovieDTO::new);
    }

    public MovieDTO findById(Long id) {
        Movie result = this.repository.findById(id).get();
        return new MovieDTO(result);
    }

}
