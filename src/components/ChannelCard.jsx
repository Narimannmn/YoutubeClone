import React from 'react';
import {Link} from "react-router-dom";
import {Box,CardContent, CardMedia, Typography} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";
import {demoProfilePicture} from "../utils/constants";
function ChannelCard({channelDetail, marginTop}) {
    return (
        <Box
            sx={{
                boxShadow: "none",
                borderRadius: '20px',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                width:{xs:'356px',md:'320px'},
                height:'326px',
                margin:'auto',
                marginTop,
            }}
        >
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center', textAlign:'center',color:'#FFF'}}>
                    <CardMedia
                        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        alt={channelDetail?.snippet?.title}
                        sx={{
                            borderRadius: '50%',
                            height: '180px',
                            width: '180px',
                            mb:2,
                            border:'1px solid #e3e3e3'
                        }}
                    />
                    <Typography variant="h6" fontWeight="bold" color="#FFF">
                        {channelDetail?.snippet?.title}
                        <CheckCircle sx={{ fontSize: "14px", color: "gray", ml: "5px" }} />
                    </Typography>
                    {channelDetail?.statistics?.subscriberCount && (
                        <Typography variant="subtitle2" color="gray">
                            {
                                parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString() + " subscribers"
                            }
                            <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                        </Typography>
                    )}
                </CardContent>
            </Link>
        </Box>
    );
}

export default ChannelCard;