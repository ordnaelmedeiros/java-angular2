package com.medeiros.ordnael.javaangular.disciplina.resources;

import javax.persistence.EntityManager;

import com.medeiros.ordnael.javaangular.core.JPAUtils;
import com.medeiros.ordnael.javaangular.models.Disciplina;

public class DisciplinaResource {

	public void gravar(Disciplina disciplina) throws Exception {
		
		EntityManager em = null;
		
		try {
			
			em = JPAUtils.createEntityManager();
			em.getTransaction().begin();
			em.persist(disciplina);
			em.getTransaction().commit();
			
		} catch (Throwable e) {
			
			em.getTransaction().rollback();
			throw e;
			
		} finally {
			em.close();
		}
		
	}
	
}
