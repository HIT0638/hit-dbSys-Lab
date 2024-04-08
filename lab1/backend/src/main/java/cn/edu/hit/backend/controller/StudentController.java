package cn.edu.hit.backend.controller;

import cn.edu.hit.backend.mapper.StudentMapper;
import cn.edu.hit.backend.pojo.Student;
import cn.edu.hit.backend.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
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

    @GetMapping("/getAll")
    public List<Student> getAll(){
        return studentService.getAllStudents();
    }
}
