package com.project.com.javaApi.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.com.javaApi.models.DisneyCharacter;
import com.project.com.javaApi.repositories.DisneyRepo;


@Service
public class DisneyServ {
	
	@Autowired
	private DisneyRepo disneyRepo;
	
	
	
	public List<DisneyCharacter> getAll(){
		return disneyRepo.findAll();
	}
	
	
	public DisneyCharacter create(DisneyCharacter newDisney) {
		return disneyRepo.save(newDisney);
	}

	public void deleteCharacter(Long id) {
		this.disneyRepo.deleteById(id);
	}
	
	
	

}
