import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectCountry = () => {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select country" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Kenya">🇰🇪 Kenya</SelectItem>
        <SelectItem value="Uganda">🇺🇬 Uganda</SelectItem>
        <SelectItem value="Tanzania">🇹🇿 Tanzania</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectCountry;
