import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title: "How to smile",
    image: "photo.jpg",
    thumbimage: "thumb.png",
    author: "Harendra singh",
    views: "30M",
    timestamp: "10 days Ago"

}, {
    title: "How to smile",
    image: "photo.jpg",
    thumbimage: "thumb.png",
    author: "Harendra singh",
    views: "30M",
    timestamp: "10 days Ago"

}, {
    title: "How to smile",
    image: "photo.jpg",
    thumbimage: "thumb.png",
    author: "Harendra singh",
    views: "30M",
    timestamp: "10 days Ago"

}, {
    title: "How to smile",
    image: "photo.jpg",
    thumbimage: "thumb.png",
    author: "Harendra singh",
    views: "30M",
    timestamp: "10 days Ago"

}, {
    title: "How to smile",
    image: "photo.jpg",
    thumbimage: "thumb.png",
    author: "Harendra singh",
    views: "30M",
    timestamp: "10 days Ago"

}, {
    title: "How to smile",
    image: "photo.jpg",
    thumbimage: "thumb.png",
    author: "Harendra singh",
    views: "30M",
    timestamp: "10 days Ago"

}, {
    title: "How to smile",
    image: "photo.jpg",
    thumbimage: "thumb.png",
    author: "Harendra singh",
    views: "30M",
    timestamp: "10 days Ago"

},
]

export function VideoGrid() {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map((video) => {
            return <div >
                <VideoCard title={video.title}
                    image={video.image}
                    thumbimage={video.thumbimage}
                    author={video.author}
                    views={video.views}
                    timestamp={video.timestamp}>
                </VideoCard>
            </div>
        })}
        <VideoCard></VideoCard>

    </div>

}






