package com.cts.cde.io.cloudorchestrator.appdetails;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping(path="/appdetails")
public class AppDetailsController {
    
	
	
	
	@Autowired
	private AppDetailsService appdetailsService;
	
	
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<AppDetails>> getAllAppDetails() {
		List<AppDetails> appDetails = appdetailsService.findAll();
		return new ResponseEntity<List<AppDetails>>(appDetails, HttpStatus.OK);
	}
	
	@RequestMapping(method = RequestMethod.GET,value = "/{id}")
	public ResponseEntity<AppDetails> getAllAppDetailsById(@PathVariable("id") Long id) {
		AppDetails appDetails = appdetailsService.findById(id);
		return new ResponseEntity<AppDetails>(appDetails, HttpStatus.OK);
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<AppDetails> createAppDetails(@RequestBody AppDetails appDetails) {
        
		System.out.println(appDetails.toString());
		AppDetails appDetailsData = appdetailsService.saveAppDetail(appDetails);
		
		return new ResponseEntity<AppDetails>(appDetailsData, HttpStatus.OK);

	}
	
	@RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
	public ResponseEntity<String> deleteAppDetail(@PathVariable("id") Long id) {
		appdetailsService.deleteAppdetail(id);
		return new ResponseEntity<String>("Challenge Deleted Successfully", HttpStatus.OK);

	}

}
