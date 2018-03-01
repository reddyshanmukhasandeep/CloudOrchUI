//package com.cts.cde.io.cloudorchestrator.appdetails;
//
//import static org.junit.Assert.assertThat;
//import static org.mockito.BDDMockito.given;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import org.junit.Before;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.mockito.Mockito;
//import org.mockito.MockitoAnnotations;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.http.MediaType;
//import org.springframework.test.context.ContextConfiguration;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.MvcResult;
//import org.springframework.test.web.servlet.ResultMatcher;
//import org.springframework.test.web.servlet.setup.MockMvcBuilders;
//
//import com.cts.cde.io.cloudorchestrator.CloudOrchestratorApplication;
//import com.google.gson.Gson;
//import com.jayway.jsonpath.DocumentContext;
//import com.jayway.jsonpath.JsonPath;
//
//
//@RunWith(SpringRunner.class)
//@ContextConfiguration(classes = CloudOrchestratorApplication.class)
//@WebMvcTest(value = AppDetailsController.class, secure = false)
//
//public class AppDetailsControllerTest {
//	public static final String CONTENT_TYPE = "Content-type";
//	public static final ResultMatcher OK = status().isOk();
//	public static final ResultMatcher RESPONSE_FORMAT = content().contentType(MediaType.APPLICATION_JSON_UTF8);
//	
//	public static final String PATH = "/appdetails" ;
//	private String appName = "appName";
//	private String timeStamp = "2018-02-20 00:00 AM GMT+5";
//	
//	private String exceptionType = "crash";
//	private String message = "app got crashed";
//	private static final int SOME_ID = 1;
//	
//	@Autowired
//	private MockMvc mockMvc;
//
//	@Autowired
//	AppDetailsController appDetailsController;
//
//	@MockBean
//	AppDetailsService service;
//	
//	private AppDetails appDetails = new AppDetails( SOME_ID,appName,timeStamp,exceptionType,message);
//	
//	@Before
//	public void setUp() throws Exception {
//	
//		this.mockMvc = MockMvcBuilders.standaloneSetup(this.appDetailsController).build();
//		MockitoAnnotations.initMocks(this);
//	}
//	
//	@Test
//	public void thatGetListOfAppDetailsWhenFetchAppDetailsList() throws Exception {
//
//		List<AppDetails> appDetailsList = new ArrayList<AppDetails>();
//		appDetailsList.add(appDetails);
//		given(service.findAll()).willReturn(appDetailsList);
//
//		ResultMatcher hasRecord = jsonPath("$").isArray();
//		MvcResult result = this.mockMvc
//				.perform(get(PATH).accept(MediaType.APPLICATION_JSON).header(CONTENT_TYPE, MediaType.APPLICATION_JSON))
//				.andExpect(OK).andExpect(RESPONSE_FORMAT).andExpect(hasRecord).andReturn();
//
//		String jsonString = result.getResponse().getContentAsString();
//		DocumentContext context = JsonPath.parse(jsonString);
//		int length = context.read("$.length()");
//		assertThat(length, org.hamcrest.CoreMatchers.is(1));
//	}
//	
//	@Test
//	public void thatCreateNewChallengeWhenPassingNewChallengeInformation() throws Exception {
//		given(service.saveChallenge(Mockito.any(AppDetails.class))).willReturn(appDetails);
//		String content = new Gson().toJson(appDetails);
//		this.mockMvc.perform(post(PATH).contentType(MediaType.APPLICATION_JSON).content(content)).andExpect(OK)
//				.andExpect(jsonPath("$.appName").value(appName)).andReturn();
//		}
//	
//}
