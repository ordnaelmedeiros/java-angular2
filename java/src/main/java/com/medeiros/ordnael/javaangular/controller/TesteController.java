package com.medeiros.ordnael.javaangular.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.medeiros.ordnael.javaangular.core.controller.Controller;

@RestController
public class TesteController extends Controller {

	@RequestMapping(value = "/ping", method = RequestMethod.GET)
	public Teste ping() throws Exception {
		
		System.out.println("Função teste");
		return new Teste(1l,"ping");
		
	}

	@RequestMapping(value = "/erro", method = RequestMethod.GET)
	public Teste erro() throws Exception {
		
		throw new Exception("Erro Teste");
		
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