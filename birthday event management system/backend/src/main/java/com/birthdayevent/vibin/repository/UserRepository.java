package com.birthdayevent.vibin.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.birthdayevent.vibin.model.User;

public interface UserRepository extends JpaRepository<User, String> {

    Optional<User> findByEmail(String email);
    
}
