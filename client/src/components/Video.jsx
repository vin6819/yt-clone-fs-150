import { useState } from "react";

export default function Video( {video} ) {
    const [data, setDate] = useState("");
    const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/videos',
        params: {
          part: 'contentDetails,snippet,statistics',
          id: '7ghhRHRP6t4'
        },
        headers: {
          'x-rapidapi-key': 'ca0977fde7mshb26277dcbf36443p19aaa9jsn1e82bacf49ab',
          'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
        }
      };
      useEffect(() => {
        async function fetch() {
            // const response = await axios.get('http://localhost:5001/get-videos')
            // const data = await response.data;
            const response = await axios.request(options);
            const data = response.data.items
            setVideos(data)
            console.log(data)
        }
        fetch()
    }, [video])      
    return (
        <div class="videoPart flex flex-col justify-center items-center m-[2%] w-[100%]">
            <iframe class=" border border-white rounded-md w-[80%] h-[60vw] lg:w-[80%] lg:h-[70vh]" src="https://www.youtube.com/embed/lHLBJ4yRMn8?autoplay=1&amp;cc_load_policy=1" allowfullscreen=""></iframe>
            <div class="flex flex-col justify-start items-start w-[80%] m-[20px]">
                <div class="text-2xl">American Airlines | Stand Up Comedy | Ft @AnubhavSinghBassi</div>
                <div class="m-[10px] flex flex-col-reverse lg:flex-row">
                    <div class="flex justify-start items-center lg:w-[50%]">
                        <div class=" cursor-pointer rounded-[500px] overflow-hidden w-[40px] h-[40px] mr-[10px]">
                            <img src="/UI/mainadmin.jpg" alt="" class="w-[40px] h-[40px]" />
                        </div>
                        <div class="text-xl font-bold cursor-pointer">Vikas Yadav</div>
                        <div class="ml-[40px] border border-white bg-white p-[5px] rounded-[50px] font-semibold text-black">Subscribe</div>
                    </div>
                    <div class="m-[10px] lg:w-[50%] flex gap-[20px] lg:justify-end lg:items-end">
                        <div class="flex justify-center items-center border border-white bg-gray-500 rounded-[50px] p-[5px] lg:w-[150px]">
                            <div class="flex justify-center items-end">
                                <img src="/UI/like.png" alt="" class=" w-[40px]" />
                                <div class="text-gray-700 font-semibold">465</div>
                            </div>
                            <div class="border border-white h-[30px] "></div>
                            <img src="/UI/dislike.png" alt="" class=" w-[40px]" />
                        </div>
                        <div class="border border-gray-600 bg-gray-600 rounded-[50px] p-[10px] w-[100px] text-center font-bold hover:bg-red-600 flex justify-center items-center"> 
                            <img src="/UI/share.png" alt="" class="w-[20px]" />Share
                        </div>
                        <div class="border border-gray-600 bg-gray-600 rounded-[50px] p-[10px] w-[140px] text-center font-bold hover:bg-red-600 flex justify-center items-center">
                            <img src="/UI/download.png" alt="" class="w-[20px]" /> Download
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
