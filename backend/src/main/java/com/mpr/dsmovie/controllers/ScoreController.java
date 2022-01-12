package com.mpr.dsmovie.controllers;


import com.mpr.dsmovie.dto.MovieDTO;
import com.mpr.dsmovie.dto.ScoreDTO;
import com.mpr.dsmovie.services.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequestMapping(value = "/scores")
public class ScoreController {

    @Autowired
    private ScoreService service;

    @PutMapping()
    public MovieDTO saveScore(@RequestBody ScoreDTO dto){
        return service.saveScore(dto);
    }
}
