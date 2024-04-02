

interface expEntryProps {
    title: string;
    url?: string;
    logo?: string;
    company: string;
    description: string;
}

export default function ExpEntry(props: expEntryProps){
    let url = props.url || "#";
    return (
        <div className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl ">
            <div>
                <a href={url} target="_blank" className="grid place-items-center dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 min-h-[80px] min-w-[80px] p-2 rounded-md">
                    <img src="https://placehold.co/50x50.jpg" alt={props.company} />
                </a>
                <div className="flex">
                    <div className="flex-1"></div>
                    <div className="mt-2 h-36 flex-initial w-px bg-slate-400"></div>
                    <div className="flex-1"></div>
                </div>
            </div>
            <div className="text-left">
                <div className="text-xl pb-4">
                    <span className="text-xl pe-8">{props.company}</span>
                    <span className="text-lg text-slate-400"> Start Date - End Date</span>
                </div>
                <div className="">
                    {props.description}
                </div>
            </div>
        </div>
    );
}