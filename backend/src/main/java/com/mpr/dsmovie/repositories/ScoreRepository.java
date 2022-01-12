package com.mpr.dsmovie.repositories;

import com.mpr.dsmovie.entities.Score;
import com.mpr.dsmovie.entities.ScorePK;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
