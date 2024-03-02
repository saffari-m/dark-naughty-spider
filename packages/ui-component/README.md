# UI Component

> The ui components made with styled-components.

# tech

- [swiper](https://github.com/nolimits4web/Swiper) - using swiper in slider component

## Installation

You can install all ui components with...

```sh
$ npm install --save @telewebion/ui-component
```

or

```sh
$ yarn add @telewebion/ui-component
```

## Usage

### Component

To see which components are available take a look at the [components section](#components).

```jsx
// whatever components you need
import { Button } from "@telewebion/ui-component";

export const myComponent = (props) => <Button>Hello, World!</Button>;
```

### Tool

Tools for style-components are in [tools section](#tools).

```jsx
import { prop } from "@telewebion/ui-component/tool";
```

### Style

To import icons font :

```jsx
import "@telewebion/ui-component/tw-ui-style.css";
```

## Components

For detailed information take a look at the [documentation].

- Button Component
- Card Component
- Divider Component
- Grid Component
- Icon Component
- Ratio Component
- Skeleton Component
- Slider Component
- Typography Component

## Tools

- It's part of [styled-tool](https://github.com/diegohaz/styled-tools) project

* media
* prop
* ifProp
* ifNotProp
* switchProp
* them
* withProp
