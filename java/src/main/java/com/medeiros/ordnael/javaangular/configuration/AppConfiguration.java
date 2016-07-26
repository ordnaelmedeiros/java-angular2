package com.medeiros.ordnael.javaangular.configuration;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = "com.medeiros.ordnael.javaangular.controller")
public class AppConfiguration extends WebMvcConfigurerAdapter {

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		
		/*
		 'Access-Control-Allow-Origin': 'https://192.168.50.150:3333',
	        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
	        'Access-Control-Allow-Headers': 'X-Requested-With',
	        'Access-Control-Allow-Credentials': 'true'
	        	*/
		
		registry.addMapping("/**")
			.allowedOrigins("*")
			.allowedMethods("GET", "POST", "OPTIONS", "PUT", "PATCH", "DELETE")
			.allowedHeaders("X-Requested-With")
			//.exposedHeaders("header1", "header2")
			.allowCredentials(false).maxAge(3600);
	}
	
}
