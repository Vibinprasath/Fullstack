package com.birthdayevent.vibin.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.birthdayevent.vibin.model.EventDetails;

public interface EdetailsRepository extends JpaRepository<EventDetails,Long> {

}