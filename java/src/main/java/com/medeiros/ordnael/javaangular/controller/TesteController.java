package com.medeiros.ordnael.javaangular.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TesteController {

	@RequestMapping(value = "/teste", method = RequestMethod.GET)
	public Teste get() {
		System.out.println("Função teste");
		return new Teste(1l, "ping");
	}
	
}

class Teste {
	
	private Long testeId;
	private String descricao;
	
	public Long getTesteId() {
		return testeId;
	}
	public void setTesteId(Long testeId) {
		this.testeId = testeId;
	}
	
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
	public Teste(Long testeId, String descricao) {
		this.testeId = testeId;
		this.descricao = descricao;
	}
	
}