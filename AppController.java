package com.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class AppController {
	@Autowired
	RestaurantRepositery repository;
	
	@GetMapping("restaurants")
	public List<Restaurant> getRestaurants(){
		return (List<Restaurant>) repository.findAll();
		
	}

	@PostMapping("restaurants")
	public Restaurant saveRestaurant (@RequestBody Restaurant restaurant) {
		return repository.save(restaurant);
		
	}
	
    @DeleteMapping("restaurants")
	public String deleteRestaurant (@RequestBody Restaurant restaurant) {
		repository.delete(restaurant);
		return "OK";
    }
}
