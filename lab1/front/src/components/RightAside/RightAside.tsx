import React, {useEffect} from 'react';
import {List, ListItem, ListItemText, Paper, Typography} from "@mui/material";
import request from "@/util/request";

const RightAside = () => {
    const [hotTopics, setHotTopics] = React.useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await request.get(`/topic/getHotTitle`);
                setHotTopics(response.data.data);

            } catch (error){
                console.error(error);
            }
        }

        fetchData();
    }, [])

    const handleTopicClick = (topicId : string) => {
        alert("Into topic " + topicId)
    }

    return (
        <Paper style={{ width: '100%', height: '100%', borderRadius: '0'}}  sx={{ padding: 2 }}>
            <Typography variant="h6">主题热度榜</Typography>
            <List>
                { hotTopics.map((topic, index) => {
                    return (
                        <ListItem button
                                  key={topic.topicId}
                                  onClick={() => handleTopicClick(topic.topicId)}  >
                            <Typography>{index + 1}. {topic.title}</Typography>
                        </ListItem>
                    )
                })}
            </List>
        </Paper>
    )
}

export default RightAside;