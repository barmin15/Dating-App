package com.armin.datingapp;

import com.armin.datingapp.config.DatabaseConfig;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication()
@RequiredArgsConstructor
public class DatingAppApplication {

	private final DatabaseConfig databaseConfig;
	public static void main(String[] args) {
		SpringApplication.run(DatingAppApplication.class, args);
	}

	@PostConstruct
	public void insertPeopleInDatabase(){
		//databaseConfig.registerUsers();
	}
}
