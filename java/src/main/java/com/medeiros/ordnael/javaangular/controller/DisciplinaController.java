package com.medeiros.ordnael.javaangular.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.medeiros.ordnael.javaangular.core.controller.ControllerCRUDGeneric;
import com.medeiros.ordnael.javaangular.models.Disciplina;

@RestController
@RequestMapping("/disciplina")
public class DisciplinaController extends ControllerCRUDGeneric<Disciplina> {

	public Class<Disciplina> getClasse() {
		return Disciplina.class;
	}
	
}
