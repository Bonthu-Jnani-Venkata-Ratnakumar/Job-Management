import React, { useState } from "react";
import { HeaderSection } from "./sections/HeaderSection";
import { JobListingsSection } from "./sections/JobListingsSection/JobListingsSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NavigationBarSection } from "./sections/NavigationBarSection/NavigationBarSection";

export interface JobFilters {
  searchQuery: string;
  location: string;
  jobType: string;
  salaryRange: { min: number; max: number };
}

export const Assignemnt = (): JSX.Element => {
  const [filters, setFilters] = useState<JobFilters>({
    searchQuery: "",
    location: "",
    jobType: "",
    salaryRange: { min: 80, max: 150 },
  });

  const handleFiltersChange = (newFilters: Partial<JobFilters>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return (
    <div className="bg-[#fbfbff] flex flex-col min-h-screen w-full">
      <div className="bg-[#fbfbff] w-full">
        <header className="w-full px-4 md:px-0 bg-white">
          <NavigationBarSection />
          <HeaderSection filters={filters} onFiltersChange={handleFiltersChange} />
        </header>

        <main className="w-full">
          <MainContentSection />
        </main>

        <section className="w-full">
          <JobListingsSection filters={filters} />
        </section>
      </div>
    </div>
  );
};