package cn.edu.hit.backend.controller;

import cn.edu.hit.backend.mapper.StudentMapper;
import cn.edu.hit.backend.pojo.ApiResponse;
import cn.edu.hit.backend.pojo.Student;
import cn.edu.hit.backend.service.StudentService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "*")
public class StudentController {
    @Autowired
    private StudentService studentService;


//    @GetMapping("/getAll")
//    public String getAll() {
//        return "<h1>qqq</h1>";
//    }

    @GetMapping("/All")
    public ResponseEntity<ApiResponse<List<Student>>> getAll(){
        List<Student> stuList = studentService.getAllStudents();
        ApiResponse<List<Student>> response = new ApiResponse<>(true, "getAll students successfully!", stuList);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}
