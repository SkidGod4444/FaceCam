import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function AgePicker() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select your age..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Your Age</SelectLabel>
          <SelectItem value="0">Random...</SelectItem>
          <SelectItem value="16+">Above 16</SelectItem>
          <SelectItem value="18+">Above 18</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
