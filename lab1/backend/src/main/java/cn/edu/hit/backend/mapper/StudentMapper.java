package cn.edu.hit.backend.mapper;

import cn.edu.hit.backend.pojo.Student;

import java.util.List;

public interface StudentMapper {
    Integer addStudent(Student student);

    List<Student> findAll();

    Student findById(String Id);
}
