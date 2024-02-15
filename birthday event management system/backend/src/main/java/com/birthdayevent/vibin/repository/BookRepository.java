package com.birthdayevent.vibin.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.birthdayevent.vibin.model.Booking;

public interface BookRepository extends JpaRepository<Booking,Long> {

}