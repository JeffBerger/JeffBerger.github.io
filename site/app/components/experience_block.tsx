import ExpEntry from "./exp_entry";

const jobs = [
    {
        title: "CTO and Founder",
        url: "https://vega-labs.com",
        company: "Vega Labs LLC",
        description: "Running everything from nothing"
    },
    {
        title: "CTO",
        url: "https://qognitive.io",
        company: "Qognitive",
        description: "Also running everything worth running"
    },
    {
        title: "CTO",
        url: "https://dualitygroup.com",
        company: "Duality Group",
        description: "Building the whole thing"
    },
    {
        title: "Director of Engineering",
        company: "RotoQL",
        description: "Constructing the whole new products"
    },
    {
        title: "Lead Database Engineer",
        company: "Knewton",
        description: "Running a lot of cassandra"
    },
    {
        title: "Lead Database Engineer",
        company: "Sailthru",
        description: "All the mongo r belong to me"
    },
    {
        title: "Software Engineer",
        company: "We Care",
        description: "I got some death threats"
    }
]

export default function ExperienceBlock(){
    return (
        <>
            <div className="py-12 text-xl flex">
                Industry Experience
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10 gap-y-10">
                {
                    jobs.map((job) => {
                        return <ExpEntry
                            title={job.title}
                            company={job.company}
                            url={job?.url}
                            description={job.description}
                        />
                    })
                }                                           
            </div>
        </>
    );
}