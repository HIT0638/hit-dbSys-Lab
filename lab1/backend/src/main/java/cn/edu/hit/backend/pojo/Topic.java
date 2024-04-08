package cn.edu.hit.backend.pojo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class Topic {
    private String id;
    private int popularity;
    private String author_id;
    private int is_hot;
    private LocalDateTime publish_date;
    private String content;
    private String category_id;
}
