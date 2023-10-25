package com.armin.datingapp.data.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class MatchDto {
    private String username;
    private String login;
    private int age;
    private String gender;
    private String describeWord;
    private int amountOfExes;
    private String imageUrl;
    private String whyToDate;
    private boolean isMatched;
    private String description;
}
