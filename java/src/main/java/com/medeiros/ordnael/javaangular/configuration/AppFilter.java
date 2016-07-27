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
		System.out.println("Aplica��o Iniciada");
	}
	
	@Override
	public void destroy() {
		System.out.println("Aplica��o Finalizada");
	}

	@Override
	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
		System.out.println("Aplica��o doFilter antes");
		
		chain.doFilter(req, res);
		
		System.out.println("Aplica��o doFilter depois");
	}

}
