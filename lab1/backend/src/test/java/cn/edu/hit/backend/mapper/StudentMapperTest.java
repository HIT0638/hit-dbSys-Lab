package cn.edu.hit.backend.mapper;

import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@SpringBootTest
// @RunWith:启动这个单元测试类，需要传入参数(SprintRunner的实例类型)
@RunWith(SpringRunner.class)
public class StudentMapperTest {
    @Autowired
    private StudentMapper studentMapper;

    public void getAllStudents() {

    }
}
