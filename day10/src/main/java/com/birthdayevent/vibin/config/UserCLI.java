package com.birthdayevent.vibin.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.birthdayevent.vibin.model.User;
import com.birthdayevent.vibin.repository.UserRepository;

import static enumurated.Role.ADMIN;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
@SuppressWarnings("null")
public class UserCLI implements CommandLineRunner{
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        if (userRepository.count() > 0)
            return;
        var user = User.builder()
            .name("Admin")
            .email("admin@gmail")
            .password(passwordEncoder.encode("12345"))
            .role(ADMIN)
            .build();
        userRepository.save(user);
    }

}
