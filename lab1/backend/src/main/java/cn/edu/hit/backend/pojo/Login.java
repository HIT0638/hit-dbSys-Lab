package cn.edu.hit.backend.pojo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class Login {
    private String userId;
    private String password;
    private String userName;
    private String userRole;

    public Login(String userName, String userRole) {
        this.userName = userName;
        this.userRole = userRole;
    }
}
