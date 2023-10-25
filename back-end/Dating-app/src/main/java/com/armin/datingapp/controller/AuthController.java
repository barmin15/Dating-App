package com.armin.datingapp.controller;

import com.armin.datingapp.config.UserAuthProvider;
import com.armin.datingapp.data.dto.LoginDto;
import com.armin.datingapp.data.dto.RegisterDto;
import com.armin.datingapp.data.dto.UserDto;
import com.armin.datingapp.service.AuthService;
import com.armin.datingapp.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;
    private final UserAuthProvider userAuthProvider;

    @PostMapping("/register")
    public ResponseEntity<UserDto> register(@RequestBody RegisterDto signUpDTO) {

        UserDto user = authService.register(signUpDTO);
        user.setToken(userAuthProvider.createToken(user.getLogin()));
        return ResponseEntity.created(URI.create("/users/" + user.getId()))
                .body(user);
    }


    @PostMapping("/login")
    public ResponseEntity<UserDto> login(@RequestBody LoginDto credentialsDTO) {

        UserDto user = authService.login(credentialsDTO);
        user.setToken(userAuthProvider.createToken(user.getLogin()));

        return ResponseEntity.ok(user);
    }


}
