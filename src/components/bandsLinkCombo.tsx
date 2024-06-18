"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRouter, usePathname } from "next/navigation";

export function BandsLinkCombo({ bands }: any) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const router = useRouter();
  const pathName = usePathname();

  const urlPattern = /^\/[^\/]+\/(.*)/;
  React.useEffect(() => {
    if (pathName.includes("bands")) {
      const match = pathName.match(urlPattern);
      if (match && match[1]) {
        console.log(match[1]);
        setValue(match[1].replaceAll("_", " "));
      }
    } else {
        setValue("")
    }
  }, [pathName]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between truncate "
        >
          {value
            ? bands.find((band: any) => band.value === value)?.label
            : "Select band..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search band..." className="h-9" />
          <CommandList>
            <CommandEmpty>No band found.</CommandEmpty>
            <CommandGroup>
              {bands.map((band: any) => (
                <CommandItem
                  key={band.value}
                  value={band.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    router.push(`/bands/${band.value.replaceAll(" ", "_")}`);
                  }}
                >
                  {band.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === band.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
