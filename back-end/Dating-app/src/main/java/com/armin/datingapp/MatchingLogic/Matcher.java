package com.armin.datingapp.MatchingLogic;

import com.armin.datingapp.data.entity.User;
import com.armin.datingapp.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;


@Service
@RequiredArgsConstructor
public class Matcher {

    private final UserRepository userRepository;

    public Optional<User> findMatch(User user) {
        String genderPreference = user.getGender();
        String gender = user.getGenderPreference();
        String login = user.getLogin();

        Set<String> logins = new HashSet<>();
        user.getLiked().forEach(user1 -> logins.add(user1.getLogin()));
        user.getDisliked().forEach(user1 -> logins.add(user1.getLogin()));
        logins.add("logins:");
        System.out.println(logins);
        return userRepository
                .findFirstByGenderAndGenderPreferenceAndLoginNotIn(
                        gender,
                        genderPreference,
                        logins
                );
    }


    public boolean isAMatch(User user, User match) {
        return user.getLiked().contains(match) && match.getLiked().contains(user);
    }

    public User addLikeOrDislike(User user, User matchee, String vote) {
        if (Objects.equals(vote, "like")) {
            Set<User> liked = user.getLiked();
            liked.add(matchee);
            user.setLiked(liked);
        }

        if (Objects.equals(vote, "dislike")) {
            Set<User> disliked = user.getDisliked();
            disliked.add(matchee);
            user.setDisliked(disliked);
        }

        return user;
    }


}
