//package com.cts.cde.io.cloudorchestrator.appdetails;
//
//import static org.junit.Assert.*;
//import static org.mockito.Mockito.when;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import org.junit.Before;
//import org.junit.Test;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.MockitoAnnotations;
//
//public class AppDetailsServiceTest {
//	@InjectMocks
//	private AppDetailsService service;
//	private String appName = "appName";
//	private String timeStamp = "2018-02-20 00:00 AM GMT+5";
//	
//	private String exceptionType = "crash";
//	private String message = "app got crashed";
//	private static final int SOME_ID = 1;
//  
//	@Mock 
//	private AppDetailsRepository appDetailsRepository;
//	 
//	private AppDetails appDetails = new AppDetails(SOME_ID,appName,timeStamp,exceptionType,message);
//	
//	@Before
//	public void setup() {
//		
//		MockitoAnnotations.initMocks(this);
//	}
//	
//	@Test
//	public void thatGetListOfStagesWhenRequestAllStages() {
//		// Given
//		List<AppDetails> mockData = new ArrayList<AppDetails>();
//		mockData.add(appDetails);
//		when(appDetailsRepository.findAll()).thenReturn(mockData);
//		List<AppDetails> list = service.findAll();
//		assertEquals(1, list.size());
//	}
//	
//	@Test
//	public void thatCreateStageWhenPassingNewStageInfo() {
//		when(appDetailsRepository.save(appDetails)).thenReturn(appDetails);
//		AppDetails appdetails = service.saveChallenge(appDetails);
//		assertEquals(appdetails.getAppName(),appName);
//		assertEquals(appdetails.getTimeStamp(),timeStamp);
//		assertEquals(appdetails.getExceptionType(),exceptionType);
//		assertEquals(appdetails.getMessage(), message);
//	}
//}
