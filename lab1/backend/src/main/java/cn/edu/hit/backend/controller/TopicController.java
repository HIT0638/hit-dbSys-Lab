package cn.edu.hit.backend.controller;

import cn.edu.hit.backend.pojo.ApiResponse;
import cn.edu.hit.backend.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/topic")
@CrossOrigin(origins = "*")
public class TopicController {

    @Autowired
    private TopicService topicService;

    @GetMapping("/All")
    public ResponseEntity<ApiResponse> getAllTopics(){
        return new ResponseEntity<ApiResponse>(topicService.getAllTopics(), HttpStatus.OK);
    }

    @GetMapping("/getHotTitle")
    public ResponseEntity<ApiResponse> getHotTitles(){
        return new ResponseEntity<ApiResponse>(topicService.getHotTitles(), HttpStatus.OK);
    }

}
