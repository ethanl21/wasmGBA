import { StoryObj, type Meta } from "@storybook/react";

import AboutDialog from "@/components/wasmgba/AboutDialog";

const meta: Meta<typeof AboutDialog> = {
  component: AboutDialog,
  title: "Windows/AboutDialog",
  args: {
    open: true,
    upstreamRepo: "https://example.com",
    repo: "https://example.com",
  },
  argTypes: {
    setIsOpen: {
      action: "clicked",
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof AboutDialog>;
export const Default: Story = {
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
