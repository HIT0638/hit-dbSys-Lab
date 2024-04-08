package cn.edu.hit.backend.pojo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class Reply {
    private String id;
    private String topic_id;
    private int floor;
    private String author_role;
    private String author_name;
    private LocalDateTime publish_date;
    private String content;
}
