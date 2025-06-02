import { MapPinIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Separator } from "../../../../components/ui/separator";
import { JobFilters } from "../../Assignemnt";
import { Slider, SliderThumb } from "../../../../components/ui/slider";

interface HeaderSectionProps {
  filters: JobFilters;
  onFiltersChange: (filters: Partial<JobFilters>) => void;
}

export const HeaderSection = ({ filters, onFiltersChange }: HeaderSectionProps): JSX.Element => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFiltersChange({ searchQuery: e.target.value });
  };

  const handleLocationChange = (value: string) => {
    onFiltersChange({ location: value });
  };

  const handleJobTypeChange = (value: string) => {
    onFiltersChange({ jobType: value });
  };

  const handleSalaryChange = (values: number[]) => {
    onFiltersChange({
      salaryRange: {
        min: values[0],
        max: values[1],
      },
    });
  };

  return (
    <header className="w-full flex border-b border-[#E5E5E5] bg-white shadow-[0px_10px_14px_0px_#C6BFBF40]">
      <div className="w-[1440px] h-[120px] flex flex-row items-center px-8 pt-5 gap-8">
        {/* Search */}
        <div className="flex items-center flex-1 min-w-[220px] max-w-[300px]">
          <SearchIcon className="mr-3 h-6 w-6 text-[#B0B0B0]" />
          <Input
            className="border-none outline-none shadow-none bg-transparent px-0 py-0 text-[#686868] placeholder-[#686868] font-normal text-base focus:ring-0 focus:outline-none"
            placeholder="Search By Job Title, Role"
            value={filters.searchQuery}
            onChange={handleSearch}
          />
        </div>
        {/* Divider */}
        <div className="h-10 w-px bg-[#E5E5E5] mx-8" />
        {/* Location */}
        <div className="flex items-center flex-1 min-w-[180px] max-w-[220px]">
          <MapPinIcon className="mr-3 h-6 w-6 text-[#B0B0B0]" />
          <Select value={filters.location} onValueChange={handleLocationChange}>
            <SelectTrigger className="border-none outline-none shadow-none bg-transparent px-0 py-0 text-[#686868] placeholder-[#686868] font-normal text-base focus:ring-0 focus:outline-none">
              <SelectValue placeholder="Preferred Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="remote">Remote</SelectItem>
              <SelectItem value="onsite">Onsite</SelectItem>
              <SelectItem value="hybrid">Hybrid</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* Divider */}
        <div className="h-10 w-px bg-[#E5E5E5] mx-8" />
        {/* Job Type */}
        <div className="flex items-center flex-1 min-w-[150px] max-w-[180px]">
          <img
            src="/Vector.svg"
            alt="Job Type"
            className="mr-3 h-5 w-5"
            style={{ color: '#B0B0B0' }}
          />
          <Select value={filters.jobType} onValueChange={handleJobTypeChange}>
            <SelectTrigger className="border-none outline-none shadow-none bg-transparent px-0 py-0 text-[#686868] placeholder-[#686868] font-normal text-base focus:ring-0 focus:outline-none">
              <SelectValue placeholder="Job type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="full-time">Full Time</SelectItem>
              <SelectItem value="part-time">Part Time</SelectItem>
              <SelectItem value="contract">Contract</SelectItem>
              <SelectItem value="freelance">Freelance</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* Divider */}
        <div className="h-10 w-px bg-[#E5E5E5] mx-8" />
        {/* Salary Slider */}
        <div className="flex flex-col flex-1 min-w-[220px] max-w-[300px]">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-[#222] text-base">Salary Per Month</span>
            <span className="font-bold text-[#222] text-base">₹{filters.salaryRange.min}k - ₹{filters.salaryRange.max}k</span>
          </div>
          <div className="relative h-6 flex items-center">
            <Slider
              range
              min={50}
              max={200}
              step={1}
              value={[filters.salaryRange.min, filters.salaryRange.max]}
              onValueChange={handleSalaryChange}
              className="w-full"
            >
              <SliderThumb />
              <SliderThumb />
            </Slider>
          </div>
        </div>
      </div>
    </header>
  );
};