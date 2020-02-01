/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.app1.views;


import java.io.Writer;
import java.util.Locale;
import java.util.Map;
import java.util.TimeZone;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.velocity.app.Velocity;
import org.apache.velocity.context.Context;
import org.apache.velocity.exception.MethodInvocationException;
import org.apache.velocity.exception.ParseErrorException;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.apache.velocity.tools.generic.DateTool;
import org.apache.velocity.tools.generic.MathTool;
import org.apache.velocity.tools.generic.NumberTool;
import org.springframework.web.servlet.View;

public class VelocityTemplateView implements View {

	protected static org.apache.log4j.Logger logger = org.apache.log4j.Logger.getLogger(VelocityTemplateView.class);
	private String templateName;
	private String contentType;
	
	public VelocityTemplateView(String templateName){
		this.templateName = templateName;
	}
	
	public void render(Map model, HttpServletRequest request, HttpServletResponse response) throws Exception {

		response.setContentType(this.getContentType());
		response.setHeader("Cache-Control", "public");

		Context context =(Context) model.get("context");
		context.put("date", new DateTool());
		context.put("number", new NumberTool());
		context.put("math", new MathTool());
		context.put("localeUS", Locale.US);
		context.put("timeZoneGMT", TimeZone.getTimeZone("GMT"));
		context.put("timeZoneEST", TimeZone.getTimeZone("EST"));
		
		String templatePath = (String) context.get("templatePath");
		if(templatePath == null || templatePath.length() == 0){
			templatePath = "default";
		}
		if (context != null) {
			Writer w = response.getWriter();
			 try {
				  Velocity.mergeTemplate(templatePath + "/"+templateName,"UTF-8", context, w );
			} catch (ResourceNotFoundException e) {
				logger.warn("Error: Template [" + templateName + "] not found." + e.getMessage(), e);
			} catch (ParseErrorException e) {
				logger.warn("Error: Parsing Template [" + templateName + "]." + e.getMessage(), e);
			} catch (MethodInvocationException e) {
				logger.warn("Error: Method Invocation Error with Template [" + templateName + "]." + e.getMessage(), e);
			} catch (Exception e) {
				logger.warn("Error: General Exception with Template [" + templateName + "]." + e.getMessage(), e);
			}
		}
	}
	
	public void render(Map model, HttpServletRequest request, HttpServletResponse response, boolean extended) throws Exception {

		response.setContentType(this.getContentType());
		response.setHeader("Cache-Control", "public");

		Context context =(Context) model.get("context");
		if (extended) {
			context.put("date", new DateTool());
			context.put("number", new NumberTool());
			context.put("math", new MathTool());
			context.put("localUS", Locale.US);
			context.put("timeZoneGMT", TimeZone.getTimeZone("GMT"));
			context.put("timeZoneEST", TimeZone.getTimeZone("EST"));
		}
		String firmName = (String)context.get("firmName");
		if(firmName == null || firmName.length() == 0){
			firmName="default";
		}		
		if (context != null) {
			Writer w = response.getWriter();
			 try {
				  Velocity.mergeTemplate(firmName + "/"+templateName,"UTF-8", context, w );
			} catch (ResourceNotFoundException e) {
				logger.warn("Error: Template [" + templateName + "] not found." + e.getMessage(), e);
			} catch (ParseErrorException e) {
				logger.warn("Error: Parsing Template [" + templateName + "]." + e.getMessage(), e);
			} catch (MethodInvocationException e) {
				logger.warn("Error: Method Invocation Error with Template [" + templateName + "]." + e.getMessage(), e);
			} catch (Exception e) {
				logger.warn("Error: General Exception with Template [" + templateName + "]." + e.getMessage(), e);
			}
		}
	}
	
	public String getTemplateName() {
		return templateName;
	}
	public void setTemplateName(String templateName) {
		this.templateName = templateName;
	}

	public void setContentType(String contentType) {
		this.contentType = contentType;
	}

	public String getContentType() {
		if(contentType == null || contentType.length() <=0){
			return "text/plain";
		}else{
			return contentType;
		}
	}


}
