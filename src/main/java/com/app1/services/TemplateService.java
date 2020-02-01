/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.app1.services;

import java.io.IOException;
import java.util.Properties;

import org.apache.velocity.app.Velocity;
import org.springframework.context.ResourceLoaderAware;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;

public class TemplateService implements ResourceLoaderAware{
	protected static org.apache.log4j.Logger logger = org.apache.log4j.Logger.getLogger(TemplateService.class);

	public String templateDir = "/WEB-INF/templates/";
	private ResourceLoader resourceLoader;
	
	public void init(){
		Resource f = this.resourceLoader.getResource(getTemplateDir());
		String dir ="" ;
		
		try {
			dir = f.getFile().getAbsolutePath();
		} catch (IOException e1) {
			logger.error("Error getting file from resource in template service");
		}
		
		Properties p = new Properties();
		p.setProperty("resource.loader","file");
		p.setProperty("file.resource.loader.class","org.apache.velocity.runtime.resource.loader.FileResourceLoader");
	    p.setProperty("file.resource.loader.path", dir);
	    p.setProperty("directive.foreach.counter.name" , "velocityCount");
	    p.setProperty("directive.foreach.iterator.name" ,"velocityHasNext");
	    p.setProperty("directive.foreach.counter.initial.value" , "0");
	  
	    logger.info("Initializing Velocity Engine with dir " + getTemplateDir());
	    
	    try {
			Velocity.init(p);
		} catch (Exception e) {
			logger.error("Error Initalizing velocity template engine");
		}

	}

	public String getTemplateDir() {
		return templateDir;
	}

	public void setTemplateDir(String templateDir) {
		this.templateDir = templateDir;
	}

	public void setResourceLoader(ResourceLoader loader) {
		this.resourceLoader = loader;
		
	}
	public ResourceLoader getResourceLoader() {
		return resourceLoader;
	}
}
