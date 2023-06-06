package com.shashwat.utkarshForm.controller;

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
    public void send(){
        emailService.sendEmail("shaswat.tripathi3012@gmail.com", "Subject", "Hello this is sample mail");
    }
}
