package com.birthdayevent.vibin.service;

import com.birthdayevent.vibin.dto.response.BasicResponse;
import com.birthdayevent.vibin.dto.response.UserResponse;

public interface UserService {

    BasicResponse<UserResponse> getAllUser();

}