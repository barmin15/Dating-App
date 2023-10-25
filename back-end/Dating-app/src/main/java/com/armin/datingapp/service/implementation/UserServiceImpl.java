package com.armin.datingapp.service.implementation;

import com.armin.datingapp.data.dto.LoginDto;
import com.armin.datingapp.data.dto.RegisterDto;
import com.armin.datingapp.data.dto.UpdateUserDto;
import com.armin.datingapp.data.dto.UserDto;
import com.armin.datingapp.data.entity.User;
import com.armin.datingapp.exception.AppException;
import com.armin.datingapp.repository.UserRepository;
import com.armin.datingapp.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.CharBuffer;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;


    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public Optional<User> getUserByLogin(String login) {
        return userRepository.findByLogin(login);
    }

    @Override
    public Optional<User> updateUserByLogin(String login, UpdateUserDto updateUserDto) {
        User user = userRepository.findByLogin(login)
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));

        user.setAge(updateUserDto.getAge());
        user.setImageUrl(updateUserDto.getImageUrl());
        user.setDescription(updateUserDto.getDescription());
        user.setDescribeWord(updateUserDto.getDescribeWord());
        user.setGender(updateUserDto.getGender());
        user.setAmountOfExes(updateUserDto.getAmountOfExes());
        user.setWhyToDate(updateUserDto.getWhyToDate());
        user.setGenderPreference(updateUserDto.getGenderPreference());

        return Optional.of(userRepository.save(user));
    }


}
