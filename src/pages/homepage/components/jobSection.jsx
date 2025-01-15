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
  return (
    <section className="py-8 ">
      <h2 className="">Available jobs</h2>
      <JobCard
        title={"software engineering intern"}
        type={"remote"}
        location={"hikkaduwa, Sri Lanka"}
      />

      <JobCard
        title={"cloud solution engineer"}
        type={"full time"}
        location={"Colombo, Sri Lanka"}
      />
    </section>
  );
}

export default JobSection;
