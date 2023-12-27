"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { FaGlobeAmericas } from "react-icons/fa";

const regions = [
    {
        "value": "random",
        "label": "Random..."
      },
    {
      "value": "china",
      "label": "China"
    },
    {
      "value": "india",
      "label": "India"
    },
    {
      "value": "united-states",
      "label": "United States"
    },
    {
      "value": "indonesia",
      "label": "Indonesia"
    },
    {
      "value": "pakistan",
      "label": "Pakistan"
    },
    {
      "value": "brazil",
      "label": "Brazil"
    },
    {
      "value": "nigeria",
      "label": "Nigeria"
    },
    {
      "value": "bangladesh",
      "label": "Bangladesh"
    },
    {
      "value": "russia",
      "label": "Russia"
    },
    {
      "value": "mexico",
      "label": "Mexico"
    }
  ]
  

export function RegionPicker() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? regions.find((region) => region.value === value)?.label
            : 
            <div className="flex items-center ">
            <FaGlobeAmericas className="h-4 w-4 mr-2 text-black " />
            Select Region...
                </div>}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Find your region..." />
          <CommandEmpty>No language found.</CommandEmpty>
          <CommandGroup>
            {regions.map((region) => (
              <CommandItem
                key={region.value}
                value={region.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === region.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {region.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
