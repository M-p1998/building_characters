package com.project.com.javaApi.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.com.javaApi.models.Car;
import com.project.com.javaApi.repositories.CarRepo;


@Service
public class CarServ {
	@Autowired
	private CarRepo carRepo;
	
	public List<Car> getAll(){
		return carRepo.findAll();
	}
	
	
	public Car create(Car newCar) {
		return carRepo.save(newCar);
	}

}