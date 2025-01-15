import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Briefcase, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import JobCard from "@/components/shared/jobCard";

function JobSection() {
  const jobs = [
    {
      _id: "xyz",
      title: "inttern software engineer",
      type: "Full-time",
      location: "Remote",
    },
    {
      _id: "abc",
      title: "software engineer",
      type: "Full-time",
      location: "Remote",
    },
    {
      _id: "bcd",
      title: "cloud solution engineer",
      type: "Full-time",
      location: "Colombo,Sri Lanka",
    },
  ];
  return (
    <section className="py-8 ">
      <h2 className="">Available jobs</h2>
      <div className="mt-4 flex flex-col gap-y-8">
        {jobs.map((job) => {
          return (
            <JobCard
              key={job._id}
              title={job.title}
              id={job._id}
              type={job.type}
              location={job.location}
            />
          );
        })}
      </div>
    </section>
  );
}

export default JobSection;
