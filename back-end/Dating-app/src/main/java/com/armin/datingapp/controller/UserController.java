package com.armin.datingapp.controller;

import com.armin.datingapp.data.dto.UpdateUserDto;
import com.armin.datingapp.data.entity.User;
import com.armin.datingapp.service.UserService;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RequiredArgsConstructor
@RestController
@RequestMapping("/api/user")
public class UserController {
    private final UserService userService;

    @GetMapping
    public List<User> getAllUser() {
        return userService.getAllUsers();
    }

    @GetMapping("/login/{login}")
    public Optional<User> getUserByLogin(@PathVariable String login) {
        return userService.getUserByLogin(login);
    }

    @PutMapping ("/update/{login}")
    public Optional<User> updateUserByLogin(@PathVariable String login, @RequestBody UpdateUserDto updateUserDto) {
        return userService.updateUserByLogin(login, updateUserDto);
    }
}
