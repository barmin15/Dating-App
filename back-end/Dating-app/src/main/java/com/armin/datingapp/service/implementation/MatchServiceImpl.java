package com.armin.datingapp.service.implementation;

import com.armin.datingapp.MatchingLogic.Matcher;
import com.armin.datingapp.data.dto.MatchDto;
import com.armin.datingapp.data.dto.UserDto;
import com.armin.datingapp.data.entity.User;
import com.armin.datingapp.exception.AppException;
import com.armin.datingapp.repository.UserRepository;
import com.armin.datingapp.service.MatchService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class MatchServiceImpl implements MatchService {

    private final Matcher matcher;

    private final UserRepository userRepository;

    @Override
    public Optional<MatchDto> findMatch(String login) {
        User user = userRepository.findByLogin(login)
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));

        Optional<User> match = matcher.findMatch(user);

        return convertUserToDto(match);
    }

    @Override
    public Optional<MatchDto> likePerson(String login, String matchLogin) {
        User user = userRepository.findByLogin(login)
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));

        User match = userRepository.findByLogin(matchLogin)
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));

        userRepository.save(matcher.addLikeOrDislike(user, match, "like"));

        Optional<MatchDto> matchDto = findMatch(login);

        matchDto.get().setMatched(matcher.isAMatch(user, match));

        return matchDto;
    }

    @Override
    public Optional<MatchDto> dislikePerson(String userLogin, String matchLogin) {
        User user = userRepository.findByLogin(userLogin)
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));

        User match = userRepository.findByLogin(matchLogin)
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));

        userRepository.save(matcher.addLikeOrDislike(user, match, "dislike"));

        Optional<MatchDto> matchDto = findMatch(userLogin);

        matchDto.get().setMatched(matcher.isAMatch(user, match));

        return matchDto;
    }

    @Override
    public Set<MatchDto> getAllMatches(String login) {
        User user = userRepository.findByLogin(login)
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
        return (Set<MatchDto>) user.getMatches().stream().map(u -> convertUserToDto(Optional.ofNullable(u)));
    }

    private Optional<MatchDto> convertUserToDto(Optional<User> match){
        MatchDto matchDto = MatchDto.builder()
                .age(match.get().getAge())
                .amountOfExes(match.get().getAmountOfExes())
                .describeWord(match.get().getDescribeWord())
                .gender(match.get().getGender())
                .imageUrl(match.get().getImageUrl())
                .username(match.get().getUsername())
                .whyToDate(match.get().getWhyToDate())
                .login(match.get().getLogin())
                .description(match.get().getDescription())
                .build();

        return Optional.ofNullable(matchDto);
    }
}
