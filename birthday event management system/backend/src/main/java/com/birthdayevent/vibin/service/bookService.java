package com.birthdayevent.vibin.service;

import com.birthdayevent.vibin.dto.request.BookRequest;
import com.birthdayevent.vibin.dto.request.EdetailsRequest;
import com.birthdayevent.vibin.dto.response.BasicResponse;
import com.birthdayevent.vibin.dto.response.BookResponse;


public interface bookService {

    BasicResponse<BookResponse> getAllUser();
    BasicResponse<BookResponse> deletebooking(Long id);
    BasicResponse<BookResponse> updateBooking(Long bookingId, BookRequest request);

}