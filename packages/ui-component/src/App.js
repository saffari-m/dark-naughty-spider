import React from "react";

import Button from "@components/button";
import Typography from "@components/typography";

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
      </div>
    </div>
  );
}

export default App;
