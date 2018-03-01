package com.cts.cde.io.cloudorchestrator.appdetails;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppDetailsService {

	@Autowired
	private AppDetailsRepository appdetailsRepository;
  
	public List<AppDetails> findAll() {
		
		List<AppDetails> appDetails =new ArrayList<AppDetails>();
		appdetailsRepository.findAll().forEach(appDetails::add);
		  return appDetails;
	}

	public AppDetails findById(Long id) {
		// TODO Auto-generated method stub
		return appdetailsRepository.findOne(id);
	}
	

	public AppDetails saveAppDetail(AppDetails appDetails) {
		    
		return appdetailsRepository.save(appDetails);
		
	}

	public void deleteAppdetail(Long id) {
		
		 appdetailsRepository.delete(id);
		
	}




	

}
