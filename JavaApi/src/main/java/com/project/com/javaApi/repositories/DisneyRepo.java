package com.project.com.javaApi.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.project.com.javaApi.models.DisneyCharacter;

@Repository
public interface DisneyRepo extends CrudRepository<DisneyCharacter, Long>{
	
	List<DisneyCharacter> findAll();

}
