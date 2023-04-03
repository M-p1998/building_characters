package com.project.com.javaApi.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.project.com.javaApi.models.Car;
import com.project.com.javaApi.models.Squish;

@Repository
public interface CarRepo extends CrudRepository<Car, Long>{
	
	List<Car> findAll();

}
