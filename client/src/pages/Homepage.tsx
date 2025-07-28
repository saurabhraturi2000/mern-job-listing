import { useState } from "react";
import { useJobs } from "@/context/JobContext";
import { JobCard } from "@/components/JobCard";
import { Navigation } from "@/components/Navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { JobType } from "@/types/job";
import { Search, Filter } from "lucide-react";
// import heroImage from "@/assets/hero-jobs.jpg";

export default function Homepage() {
  const { jobs } = useJobs();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<JobType | "All">("All");

  const jobTypes: (JobType | "All")[] = [
    "All",
    "Full-time",
    "Part-time",
    "Contract",
    "Internship",
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "All" || job.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-background w-screen">
      <Navigation />
      <div className="container mx-auto flex items-center justify-end py-6">
        <div className="max-w-xl relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black z-10" />
          <Input
            placeholder="Search jobs, companies, or locations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-white/90 backdrop-blur-sm border-white/20"
          />
        </div>
      </div>
      {/* Filters and Job Listings */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Latest Jobs</h2>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Filter className="h-4 w-4" />
              <span>{filteredJobs.length} jobs found</span>
            </div>
          </div>

          {/* Job Type Filters */}
          <div className="flex flex-wrap gap-2">
            {jobTypes.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedType(type)}
                className="rounded-full"
              >
                {type}
              </Button>
            ))}
          </div>
        </div>

        {/* Job Grid */}
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <Search className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No jobs found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
