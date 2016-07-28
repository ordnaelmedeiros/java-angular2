package com.medeiros.ordnael.javaangular.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.medeiros.ordnael.javaangular.disciplina.resources.DisciplinaResource;
import com.medeiros.ordnael.javaangular.models.Disciplina;

@RestController
public class DisciplinaController extends Controller {

	@RequestMapping(value = "/disciplina", method = RequestMethod.GET)
	public Disciplina gravar() throws Exception {
		
		DisciplinaResource resource = new DisciplinaResource();
		Disciplina disciplina = new Disciplina();
		disciplina.setDescricao("Teste");
		resource.gravar(disciplina);
		
		return disciplina;
		
	}
	
}
