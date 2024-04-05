import React from 'react';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import {Box} from '@mui/material'
import {Navbar, ChannelDetail, VideoDetail, Feed, SearchFeed} from './components'

function App() {
    return (
        <BrowserRouter>
            <Box sx={{backgroundColor:'#000'}} style={{color:"white"}}>
                <Navbar/>
                <Routes>
                    <Route path='/' exact element={<Feed/> } />
                    <Route path='/video/:id' exact element={<VideoDetail/>} />
                    <Route path='/channel/:id' exact element={<ChannelDetail/>} />
                    <Route path='/search/:id' exact element={<SearchFeed/>} />
                </Routes>
            </Box>
        </BrowserRouter>
    );
}

export default App;