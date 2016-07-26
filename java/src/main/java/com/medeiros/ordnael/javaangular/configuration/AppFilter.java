package com.medeiros.ordnael.javaangular.configuration;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.xml.ws.Response;

public class AppFilter implements Filter {

	@Override
	public void init(FilterConfig config) throws ServletException {
		System.out.println("Aplicação Iniciada");
	}
	
	@Override
	public void destroy() {
		System.out.println("Aplicação Finalizada");
	}

	@Override
	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
		System.out.println("Aplicação doFilter antes");
		/*
		 'Access-Control-Allow-Origin': 'https://192.168.50.150:3333',
	        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
	        'Access-Control-Allow-Headers': 'X-Requested-With',
	        'Access-Control-Allow-Credentials': 'true'
	        	*/
		
		req.getServletContext().setAttribute("Access-Control-Allow-Origin", "*");
		
		chain.doFilter(req, res);
		System.out.println("Aplicação doFilter depois");
	}

}
