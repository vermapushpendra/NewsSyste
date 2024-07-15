
import { videos } from './../../Data/home.js';

function Home() {
  return <>
    <div className='gird grid-cols-[repeat(auto-fill, minmax(300px, 1fr))] text-white'>

      {videos.map((video) => (
        <div key={video.id} className="flex flex-col gap-2 ">
          <a href={`/watch?v=${video.id}`} className='relative aspect-video'>
            <img src={video.thumbnailUrl} className='block w-full h-full object-cover rounded-xl' />



          </a>
        </div>
      )
      )}


    </div>
  </>;
}

export default Home;
