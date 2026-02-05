import React from 'react'
import Video from '../components/home/video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottom from '../components/home/HomeBottom'

const Home = () => {
  return (
    <div>
        <div className='h-screen w-screen fixed'>
            <Video/>
        </div>

        <div className='h-screen w-screen relative flex flex-col justify-between overflow-hidden'>
            <HomeHeroText/>
            <HomeBottom/>
        </div>
    </div>
  )
}

export default Home

// https://player.vimeo.com/progressive_redirect/playback/1119600858/rendition/1080p/file.mp4?loc=external&log_user=0&signature=c4a137161d6ce80a52c50c7ee23d4fdf8df103bfc816252fc304e317a43bacc6