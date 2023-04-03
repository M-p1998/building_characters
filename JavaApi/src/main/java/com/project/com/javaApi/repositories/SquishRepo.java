package com.project.com.javaApi.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.project.com.javaApi.models.Squish;

@Repository
public interface SquishRepo extends CrudRepository<Squish, Long>{
	
	List<Squish> findAll();

}
