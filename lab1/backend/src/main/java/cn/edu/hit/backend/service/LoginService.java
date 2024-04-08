package cn.edu.hit.backend.service;

import cn.edu.hit.backend.mapper.StudentMapper;
import cn.edu.hit.backend.pojo.ApiResponse;
import cn.edu.hit.backend.pojo.Login;
import cn.edu.hit.backend.pojo.Student;
import org.apache.ibatis.jdbc.Null;
import org.apache.juli.logging.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {
    @Autowired
    private StudentMapper studentMapper;

    public ApiResponse login(String Id, String password){
        Login user = findUserById(Id);
        System.out.println(user.toString());

        if (user == null) return new ApiResponse(false, "用户不存在", null, "");

        if (user != null && user.getPassword().equals(password)) {
            return new ApiResponse(true, "Login successful", new Login(user.getUserName(), user.getUserRole()) {
            });
        } else {
            return new ApiResponse(false, "用户名或密码错误", null, "error");
        }
    }

    private Login findUserById(String Id){
        // Check in Student
        Student student = studentMapper.findById(Id);
        if(student != null) return new Login(Id, student.getPassword(), student.getName(), "student");

        return null;
    }

}
