package com.armin.datingapp.controller;

import com.armin.datingapp.data.dto.MatchDto;
import com.armin.datingapp.data.entity.User;
import com.armin.datingapp.service.MatchService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.service.annotation.PatchExchange;

import java.util.Optional;
import java.util.Set;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/match")
public class MatchController {

    private final MatchService matchService;
    @GetMapping("/find/{login}")
    public Optional<MatchDto> findMatch(@PathVariable String login){
        return matchService.findMatch(login);
    }

    @GetMapping("/like/{userLogin}/{matchLogin}")
    public Optional<MatchDto> likePerson(@PathVariable String userLogin, @PathVariable String matchLogin) {
        return matchService.likePerson(userLogin, matchLogin);
    }

    @GetMapping("/dislike/{userLogin}/{matchLogin}")
    public Optional<MatchDto> dislikePerson(@PathVariable String userLogin, @PathVariable String matchLogin) {
        return matchService.dislikePerson(userLogin, matchLogin);
    }

    @GetMapping("/all/{login}")
    public Set<MatchDto> getAllMatches(@PathVariable String login) {
        return matchService.getAllMatches(login);
    }
}
