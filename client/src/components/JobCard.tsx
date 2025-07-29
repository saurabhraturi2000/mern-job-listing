import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Job } from "@/types/job";
import { MapPin, Building2, Clock, ArrowRight } from "lucide-react";

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full-time":
        return "bg-success/10 text-success border-success/20";
      case "Part-time":
        return "bg-warning/10 text-warning border-warning/20";
      case "Contract":
        return "bg-info/10 text-info border-info/20";
      case "Internship":
        return "bg-primary/10 text-primary border-primary/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
              {job.logoUrl ? (
                <img
                  src={job.logoUrl}
                  alt={`${job.company} logo`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Building2 className="h-6 w-6 text-muted-foreground" />
              )}
            </div>
            <div>
              <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                {job.title}
              </h3>
              <p className="text-muted-foreground text-sm">{job.company}</p>
            </div>
          </div>
          <Badge className={getTypeColor(job.type)}>{job.type}</Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-3">
          <div className="flex items-center text-sm text-muted-foreground space-x-4">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{new Date(job.createdAt).toLocaleDateString()}</span>
            </div>
          </div>

          {job.salary && (
            <div className="text-sm font-medium text-foreground">
              {job.salary}
            </div>
          )}

          <p className="text-sm text-muted-foreground line-clamp-2">
            {job.description}
          </p>

          <div className="pt-2">
            <Button
              asChild
              variant="outline"
              className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            >
              <Link
                to={`/job/${job._id}`}
                className="flex items-center justify-center space-x-2"
              >
                <span>View Details</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
