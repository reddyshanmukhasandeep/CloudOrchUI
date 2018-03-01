package com.cts.cde.io.cloudorchestrator.appdetails;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonFormat;



@Entity
public class AppDetails {
     
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="SNo")
	 private long id;
	
	  @Column(name="APP_NAME")
	  private String appName;
	  
	  
	  @Column(name="TIME_STAMP")
	  @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="MM-dd-yyyy")
	  private String timestamp;
	  
	  @Column(name="ORG_NAME")
	  private String orgName;
	  
	  @Column(name="space_Name")
	  private String spaceName;
      
	  
	  @Column(name="EXCEPTION_TYPE")
	  private String exceptionType;
	  
	  @Column(name="MESSAGE", length=2500)
	  private String message;
	  
	  @Column(name="APP_ID")
	  private String appId;
	  
	  @OneToMany( cascade = CascadeType.ALL)
	  @JoinColumn(name = "id" )
	  private List<ErrorDetails> logs; 
		public AppDetails(){
			
		}
		public long getId() {
			return id;
		}
		public void setId(long id) {
			this.id = id;
		}
		public String getAppName() {
			return appName;
		}
		public void setAppName(String appName) {
			this.appName = appName;
		}
		public String getTimeStamp() {
			return timestamp;
		}
		public void setTimeStamp(String timeStamp) {
			this.timestamp = timeStamp;
		}
		public String getOrgName() {
			return orgName;
		}
		public void setOrgName(String orgName) {
			this.orgName = orgName;
		}
		public String getSpaceName() {
			return spaceName;
		}
		public void setSpaceName(String spaceName) {
			this.spaceName = spaceName;
		}
		public String getExceptionType() {
			return exceptionType;
		}
		public void setExceptionType(String exceptionType) {
			this.exceptionType = exceptionType;
		}
		public String getMessage() {
			return message;
		}
		public void setMessage(String message) {
			this.message = message;
		}
		public String getAppId() {
			return appId;
		}
		public void setAppId(String appId) {
			this.appId = appId;
		}
		public List<ErrorDetails> getLogs() {
			return logs;
		}
		public void setLogs(List<ErrorDetails> logs) {
			this.logs = logs;
		}
		public AppDetails(String appName, String timeStamp, String orgName, String spaceName, String exceptionType,
				String message, String appId, List<ErrorDetails> logs) {
			super();
			this.appName = appName;
			this.timestamp = timeStamp;
			this.orgName = orgName;
			this.spaceName = spaceName;
			this.exceptionType = exceptionType;
			this.message = message;
			this.appId = appId;
			this.logs = logs;
		}
		@Override
		public String toString() {
			return "AppDetails [appName=" + appName + ", timeStamp=" + timestamp + ", orgName=" + orgName
					+ ", spaceName=" + spaceName + ", exceptionType=" + exceptionType + ", message=" + message
					+ ", appId=" + appId + ", logs=" + logs + "]";
		}
		
		
		
		
		
		   
	 }
