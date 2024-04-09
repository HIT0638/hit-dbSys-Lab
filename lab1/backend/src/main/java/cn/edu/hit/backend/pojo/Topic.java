package cn.edu.hit.backend.pojo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class Topic {
    private String id;
    private String title;
    private int popularity;
    private String author_id;
    private int is_hot;
    private String pub_date;
    private String content;
    private String category_id;
}
