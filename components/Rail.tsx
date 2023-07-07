import { Button } from "@/components/ui/button";
import { LayoutDashboardIcon, Table, Users, Files, Atom } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipArrow
} from "@/components/ui/tooltip";

export const Rail = () => {
  return (
    <div className=" gap-2 border-r flex flex-col p-4 items-center">

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="bg-neutral-100">
              <LayoutDashboardIcon className="h-4 w-4" strokeWidth={1} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Dashboard</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
        <TooltipTrigger asChild>
            <Button variant="ghost" size="icon">
              <Table className="h-4 w-4" strokeWidth={1} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Documents</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
        <TooltipTrigger asChild>
            <Button variant="ghost" size="icon">
              <Users className="h-4 w-4" strokeWidth={1} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Users</p>

          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
        <TooltipTrigger asChild>
            <Button variant="ghost" size="icon">
              <Files className="h-4 w-4" strokeWidth={1} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Files</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
