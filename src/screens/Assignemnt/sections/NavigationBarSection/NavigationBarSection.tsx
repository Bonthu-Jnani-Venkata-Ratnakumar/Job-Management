import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { CreateJobModal } from "../../../../components/CreateJobModal";
import { Menu, X } from "lucide-react";

export const NavigationBarSection = (): JSX.Element => {
  const [isCreateJobOpen, setIsCreateJobOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Find Jobs", href: "#jobs" },
    { label: "Find Talents", href: "#talents" },
    { label: "About us", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  const handleNavigation = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-[21px] left-[275px] z-50 w-[890px] h-[80px] bg-white rounded-[122px] border border-solid border-[#fcfcfc] shadow-[0px_0px_20px_#7f7f7f26] overflow-hidden relative">
      <div className="absolute w-[838px] h-[48px] top-[16px] left-[26px] flex items-center justify-between">
        {/* Logo */}
        <div
          className="w-[44px] h-[44.68px] flex items-center cursor-pointer"
          style={{ top: '1.66px' }}
          onClick={() => handleNavigation("#home")}
        >
          <img
            src="/logo.svg"
            alt="CMW Logo"
            className="w-[44px] h-[44.68px] object-contain"
          />
        </div>
        {/* Nav Items - Centered */}
        <div className="w-[613px] h-[48px] flex items-center justify-between ml-[24px] mr-[24px]">
          <NavigationMenu className="w-full">
            <NavigationMenuList className="flex w-full items-center justify-between whitespace-nowrap">
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="w-[102px] h-[48px] flex items-center justify-center rounded-[12px] px-[5px] gap-[11.14px] font-normal text-[16px] leading-[100%] [font-family:'Satoshi Variable',Helvetica] hover:bg-gray-100 transition-colors duration-300 cursor-pointer whitespace-nowrap"
                  onClick={() => handleNavigation('#home')}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="w-[130px] h-[48px] flex items-center justify-center rounded-[12px] px-[5px] gap-[11.14px] font-normal text-[16px] leading-[100%] [font-family:'Satoshi Variable',Helvetica] hover:bg-gray-100 transition-colors duration-300 cursor-pointer whitespace-nowrap"
                  onClick={() => handleNavigation('#jobs')}
                >
                  Find Jobs
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="w-[146px] h-[48px] flex items-center justify-center rounded-[12px] px-[5px] gap-[11.14px] font-normal text-[16px] leading-[100%] [font-family:'Satoshi Variable',Helvetica] hover:bg-gray-100 transition-colors duration-300 cursor-pointer whitespace-nowrap"
                  onClick={() => handleNavigation('#talents')}
                >
                  Find Talents
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="w-[123px] h-[48px] flex items-center justify-center rounded-[12px] px-[5px] gap-[11.14px] font-normal text-[16px] leading-[100%] [font-family:'Satoshi Variable',Helvetica] hover:bg-gray-100 transition-colors duration-300 cursor-pointer whitespace-nowrap"
                  onClick={() => handleNavigation('#about')}
                >
                  About us
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="w-[148px] h-[48px] flex items-center justify-center rounded-[12px] px-[5px] gap-[11.14px] font-normal text-[16px] leading-[100%] [font-family:'Satoshi Variable',Helvetica] hover:bg-gray-100 transition-colors duration-300 cursor-pointer whitespace-nowrap"
                  onClick={() => handleNavigation('#testimonials')}
                >
                  Testimonials
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/* Create Jobs Button - Right */}
        <div className="flex items-center">
          <Button
            onClick={() => setIsCreateJobOpen(true)}
            className="w-[123px] h-[38px] flex items-center justify-center rounded-[30px] gap-[10px] pt-2 pb-2 pl-6 pr-6 font-normal text-[16px] leading-[100%] [font-family:'Satoshi Variable',Helvetica] [letter-spacing:0] [font-weight:400]"
            style={{ background: 'linear-gradient(180deg, #A128FF 0%, #6100AD 113.79%)' }}
          >
            Create Jobs
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-4 bg-white rounded-2xl shadow-lg md:hidden z-50 py-2 border border-gray-100">
          {navItems.map((item) => (
            <button
              key={item.href}
              className="w-full text-left px-6 py-3 hover:bg-gray-100 transition-colors duration-300 font-normal text-base [font-family:'Satoshi Variable',Helvetica]"
              onClick={() => handleNavigation(item.href)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <CreateJobModal
        open={isCreateJobOpen}
        onOpenChange={setIsCreateJobOpen}
      />
    </nav>
  );
};