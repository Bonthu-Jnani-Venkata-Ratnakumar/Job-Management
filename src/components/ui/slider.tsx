"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "../../lib/utils";

interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  range?: boolean;
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, children, range, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-action-none items-center select-none",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-[#E5E5E5]">
      {range ? <SliderPrimitive.Range className="absolute h-full bg-black" /> : null}
    </SliderPrimitive.Track>
    {children}
  </SliderPrimitive.Root>
));

Slider.displayName = SliderPrimitive.Root.displayName;

const SliderThumb = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Thumb>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Thumb>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Thumb
    ref={ref}
    className={cn(
      "block h-4 w-4 rounded-full bg-black ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black disabled:pointer-events-none disabled:opacity-50 flex items-center justify-center",
      className
    )}
    {...props}
  >
    <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
  </SliderPrimitive.Thumb>
));

SliderThumb.displayName = SliderPrimitive.Thumb.displayName;

export { Slider, SliderThumb }; 