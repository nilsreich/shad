import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { FilterIcon, MoreVertical } from "lucide-react";

export const Sidebar = () => {
  return (
    <div className="border-r min-w-[300px] flex flex-col p-4 gap-2">
      <div className="flex gap-2">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a course" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">BGY22a</SelectItem>
            <SelectItem value="dark">BGY22b</SelectItem>
            <SelectItem value="system">BF122a</SelectItem>
          </SelectContent>
        </Select>
        <Button className="w-min whitespace-nowrap">Start</Button>
      </div>

      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search..." />
        <Button size={"icon"} variant={"ghost"} className="aspect-square">
          <FilterIcon className="w-4 h-4" strokeWidth={2} />
        </Button>
      </div>
<Separator />
      <div className="flex flex-col gap-4 text-primary">
        <div className="">
          <div className="flex items-center justify-between gap-2">
            <div className="grow">Extremwertaufgaben</div>
            <DropdownMenu>
              <DropdownMenuTrigger  >
                <MoreVertical size={16} strokeWidth={1} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>AI</DropdownMenuLabel>
                <DropdownMenuItem>sumerize</DropdownMenuItem>
                <DropdownMenuItem>generate exercises</DropdownMenuItem>

                <DropdownMenuSeparator />
                <DropdownMenuLabel>File</DropdownMenuLabel>
                <DropdownMenuItem>export</DropdownMenuItem>
                <DropdownMenuItem>edit</DropdownMenuItem>
                <DropdownMenuItem>delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="text-xs">07.07.23</div>
        </div>
        <div className="">
          <div className="flex items-center justify-between gap-2">
            <div className="grow">Anwendungsaufgaben</div>
            <DropdownMenu>
            <DropdownMenuTrigger asChild >
                <MoreVertical size={16} strokeWidth={1} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>AI</DropdownMenuLabel>
                <DropdownMenuItem>sumerize</DropdownMenuItem>
                <DropdownMenuItem>generate exercises</DropdownMenuItem>

                <DropdownMenuSeparator />
                <DropdownMenuLabel>File</DropdownMenuLabel>
                <DropdownMenuItem>export</DropdownMenuItem>
                <DropdownMenuItem>edit</DropdownMenuItem>
                <DropdownMenuItem>delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="text-xs">07.07.23</div>
        </div>
        <div className="">
          <div className="flex items-center justify-between gap-2">
            <div className="grow">Funktionsuntersuchung</div>
            <DropdownMenu>
            <DropdownMenuTrigger asChild >
                <MoreVertical size={16} strokeWidth={1} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>AI</DropdownMenuLabel>
                <DropdownMenuItem>sumerize</DropdownMenuItem>
                <DropdownMenuItem>generate exercises</DropdownMenuItem>

                <DropdownMenuSeparator />
                <DropdownMenuLabel>File</DropdownMenuLabel>
                <DropdownMenuItem>export</DropdownMenuItem>
                <DropdownMenuItem>edit</DropdownMenuItem>
                <DropdownMenuItem>delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="text-xs">07.07.23</div>
        </div>
        <div className="">
          <div className="flex items-center justify-between gap-2">
            <div className="grow">Steckbriefaufgaben</div>
            <DropdownMenu>
            <DropdownMenuTrigger asChild >
                <MoreVertical size={16} strokeWidth={1} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>AI</DropdownMenuLabel>
                <DropdownMenuItem>sumerize</DropdownMenuItem>
                <DropdownMenuItem>generate exercises</DropdownMenuItem>

                <DropdownMenuSeparator />
                <DropdownMenuLabel>File</DropdownMenuLabel>
                <DropdownMenuItem>export</DropdownMenuItem>
                <DropdownMenuItem>edit</DropdownMenuItem>
                <DropdownMenuItem>delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="text-xs">07.07.23</div>
        </div>
        <div className="">
          <div className="flex items-center justify-between gap-2">
            <div className="grow whitespace-nowrap overflow-hidden">
              Gebrochen-Rationale Funktionen
            </div>
            <DropdownMenu>
            <DropdownMenuTrigger asChild >
                <MoreVertical size={16} strokeWidth={1} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>AI</DropdownMenuLabel>
                <DropdownMenuItem>sumerize</DropdownMenuItem>
                <DropdownMenuItem>generate exercises</DropdownMenuItem>

                <DropdownMenuSeparator />
                <DropdownMenuLabel>File</DropdownMenuLabel>
                <DropdownMenuItem>export</DropdownMenuItem>
                <DropdownMenuItem>edit</DropdownMenuItem>
                <DropdownMenuItem>delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="text-xs">07.07.23</div>
        </div>
        <div className="">
          <div className="flex items-center justify-between gap-2">
            <div className="grow">Differentialrechnung</div>
            <DropdownMenu>
            <DropdownMenuTrigger asChild >
                <MoreVertical size={16} strokeWidth={1} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>AI</DropdownMenuLabel>
                <DropdownMenuItem>sumerize</DropdownMenuItem>
                <DropdownMenuItem>generate exercises</DropdownMenuItem>

                <DropdownMenuSeparator />
                <DropdownMenuLabel>File</DropdownMenuLabel>
                <DropdownMenuItem>export</DropdownMenuItem>
                <DropdownMenuItem>edit</DropdownMenuItem>
                <DropdownMenuItem>delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="text-xs">07.07.23</div>
        </div>
      </div>
    </div>
  );
};
