package com.birthdayevent.vibin.service;

import com.birthdayevent.vibin.dto.request.Loginrequest;
import com.birthdayevent.vibin.dto.request.RegisterRequest;
import com.birthdayevent.vibin.dto.response.LoginResponse;
import com.birthdayevent.vibin.dto.response.RegisterResponse;

public interface AuthenticationService {

    RegisterResponse register(RegisterRequest request);

    LoginResponse login(Loginrequest request);

}
