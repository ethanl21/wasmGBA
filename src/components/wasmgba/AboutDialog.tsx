import { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Github } from "lucide-react";

interface AboutDialogProps {
  upstreamRepo?: string;
  repo?: string;
  open?: boolean;
  setIsOpen?: (open: boolean) => void;
}
export default function AboutDialog({
  upstreamRepo = "",
  repo = "",
  open = false,
  setIsOpen = () => {},
}: AboutDialogProps) {
  let upstream = "";
  let commit = "";
  if (upstreamRepo != null) {
    // copy string to prevent mutation of env var
    const upstream_url = new URL(("" + upstreamRepo).slice(1));
    const parts = upstream_url?.pathname.split("/");
    upstream = `${parts[1]}/${parts[2]}`;
    commit = `${parts[4]}`.slice(0, 10);
  }

  return (
    <>
      <Dialog open={open} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>wasmGBA</DialogTitle>
            {upstream != "" && commit != "" && (
              <DialogDescription>
                using&nbsp;
                <a
                  href={upstreamRepo?.toString()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {upstream}@{commit}
                </a>
              </DialogDescription>
            )}
          </DialogHeader>

          <div>
            <p>
              A simple web-based frontend for mGBA. Emulation is performed
              entirely in the browser; no ROMs are provided and user-supplied
              ROMs are not uploaded to the server.
            </p>
          </div>
          <div className="flex justify-end">
            <a
              href={repo}
              target="_blank"
              className={buttonVariants({ variant: "default" })}
            >
              <div className="flex flex-row space-x-3 justify-center items-center">
                <Github />
                <span>Source Code</span>
              </div>
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
