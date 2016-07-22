package com.medeiros.ordnael.javaangular.configuration;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = "com.medeiros.ordnael.javaangular.controller")
public class AppConfiguration {

}
