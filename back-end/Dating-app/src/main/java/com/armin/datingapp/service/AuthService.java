package com.armin.datingapp.service;

import com.armin.datingapp.data.dto.LoginDto;
import com.armin.datingapp.data.dto.RegisterDto;
import com.armin.datingapp.data.dto.UserDto;
import org.springframework.stereotype.Service;


@Service
public interface AuthService {

    UserDto findByLogin(String issuer);

    UserDto register(RegisterDto signUpDTO);

    UserDto login(LoginDto credentialsDTO);
}
