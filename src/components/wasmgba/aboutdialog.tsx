import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { Github } from "lucide-react";

interface AboutDialogProps {
  upstreamRepo?: string | URL;
  repo?: string | URL;
  open?: boolean;
  setIsOpen?: (open: boolean) => void;
}
export default function AboutDialog(props: AboutDialogProps) {
  if (typeof props.upstreamRepo === "string")
    props.upstreamRepo = new URL(props.upstreamRepo);

  let upstream = "";
  let commit = "";
  if (props.upstreamRepo != null) {
    const parts = props.upstreamRepo?.pathname.split("/");
    upstream = `${parts[1]}/${parts[2]}`;
    commit = `${parts[4]}`.slice(0, 10);
  }

  return (
    <>
      <Dialog open={props.open} onOpenChange={props.setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>wasmGBA</DialogTitle>
            {upstream != "" && commit != "" && (
              <DialogDescription>
                using&nbsp;
                <a
                  href={props.upstreamRepo?.toString()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {upstream} @ {commit}
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
            <Button
              className="space-x-2"
              onClick={() => window.open(props.repo, "_blank")}
            >
              <Github />
              Source Code
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
