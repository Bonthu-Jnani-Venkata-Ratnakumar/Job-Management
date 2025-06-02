import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { JobFilters } from "../../Assignemnt";

interface JobListingsSectionProps {
  filters: JobFilters;
}

export const JobListingsSection = ({ filters }: JobListingsSectionProps): JSX.Element => {
  const originalJobListings = [
    {
      id: 1,
      title: "Node Js Developer",
      experience: "1-3 yr Exp",
      location: "Onsite",
      salary: "12LPA",
      salaryValue: 100,
      jobType: "full-time",
      postedTime: "24h Ago",
      description:
        "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
      logoSrc: "/image-79.svg",
      logoContainerClass: "relative w-[66px] h-[66px] top-2 left-[9px] bg-white rounded-[102.5px] overflow-hidden",
      logoStyle: "absolute w-[45px] h-[45px] top-3.5 left-2.5",
    },
    {
      id: 2,
      title: "UX/UI Designer",
      experience: "1-3 yr Exp",
      location: "Remote",
      salary: "12LPA",
      salaryValue: 100,
      jobType: "part-time",
      postedTime: "24h Ago",
      description:
        "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
      logoSrc: "/image-78.svg",
      logoContainerClass: "relative w-[60px] h-[60px] top-[11px] left-3 bg-[#f7881f] rounded-[93.33px] overflow-hidden",
      logoStyle: "absolute w-[51px] h-[51px] top-0.5 left-0.5",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      experience: "1-3 yr Exp",
      location: "Hybrid",
      salary: "12LPA",
      salaryValue: 100,
      jobType: "contract",
      postedTime: "24h Ago",
      description:
        "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
      logoSrc: "/image-77.svg",
      logoContainerClass: "relative w-[66px] h-[66px] top-2 left-[9px] bg-white rounded-[102.5px] overflow-hidden",
      logoStyle: "object-cover",
    },
    {
      id: 4,
      title: "Node Js Developer",
      experience: "1-3 yr Exp",
      location: "Onsite",
      salary: "12LPA",
      salaryValue: 100,
      jobType: "freelance",
      postedTime: "24h Ago",
      description:
        "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
      logoSrc: "/image-79.svg",
      logoContainerClass: "relative w-[66px] h-[66px] top-2 left-[9px] bg-white rounded-[102.5px] overflow-hidden",
      logoStyle: "absolute w-[45px] h-[45px] top-3.5 left-2.5",
    },
    {
      id: 5,
      title: "Full Stack Developer",
      experience: "1-3 yr Exp",
      location: "Onsite",
      salary: "12LPA",
      salaryValue: 100,
      jobType: "full-time",
      postedTime: "24h Ago",
      description:
        "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
      logoSrc: "/image-77.svg",
      logoContainerClass: "relative w-[66px] h-[66px] top-2 left-[9px] bg-white rounded-[102.5px] overflow-hidden",
      logoStyle: "object-cover",
    },
    {
      id: 6,
      title: "Node Js Developer",
      experience: "1-3 yr Exp",
      location: "Onsite",
      salary: "12LPA",
      salaryValue: 100,
      jobType: "full-time",
      postedTime: "24h Ago",
      description:
        "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
      logoSrc: "/image-79.svg",
      logoContainerClass: "relative w-[66px] h-[66px] top-2 left-[9px] bg-white rounded-[102.5px] overflow-hidden",
      logoStyle: "absolute w-[45px] h-[45px] top-3.5 left-2.5",
    },
    {
      id: 7,
      title: "UX/UI Designer",
      experience: "1-3 yr Exp",
      location: "Onsite",
      salary: "12LPA",
      salaryValue: 100,
      jobType: "part-time",
      postedTime: "24h Ago",
      description:
        "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
      logoSrc: "/image-78.svg",
      logoContainerClass: "relative w-[60px] h-[60px] top-[11px] left-3 bg-[#f7881f] rounded-[93.33px] overflow-hidden",
      logoStyle: "absolute w-[51px] h-[51px] top-0.5 left-0.5",
    },
    {
      id: 8,
      title: "Full Stack Developer",
      experience: "1-3 yr Exp",
      location: "Onsite",
      salary: "12LPA",
      salaryValue: 100,
      jobType: "full-time",
      postedTime: "24h Ago",
      description:
        "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
      logoSrc: "/image-77.svg",
      logoContainerClass: "relative w-[66px] h-[66px] top-2 left-[9px] bg-white rounded-[102.5px] overflow-hidden",
      logoStyle: "object-cover",
    },
  ];

  // Rearrange job listings: bottom 4 to top, top 4 to bottom
  const rearrangedJobListings = [
    ...originalJobListings.slice(4),
    ...originalJobListings.slice(0, 4),
  ];

  const filteredJobs = rearrangedJobListings.filter((job) => {
    const matchesSearch =
      !filters.searchQuery ||
      job.title.toLowerCase().includes(filters.searchQuery.toLowerCase());
    const matchesLocation =
      !filters.location || job.location.toLowerCase() === filters.location.toLowerCase();
    const matchesJobType = !filters.jobType || job.jobType === filters.jobType;
    const matchesSalary =
      (!filters.salaryRange ||
        (job.salaryValue >= filters.salaryRange.min && job.salaryValue <= filters.salaryRange.max));

    return matchesSearch && matchesLocation && matchesJobType && matchesSalary;
  });

  const handleApply = (jobId: number) => {
    console.log(`Applied for job ${jobId}`);
    alert(`Successfully applied for the position!`);
  };

  return (
    <section className="flex flex-wrap justify-center gap-4 p-4">
      {filteredJobs.map((job) => (
        <Card
          key={job.id}
          className="w-full sm:w-[316px] h-[360px] relative rounded-[12px] shadow-md bg-white overflow-hidden transition-shadow duration-300"
        >
          <CardContent className="p-0">
            <div className="absolute w-[83px] h-[82px] top-4 left-4 rounded-[13.18px] overflow-hidden [background:linear-gradient(180deg,rgba(254,254,253,1)_0%,rgba(241,241,241,1)_100%)] border border-solid border-white shadow-[0px_0px_10.25px_#94949440]">
              <div className={job.logoContainerClass}>
                <img
                  className={job.logoStyle + ' object-contain'}
                  alt="Company logo"
                  src={job.logoSrc}
                />
              </div>
            </div>

            <Badge className="absolute top-4 right-4 bg-[#B0D9FF] text-black font-normal px-2.5 py-[7px] rounded-[10px]">
              {job.postedTime}
            </Badge>

            <h3
              className="absolute top-[116px] left-4 text-black text-[20px] font-bold leading-[100%] text-center [font-family:'Satoshi Variable',Helvetica]"
              style={{ letterSpacing: 0 }}
            >
              {job.title}
            </h3>

            <div className="flex flex-wrap items-center gap-4 absolute top-40 left-4">
              <div className="flex items-center gap-1">
                <img src="/frame-48102935.svg" alt="Experience" className="h-4 w-4" />
                <span className="[font-family:'Satoshi Variable',Helvetica] font-normal text-[#5a5a5a] text-base">
                  {job.experience}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <img src="/frame-48102937.svg" alt="Location" className="h-4 w-4" />
                <span className="[font-family:'Satoshi Variable',Helvetica] font-normal text-[#5a5a5a] text-base">
                  {job.location}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <img src="/frame-48102939.svg" alt="Salary" className="h-4 w-4" />
                <span className="[font-family:'Satoshi Variable',Helvetica] font-normal text-[#5a5a5a] text-base">
                  {job.salary}
                </span>
              </div>
            </div>

            <ul className="absolute w-[90%] sm:w-[300px] top-[201px] left-[9px] [font-family:'Satoshi Variable',Helvetica] font-normal text-[#555555] text-sm list-disc pl-5">
              {job.description.split('\n').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <Button
              onClick={() => handleApply(job.id)}
              className="absolute bottom-4 left-4 w-[90%] sm:w-[284px] text-white font-normal rounded-[10px] py-3 transition-colors duration-300 border border-[#00AAFF] shadow-[0px_0px_14px_0px_#5D5D5D26]"
              style={{ background: '#00AAFF' }}
            >
              Apply Now
            </Button>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};