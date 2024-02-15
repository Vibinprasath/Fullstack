package com.birthdayevent.vibin.service;

import com.birthdayevent.vibin.dto.request.EdetailsRequest;
import com.birthdayevent.vibin.dto.response.BasicResponse;
import com.birthdayevent.vibin.dto.response.EdetailsResponse;

public interface EdetailsService {
    BasicResponse<EdetailsResponse>getAllUser();
    BasicResponse<EdetailsResponse>deletebooking(Long id);
    BasicResponse<EdetailsResponse>updateBooking(Long id,EdetailsRequest request);

}
