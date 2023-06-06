package com.shashwat.utkarshForm.request;

public class EmailRequest {
    private final String firstName;
    private final String lastName;
    private final String phoneNo;
    private final String address;
    private final String email;

    public EmailRequest(String firstName, String lastName, String phoneNo, String address, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNo = phoneNo;
        this.address = address;
        this.email = email;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public String getAddress() {
        return address;
    }

    public String getEmail() {
        return email;
    }
}
