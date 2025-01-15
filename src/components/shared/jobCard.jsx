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

function JobCard(props) {
  return (
    <div className="mt-4 flex flex-col gap-y-8">
      <Link to={`/job/${props._id}`} className="block">
        <Card>
          <CardHeader>
            <CardTitle>{props.title}</CardTitle>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className="gap-x-4">
            <div className="flex items-center gap-x-2">
              <Briefcase />
              <span>{props.type}</span>
            </div>
            <div className="flex items-center gap-x-2">
              <MapPin />
              <span>{props.location}</span>
            </div>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
}

export default JobCard;
