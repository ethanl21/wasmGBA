import { StoryObj, type Meta } from "@storybook/react";

import AboutDialog from "@/components/wasmgba/AboutDialog";

const meta: Meta<typeof AboutDialog> = {
  component: AboutDialog,
  args: {
    open: false,
  },
  argTypes: {
    setIsOpen: {
      action: "setIsOpen",
      table: {
        disable: true,
      },
    },
    open: {
      type: "boolean",
      defaultValue: "false",
    },
    upstreamRepo: {
      type: "string",
      defaultValue: "https://example.com",
    },
    repo: {
      type: "string",
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof AboutDialog>;
export const Default: Story = {
  args: {
    open: false,
    upstreamRepo: "https://example.com",
    repo: "https://example.com",
  },
  argTypes: {
    setIsOpen: {
      action: "clicked",
    },
  },
  render: ({ open, upstreamRepo, repo, setIsOpen }) => {
    return (
      <div>
        <AboutDialog
          open={open}
          upstreamRepo={upstreamRepo}
          repo={repo}
          setIsOpen={setIsOpen}
        />
      </div>
    );
  },
};
