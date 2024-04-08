package cn.edu.hit.backend.pojo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class Admin {
    private String id;
    private String name;
    private String password;
}
