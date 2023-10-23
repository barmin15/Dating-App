package com.armin.datingapp.service.implementation;

import com.armin.datingapp.data.dto.RegisterDto;
import com.armin.datingapp.data.entity.User;
import com.armin.datingapp.repository.UserRepository;
import com.armin.datingapp.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

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
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public boolean register(RegisterDto registerDto) {
        if(userRepository.findByLogin(registerDto.getLogin()).isPresent()) return false;

        User user = User.builder()
                .login(registerDto.getLogin())
                .username(registerDto.getUsername())
                .gender(registerDto.getGender())
                .password(registerDto.getPassword())
                .build();

        userRepository.save(user);

        return true;
    }
}
