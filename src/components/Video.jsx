
import { createRef, useEffect, useRef, useState } from 'react';
import { FormatPostTime, } from '../utility/FormatPostTime.jsx';
import { videos } from '../Data/home.js';

const View_Formatter = new Intl.NumberFormat(undefined, { notation: "compact" })


function Video() {

    const [isVideoIdx, setIsVideoIdx] = useState(null);

    const videoRefs = useRef(videos.map(() => createRef()));
    const prevVideoRef = useRef(null);


    useEffect(() => {
        if (isVideoIdx !== null) {
            videoRefs.current[isVideoIdx].current.currentTime = 0;
            videoRefs.current[isVideoIdx].current.play();
        }

        if (prevVideoRef.current !== null) {
            prevVideoRef.current.current.pause()
        }

        prevVideoRef.current = (isVideoIdx !== null) ? videoRefs.current[isVideoIdx] : null;

    }, [isVideoIdx])


    return <>

        {videos.map((video, i) => (
            <div key={video.id} className="flex flex-col gap-2" onMouseEnter={() => setIsVideoIdx(i)} onMouseLeave={() => setIsVideoIdx(null)} >
                <a href={`/watch?v=${video.id}`} className='relative aspect-video'>
                    <img src={video.thumbnailUrl} className='block object-cover w-full h-full rounded-xl' />
                    <div className='absolute text-white bg-black bg-opacity-90 rounded-md px-2 right-2 bottom-2'>
                        {video.duration}
                    </div>
                    <video ref={videoRefs.current[i]} src={video.videoUrl} muted playsInline className={`block object-cover absolute inset-0 transition-opacity duration-200 ${isVideoIdx == i ? "opacity-100 delay-100" : "opacity-0"}`} />
                </a>

                <div className='flex gap-2'>
                    <a href={`/@${video.channel.id}`} className='flex-shrink-0'>
                        <img className='h-8 w-8 rounded-full' src={video.channel.profileUrl} />
                    </a>
                    <div className='flex flex-col'>
                        <a href={`/watch?v=${video.videoUrl}`} className='font-bold text-white text-base'>
                            {video.title}
                        </a>
                        <a href={`/${video.channel.name}`} className='text-neutral-400 font-medium text-sm' >
                            {video.channel.name}
                        </a>
                        <div className='text-neutral-400 font-medium text-sm'>
                            {View_Formatter.format(video.views)} views • {FormatPostTime(video.postedAt)}
                        </div>
                    </div>
                </div>
            </div>
        )
        )}



    </>;
}

export default Video;
