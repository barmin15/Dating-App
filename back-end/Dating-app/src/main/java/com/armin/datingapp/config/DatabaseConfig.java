package com.armin.datingapp.config;

import com.armin.datingapp.controller.AuthController;
import com.armin.datingapp.data.dto.RegisterDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class DatabaseConfig {

    private final AuthController authController;

    public void registerUsers(){
        RegisterDto Ármin = RegisterDto.builder()
                .gender("male")
                .login("bokora@lauderalumni.hu")
                .password("armin".toCharArray())
                .username("Ármin")
                .build();

        RegisterDto Zoli = RegisterDto.builder()
                .gender("male")
                .login("zoli@gmail.com")
                .password("zoli".toCharArray())
                .username("Zoli")
                .build();

        RegisterDto Flóra = RegisterDto.builder()
                .gender("female")
                .login("flora@gmail.com")
                .password("flora".toCharArray())
                .username("Flóra")
                .build();

        List<RegisterDto> users = List.of(Ármin, Zoli, Flóra);

        users.forEach(authController::register);
    }
}






