package cn.edu.hit.backend.controller;

import cn.edu.hit.backend.pojo.ApiResponse;
import cn.edu.hit.backend.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/login")
@CrossOrigin(origins = "*")
public class LoginController {
    @Autowired
    private LoginService loginService;

    @PostMapping("")
    public ResponseEntity<ApiResponse> login(@RequestBody Map<String, Object> credentials){
        String userId = (String) credentials.get("userId");
        String password = (String) credentials.get("password");

        ApiResponse login = loginService.login(userId, password);
        System.out.println(login.toString());

        return new ResponseEntity<ApiResponse>(login, HttpStatus.OK);
    }

}
