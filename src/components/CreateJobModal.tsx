import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface CreateJobModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CreateJobModal = ({ open, onOpenChange }: CreateJobModalProps) => {
  const [jobData, setJobData] = useState({
    jobTitle: "",
    companyName: "",
    location: "",
    jobType: "",
    salaryRange: "",
    applicationDeadline: "",
    jobDescription: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setJobData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setJobData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Job posting data:", jobData);
    // Implement job posting logic here
    onOpenChange(false);
    alert("Job posted successfully!");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-6">
            Create Job Opening
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Input
                name="jobTitle"
                placeholder="Job Title"
                value={jobData.jobTitle}
                onChange={handleInputChange}
                className="w-full"
              />
            </div>
            <div>
              <Input
                name="companyName"
                placeholder="Company Name"
                value={jobData.companyName}
                onChange={handleInputChange}
                className="w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Select
              value={jobData.location}
              onValueChange={(value) => handleSelectChange("location", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="chennai">Chennai</SelectItem>
                <SelectItem value="bangalore">Bangalore</SelectItem>
                <SelectItem value="hyderabad">Hyderabad</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={jobData.jobType}
              onValueChange={(value) => handleSelectChange("jobType", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full-time">Full Time</SelectItem>
                <SelectItem value="part-time">Part Time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
                <SelectItem value="internship">Internship</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              name="salaryRange"
              placeholder="Salary Range"
              value={jobData.salaryRange}
              onChange={handleInputChange}
              className="w-full"
            />
            <Input
              name="applicationDeadline"
              type="date"
              placeholder="Application Deadline"
              value={jobData.applicationDeadline}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>
          <div>
            <textarea
              name="jobDescription"
              placeholder="Job Description"
              value={jobData.jobDescription}
              onChange={handleInputChange}
              className="w-full h-32 p-2 border rounded-md"
            />
          </div>
          <div className="flex justify-between mt-4">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="w-[120px]"
            >
              Save Draft
            </Button>
            <Button
              onClick={handleSubmit}
              className="w-[120px] bg-[#00aaff] hover:bg-[#0099ee]"
            >
              Publish
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};