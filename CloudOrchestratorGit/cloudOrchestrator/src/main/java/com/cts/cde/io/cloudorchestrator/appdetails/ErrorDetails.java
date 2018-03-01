package com.cts.cde.io.cloudorchestrator.appdetails;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class ErrorDetails {
 
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	
	@Column(name="log_id")
	 private long id;
	
	@Column(name="APP_ID")
	  private String applicationId;
	
	  @Column(name="MESSAGE_TYPE")
	  private String messageType;
	  
	  @Column(name="MESSAGE", length=2500)
	  private String message;
	  
	  
	  @Column(name="TIME_STAMP")
	  @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="MM-dd-yyyy")
	  private String timestamp;
	  
	  @Column(name="Source_Instance")
	  private String sourceInstance;
	  
	
	  @Column(name="Source_Type")
	  private String sourceType;


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getApplicationId() {
		return applicationId;
	}


	public void setApplicationId(String applicationId) {
		this.applicationId = applicationId;
	}


	public String getMessageType() {
		return messageType;
	}


	public void setMessageType(String messageType) {
		this.messageType = messageType;
	}


	public String getMessage() {
		return message;
	}


	public void setMessage(String message) {
		this.message = message;
	}


	public String getTimestamp() {
		return timestamp;
	}


	public void setTimestamp(String timestamp) {
		this.timestamp = timestamp;
	}


	public String getSourceInstance() {
		return sourceInstance;
	}


	public void setSourceInstance(String sourceInstance) {
		this.sourceInstance = sourceInstance;
	}


	public String getSourceType() {
		return sourceType;
	}


	public void setSourceType(String sourceType) {
		this.sourceType = sourceType;
	}


	public ErrorDetails(String applicationId, String messageType, String message, String timestamp,
			String sourceInstance, String sourceType) {
		super();
		this.applicationId = applicationId;
		this.messageType = messageType;
		this.message = message;
		this.timestamp = timestamp;
		this.sourceInstance = sourceInstance;
		this.sourceType = sourceType;
	}


	public ErrorDetails() {
		super();
	}


	@Override
	public String toString() {
		return "ErrorDetails [applicationId=" + applicationId + ", messageType=" + messageType + ", message=" + message
				+ ", timestamp=" + timestamp + ", sourceInstance=" + sourceInstance + ", sourceType=" + sourceType
				+ "]";
	}
	  

	  
}
