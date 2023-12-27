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
import { IoLanguage } from "react-icons/io5";

const languages = [
        {
          "value": "english",
          "label": "English"
        },
        {
          "value": "hindi",
          "label": "Hindi"
        },
        {
          "value": "korean",
          "label": "Korean"
        },
        {
            "value": "japanese",
            "label": "Japanese"
          },
          {
            "value": "french",
            "label": "French"
          },
          {
            "value": "arabic",
            "label": "Arabic"
          },
          {
            "value": "spanish",
            "label": "Spanish"
          },
          {
            "value": "portuguese",
            "label": "Portuguese"
          },
          {
            "value": "italian",
            "label": "Italian"
          },
          {
            "value": "chinese",
            "label": "Chinese"
          },
          {
            "value": "mandarin",
            "label": "Mandarin Chinese"
          },
          {
            "value": "russian",
            "label": "Russian"
          }
      
]

export function LangPicker() {
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
            ? languages.find((language) => language.value === value)?.label
            : 
            <div className="flex items-center ">
            <IoLanguage className="h-4 w-4 mr-2 text-black " />
            Select Language...
                </div>}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Find your language..." />
          <CommandEmpty>No language found.</CommandEmpty>
          <CommandGroup>
            {languages.map((language) => (
              <CommandItem
                key={language.value}
                value={language.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === language.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {language.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
