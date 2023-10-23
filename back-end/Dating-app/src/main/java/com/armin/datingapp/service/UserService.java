package com.armin.datingapp.service;

import com.armin.datingapp.data.dto.LoginDto;
import com.armin.datingapp.data.dto.RegisterDto;
import com.armin.datingapp.data.dto.UserDto;
import com.armin.datingapp.data.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface UserService {
    UserDto findByLogin(String issuer);

    List<User> getAllUsers();
    UserDto register(RegisterDto signUpDTO);

    UserDto login(LoginDto credentialsDTO);

    Optional<User> getUserByLogin(String login);
}
