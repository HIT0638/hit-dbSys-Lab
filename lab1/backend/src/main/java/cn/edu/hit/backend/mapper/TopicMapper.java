package cn.edu.hit.backend.mapper;

import cn.edu.hit.backend.dto.HotTopicTitle;
import cn.edu.hit.backend.pojo.Topic;

import java.util.List;

public interface TopicMapper {
    public List<Topic> findAll();

    public List<HotTopicTitle> findHotTitles();
}
