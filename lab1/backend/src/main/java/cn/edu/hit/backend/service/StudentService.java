package cn.edu.hit.backend.service;

import cn.edu.hit.backend.mapper.StudentMapper;
import cn.edu.hit.backend.pojo.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    @Autowired
    private StudentMapper studentMapper;

    public List<Student> getAllStudents(){
        return studentMapper.findAll();
    }
}
