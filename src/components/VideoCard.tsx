export function VideoCard(props: any) {
    return <div className="p-3">
        <img src={props.image} className="rounded-xl" ></img>
        <div className="grid grid-cols-12 pt-3">
            <div className="col-span-2">
                <img className="rounded-full w-12 h-12" src={props.thumbimage}></img>
            </div>
            <div className="col-span-10 ">
                <div>{props.title}</div>
                <div className="col-span-10 text-gray-400 text-base"> {props.author}</div>
                <div className="col-span-10 text-gray-400 text-base"> {props.views}</div>
                <div className="col-span-10 text-gray-400 text-base"> {props.timestamp}</div>
            </div>
        </div>

    </div>

}