package com.armin.datingapp.repository;

import com.armin.datingapp.data.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByLogin(String login);

    Optional<User> findFirstByGenderAndGenderPreferenceAndLoginIsNotLikeAndLikedNotContainsAndDislikedNotContainsAndLoginNotIn(String gender, String genderPreference, String login, User liked, User disliked, Set<String> logins);

    Optional<User> findFirstByGenderAndGenderPreferenceAndLoginNotIn(String gender, String genderPreference, Set<String> logins);
}