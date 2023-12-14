package com.sujit.fullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sujit.fullstackbackend.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

}
