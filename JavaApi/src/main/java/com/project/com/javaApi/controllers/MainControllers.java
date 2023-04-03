package com.project.com.javaApi.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.project.com.javaApi.models.Car;
import com.project.com.javaApi.models.Squish;
import com.project.com.javaApi.services.CarServ;
import com.project.com.javaApi.services.SquishServ;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class MainControllers {
	
	@Autowired
	private SquishServ squishServ;
	
	@Autowired 
	private CarServ carServ;
	
	@GetMapping(path="/", produces="application/json")
	public List<Squish> showSquish() {
		return squishServ.getAll();
	}
	
	@GetMapping(path="/cars", produces="application/json")
	public List<Car> showCars() {
		return carServ.getAll();
	}
	
	@RequestMapping(path = "/", produces="application/json", method = RequestMethod.POST)
	public Squish addSquish(@RequestBody Squish squish) {
		return squishServ.create(squish);
	
	}
	
	@RequestMapping(path = "/cars", produces="application/json", method = RequestMethod.POST)
	public Car addCar(@RequestBody Car car) {
		return carServ.create(car);
	
	}
	
	
	

}
