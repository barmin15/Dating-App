package com.armin.datingapp.data.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class UpdateUserDto {
    private String genderPreference;
    private String gender;
    private int age;
    private String describeWord;
    private String whyToDate;
    private int amountOfExes;
    private String description;
    private String imageUrl;

}
