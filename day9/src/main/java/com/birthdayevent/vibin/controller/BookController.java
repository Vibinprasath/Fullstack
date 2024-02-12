package com.birthdayevent.vibin.controller;



import static com.birthdayevent.vibin.util.MyConstant.GETBOOK;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.OK;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.birthdayevent.vibin.dto.request.BookRequest;
import com.birthdayevent.vibin.dto.request.EdetailsRequest;
import com.birthdayevent.vibin.dto.response.BasicResponse;
import com.birthdayevent.vibin.dto.response.BookResponse;
import com.birthdayevent.vibin.dto.response.EdetailsResponse;
import com.birthdayevent.vibin.model.Booking;
import com.birthdayevent.vibin.model.EventDetails;
import com.birthdayevent.vibin.repository.BookRepository;
import com.birthdayevent.vibin.repository.EdetailsRepository;
import com.birthdayevent.vibin.service.EdetailsService;
import com.birthdayevent.vibin.service.bookService;
import com.birthdayevent.vibin.util.MyConstant;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(MyConstant.BOOK)
@RequiredArgsConstructor
public class BookController {
      private final bookService bookService;
      private final BookRepository bookRepository;

    @GetMapping(GETBOOK)
    public ResponseEntity<BasicResponse<BookResponse>> getUser(){
        BasicResponse<BookResponse> response=new BasicResponse<>();
        try{
            response=bookService.getAllUser();
            return new ResponseEntity<>(response, OK);
        }
        catch(Exception exception){
            response.setMessage("Something Went Wrong");
            return new ResponseEntity<>(response,EXPECTATION_FAILED);
        }
    }

    @SuppressWarnings("null")
    @PostMapping(MyConstant.POSTBOOK)
    public Booking create(@RequestBody Booking models) {
        return bookRepository.save(models);
    }

    @DeleteMapping(MyConstant.BOOK + "/{bookingId}")
    public ResponseEntity<BasicResponse<BookResponse>> deleteBooking(@PathVariable Long bookingId) {
        BasicResponse<BookResponse> response = new BasicResponse<>();
        try {
            BasicResponse<BookResponse> deletedBookingResponse = bookService.deletebooking(bookingId);
            response.setMessage(deletedBookingResponse.getMessage());
            return new ResponseEntity<>(response, OK);
        } catch (Exception e) {
            response.setMessage("Failed to delete booking: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(MyConstant.BOOK+ "/{bookingId}")
public ResponseEntity<BasicResponse<BookResponse>> updateBooking(@PathVariable Long bookingId, @RequestBody BookRequest request) {
    BasicResponse<BookResponse> response = new BasicResponse<>();
    try {
        BasicResponse<BookResponse> updatedBookingResponse =bookService.updateBooking(bookingId, request);
        response.setMessage(updatedBookingResponse.getMessage());
        response.setData(updatedBookingResponse.getData());
        return new ResponseEntity<>(response, OK);
    } catch (Exception e) {
        response.setMessage("Failed to update booking: " + e.getMessage());
        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }

}

private EdetailsResponse mapToBookingResponse(EventDetails existingBooking) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'mapToBookingResponse'");
}

    
    

    
}