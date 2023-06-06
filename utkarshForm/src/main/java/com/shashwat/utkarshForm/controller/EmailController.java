package com.shashwat.utkarshForm.controller;

import com.shashwat.utkarshForm.request.EmailRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RestController
public class EmailController {
    @Autowired
    private com.shashwat.utkarshForm.service.EmailService emailService;

    @PostMapping("/send")
    public void send(@RequestBody EmailRequest emailRequest){
        String message = "You have entered the following details: " +
                "\nName: "+emailRequest.getFirstName()+" "+emailRequest.getLastName()+
                "\nAddress: "+emailRequest.getAddress()+
                "\nPhone No.: "+emailRequest.getPhoneNo();
        emailService.sendEmail(emailRequest.getEmail(), "Details Confirmation", message);
    }
}
