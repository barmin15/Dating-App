package com.armin.datingapp.service.implementation;

import com.armin.datingapp.data.dto.LoginDto;
import com.armin.datingapp.data.dto.RegisterDto;
import com.armin.datingapp.data.dto.UserDto;
import com.armin.datingapp.data.entity.User;
import com.armin.datingapp.exception.AppException;
import com.armin.datingapp.repository.UserRepository;
import com.armin.datingapp.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.CharBuffer;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    @Override
    public UserDto findByLogin(String login) {
        User user = userRepository.findByLogin(login)
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));

        return UserDto.builder()
                .login(user.getLogin())
                .gender(user.getGender())
                .id(user.getId())
                .build();
    }

    @Override
    public UserDto register(RegisterDto userDTO) {
        Optional<User> optionalUser = userRepository.findByLogin(userDTO.getLogin());

        if (optionalUser.isPresent()) throw new AppException("Already a user", HttpStatus.BAD_REQUEST);

        User user = User.builder()
                .username(userDTO.getUsername())
                .login(userDTO.getLogin())
                .gender(userDTO.getGender())
                .password(passwordEncoder.encode(CharBuffer.wrap(userDTO.getPassword())))
                .build();

        user = userRepository.save(user);

        return UserDto.builder()
                .gender(user.getGender())
                .login(user.getLogin())
                .username(user.getUsername())
                .id(user.getId())
                .build();

    }

    @Override
    public UserDto login(LoginDto credentialsDTO) {
        User user = userRepository.findByLogin(credentialsDTO.getLogin())
                .orElseThrow(() -> new AppException("Unknown User", HttpStatus.NOT_FOUND));

        if (passwordEncoder.matches(CharBuffer.wrap(credentialsDTO.getPassword()), user.getPassword())) {

            return UserDto.builder()
                    .id(user.getId())
                    .login(user.getLogin())
                    .username(user.getUsername())
                    .gender(user.getGender())
                    .build();
        }

        throw new AppException("Invalid password", HttpStatus.BAD_REQUEST);
    }
}
