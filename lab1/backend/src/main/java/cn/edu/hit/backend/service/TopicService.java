package cn.edu.hit.backend.service;

import cn.edu.hit.backend.dto.HotTopicTitle;
import cn.edu.hit.backend.mapper.TopicMapper;
import cn.edu.hit.backend.pojo.ApiResponse;
import cn.edu.hit.backend.pojo.Topic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TopicService {
    @Autowired
    private TopicMapper topicMapper;

    public ApiResponse getAllTopics(){
        List<Topic> topics = topicMapper.findAll();

        if(topics != null){
            return new ApiResponse(true, "get all topics successfully!", topics);
        }

        return new ApiResponse(false, "fail to get all topics", null);
    }

    public ApiResponse getHotTitles(){
        List<HotTopicTitle> hotTopicTitles = topicMapper.findHotTitles();

        if (hotTopicTitles != null) {
            return new ApiResponse(true, "get all hot topics` title", hotTopicTitles);
        }

        return new ApiResponse(false, "fail", null, null);
    }
}
