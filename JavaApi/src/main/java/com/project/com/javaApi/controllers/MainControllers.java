package com.project.com.javaApi.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.project.com.javaApi.models.Car;
import com.project.com.javaApi.models.DisneyCharacter;
import com.project.com.javaApi.models.Squish;
import com.project.com.javaApi.services.CarServ;
import com.project.com.javaApi.services.DisneyServ;
import com.project.com.javaApi.services.SquishServ;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class MainControllers {
	
	@Autowired
	private SquishServ squishServ;
	
	@Autowired 
	private CarServ carServ;
	
	@Autowired 
	private DisneyServ disneyServ;
	
	@GetMapping(path="/", produces="application/json")
	public List<Squish> showSquish() {
		return squishServ.getAll();
	}
	
	@GetMapping(path="/cars", produces="application/json")
	public List<Car> showCars() {
		return carServ.getAll();
	}
	
	@GetMapping(path="/bulding/characters", produces="application/json")
	public List<DisneyCharacter> showCharacters() {
		return disneyServ.getAll();
	}
	
	@RequestMapping(path = "/", produces="application/json", method = RequestMethod.POST)
	public Squish addSquish(@RequestBody Squish squish) {
		return squishServ.create(squish);
	
	}
	
	@DeleteMapping(path= "/delete/{id}" , produces="application/json")
    public void deleteSquish(@PathVariable("id") Long id) {
		squishServ.deleteSquish(id);
    }
	
	
	@RequestMapping(path = "/cars", produces="application/json", method = RequestMethod.POST)
	public Car addCar(@RequestBody Car car) {
		return carServ.create(car);
	
	}
	
	
	@DeleteMapping(path= "/cars/delete/{id}" , produces="application/json")
    public void deleteCar(@PathVariable("id") Long id) {
		carServ.deleteCar(id);
    }
	
	
	@RequestMapping(path = "/bulding/characters", produces="application/json", method = RequestMethod.POST)
	public DisneyCharacter addCharacters(@RequestBody DisneyCharacter disneyCharacters) {
		return disneyServ.create(disneyCharacters);
	
	}
	
	
	@DeleteMapping(path= "/bulding/characters/delete/{id}" , produces="application/json")
    public void delete(@PathVariable("id") Long id) {
		disneyServ.deleteCharacter(id);
    }
	
	

}
