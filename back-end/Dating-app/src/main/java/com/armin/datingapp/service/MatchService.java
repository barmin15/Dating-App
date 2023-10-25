package com.armin.datingapp.service;

import com.armin.datingapp.data.dto.MatchDto;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;

@Service
public interface MatchService {
    Optional<MatchDto> findMatch(String login);

    Optional<MatchDto> likePerson(String login, String matchLogin);

    Optional<MatchDto> dislikePerson(String userLogin, String matchLogin);

    Set<MatchDto> getAllMatches(String login);
}
