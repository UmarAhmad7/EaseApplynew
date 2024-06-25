import dayjs from "dayjs";
const JobCard=(props)=>{

    const date1=dayjs(Date.now())
    const diffInDays=date1.diff(props.postedOn,'day');
    return(<div className=" mx-40 mb-4">
        <div className=" bg-zinc-200 flex justify-between items-center px-6 py-4 rounded-md border border-4 border shadow-lg ease duration-150 hover:bg-pink-50 hover:border-4 hover:border-blue-500 ">
            <div className="flex flex-col items-start gap-3">
              <h1 className="text-lg font-semibold">{props.title} - {props.company}</h1>
              <p>{props.type} &#x2022; {props.experience} &#x2022; {props.location } </p>
              <div className="flex items-center gap-2">
               {props.skills.map((skill )=>(<p key={skill} className=" text-gray-500 py-1 px-2 rounded-md border border-black">
                {skill}</p>))}
              </div>
            </div>
            <div className="flex items-center gap-4">
             <p className="text-gray-500">Posted {diffInDays} {diffInDays>1?(`days`):(`day`)} ago</p>
             <a href={props.job_link} target="_main"><button className="text-blue-500 border border-blue-500 px-10 py-2 rounded-md">Apply</button></a>
            </div>
        </div>
    </div>);
}
export default JobCard;