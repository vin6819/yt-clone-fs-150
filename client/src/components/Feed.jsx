import { useState, useEffect } from 'react'
import axios from 'axios'
export default function Feed() {
    const [videos, setVideos] = useState(null);
    useEffect(() => {
        async function fetch() {
            const response = await axios.get('http://localhost:5001/get-videos')
            const data = await response.data;
            setVideos(data)
        }
        fetch()
    }, [])

    return (
        <div className="flex justify-center items-center flex-wrap">
            { videos && videos.map((video) => (
                <div className="w-[400px] m-[30px] cursor-pointer" key={video.id.videoId}>
                    <img src={video.snippet.thumbnails.default.url} alt="" className="w-[400px] cursor-pointer" />
                    <div className="cursor-pointer">{video.snippet.title}</div>
                    <div className="flex justify-start items-center">
                        {/* <div className=" cursor-pointer rounded-[500px] overflow-hidden w-[30px] h-[30px] mr-[10px]">
                            <img src="/UI/mainadmin.jpg" alt="" className="w-[30px] h-[30px]" />
                        </div> */}
                        <div className="cursor-pointer">{video.snippet.channelTitle}</div>
                        <pre>   </pre>
                        <div>1345 views</div>
                        <pre>   </pre>
                        <div>9 months ago</div>
                    </div>
                </div>
            )) }
        </div>
    )
}



// {
//     "kind": "youtube#searchResult",
//     "id": {
//         "kind": "youtube#video",
//         "videoId": "fTV4xHSwaF8"
//     },
//     "snippet": {
//         "publishedAt": "2025-02-25T00:00:00Z",
//         "channelId": "UCNWwmZ74lxx2ZKGY8SaPsLg",
//         "title": "Maroon 5 Best Songs Playlist 2025 | The Best Of Maroon 5 | Greatest Hits Full Album 2025 Lyrics",
//         "description": "",
//         "thumbnails": {
//             "default": {
//                 "url": "https://i.ytimg.com/vi/fTV4xHSwaF8/default.jpg",
//                 "width": 120,
//                 "height": 90
//             },
//             "medium": {
//                 "url": "https://i.ytimg.com/vi/fTV4xHSwaF8/mqdefault.jpg",
//                 "width": 320,
//                 "height": 180
//             },
//             "high": {
//                 "url": "https://i.ytimg.com/vi/fTV4xHSwaF8/hqdefault.jpg",
//                 "width": 480,
//                 "height": 360
//             }
//         },
//         "channelTitle": "Music Top Hits",
//         "liveBroadcastContent": "none",
//         "publishTime": "2025-02-25T00:00:00Z"
//     }
// }