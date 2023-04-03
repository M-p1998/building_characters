package com.project.com.javaApi.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.com.javaApi.models.Squish;
import com.project.com.javaApi.repositories.SquishRepo;

@Service
public class SquishServ {
	@Autowired
	private SquishRepo squishRepo;
	
	
	
	public List<Squish> getAll(){
		return squishRepo.findAll();
	}
	
	
	public Squish create(Squish newSquish) {
		return squishRepo.save(newSquish);
	}

}
