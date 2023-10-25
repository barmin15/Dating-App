package com.armin.datingapp.data.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Entity(name = "users")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class User {
    @JsonIgnore
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String login;
    private String password;
    private String gender;
    private int age;
    private String describeWord;
    private int amountOfExes;
    private String genderPreference;

    @Column(columnDefinition = "TEXT")
    private String whyToDate;

    @Column(columnDefinition = "TEXT")
    private String imageUrl;

    @Column(columnDefinition = "TEXT")
    private String description;

    @ManyToMany()
    private Set<User> liked;

    @ManyToMany()
    private Set<User> disliked;

    @ManyToMany()
    private Set<User> matches;

}
