package com.birthdayevent.vibin.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.birthdayevent.vibin.dto.response.BasicResponse;
import com.birthdayevent.vibin.dto.response.UserResponse;
import com.birthdayevent.vibin.model.User;
import com.birthdayevent.vibin.repository.UserRepository;
import com.birthdayevent.vibin.service.UserService;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    
        private final UserRepository userRepository;

    @Override
    public BasicResponse<UserResponse> getAllUser() {
        List<User> users=userRepository.findAll();
        List<UserResponse> userResponse =users.stream().map(user->UserResponse.builder()
            .id(user.getId())
            .name(user.getName())
            .email(user.getEmail())
            .build())
            .collect(Collectors.toList());
        return BasicResponse.<UserResponse>builder()
            .message("User data fetch successfully!")
            .data(userResponse)
            .build();
    }
    

}