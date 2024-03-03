import React from "react";

import Button from "@components/button";
import Typography from "@components/typography";

const Color = ({ className, ...props }) => (
  <div
    className={
      "flex h-32 w-32 items-center justify-center rounded border border-border-ultra text-center " +
      className
    }
    {...props}
  />
);
//TODO: some how we should extract this component tailwind styles from final bundle.
function App() {
  return (
    <div className="container mx-auto pt-10 text-white">
      <h2 className="mb-4">Button</h2>
      <div>
        <Button>تماشای فیلم</Button>
      </div>

      <h2 className="mb-4">Typography</h2>
      <div className="space-y-2">
        <h3>Display</h3>
        <Typography type="display" size="l">
          تلوبیون: مرجع پخش زنده و دانلود فیلم
        </Typography>
        <Typography type="display" size="m">
          تلوبیون: مرجع پخش زنده و دانلود فیلم
        </Typography>

        <h3>Heading</h3>
        <Typography type="heading" size="xl">
          تلوبیون: مرجع پخش زنده و دانلود فیلم
        </Typography>
        <Typography type="heading" size="l">
          تلوبیون: مرجع پخش زنده و دانلود فیلم
        </Typography>
        <Typography type="heading" size="m">
          تلوبیون: مرجع پخش زنده و دانلود فیلم
        </Typography>
        <Typography type="heading" size="m" bold>
          تلوبیون: مرجع پخش زنده و دانلود فیلم
        </Typography>
        <Typography type="heading" size="s">
          تلوبیون: مرجع پخش زنده و دانلود فیلم
        </Typography>
        <Typography type="heading" size="s" bold>
          تلوبیون: مرجع پخش زنده و دانلود فیلم
        </Typography>

        <h3>Label</h3>
        <Typography type="label" size="l">
          تلوبیون: مرجع پخش زنده و دانلود فیلم
        </Typography>
        <Typography type="label" size="l" bold>
          تلوبیون: مرجع پخش زنده و دانلود فیلم
        </Typography>
        <Typography type="label" size="m">
          تلوبیون: مرجع پخش زنده و دانلود فیلم
        </Typography>
        <Typography type="label" size="m" bold>
          تلوبیون: مرجع پخش زنده و دانلود فیلم
        </Typography>
        <Typography type="label" size="s">
          تلوبیون: مرجع پخش زنده و دانلود فیلم
        </Typography>

        <h3>Paragraph</h3>
        <Typography type="paragraph" size="l">
          تلوبیون: مرجع پخش زنده و دانلود فیلم
        </Typography>
        <Typography type="paragraph" size="l" bold>
          تلوبیون: مرجع پخش زنده و دانلود فیلم
        </Typography>
        <Typography type="paragraph" size="m">
          تلوبیون: مرجع پخش زنده و دانلود فیلم
        </Typography>
        <Typography type="paragraph" size="m" bold>
          تلوبیون: مرجع پخش زنده و دانلود فیلم
        </Typography>
        <Typography type="paragraph" size="s">
          تلوبیون: مرجع پخش زنده و دانلود فیلم
        </Typography>
        <Typography type="paragraph" size="s" bold>
          تلوبیون: مرجع پخش زنده و دانلود فیلم
        </Typography>

        <h2 className="mb-4">Colors</h2>
        <div className="flex gap-2">
          <Color className="bg-primary">bg-primary</Color>
          <Color className="bg-secondary">bg-secondary</Color>
          <Color className="bg-tertiary">bg-tertiary</Color>
          <Color className="bg-inverted text-black">bg-inverted</Color>
        </div>

        <div className="flex gap-2">
          <Color className="bg-surface-primary-low text-black">bg-surface-primary-low</Color>
          <Color className="bg-surface-primary-medium text-black">bg-surface-primary-medium</Color>
          <Color className="bg-surface-primary-high text-black"> bg-surface-primary-high </Color>
          <Color className="bg-surface-primary-extra text-black"> bg-surface-primary-extra </Color>
          <Color className="bg-surface-primary-ultra text-black"> bg-surface-primary-ultra </Color>
        </div>

        <div className="flex gap-2">
          <Color className="bg-surface-accent-low text-black">bg-surface-accent-low</Color>
          <Color className="bg-surface-accent-medium">bg-surface-accent-medium</Color>
          <Color className="bg-surface-accent-high"> bg-surface-accent-high </Color>
          <Color className="bg-surface-accent-extra"> bg-surface-accent-extra </Color>
          <Color className="bg-surface-accent-ultra"> bg-surface-accent-ultra </Color>
        </div>

        and more...
      </div>
    </div>
  );
}

export default App;
