package com.birthdayevent.vibin.dto.request;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EdetailsRequest {
    private Long id;
    private String eventname;
    private String location;
    private String themename;
    private String image;
    private String pgname;
    private String vgname;
    private String gift;
    private int pgnumber;
    private int vgnumber;
    private int themecost;
}