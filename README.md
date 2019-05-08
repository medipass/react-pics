# React Pics

> Tiny (2.3kB) React component for image lazy loading

<p align="center"><img src="./react-pics.png" width="600px"></img></p>


## Table of Contents

- [React Pics](#react-pics)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Basic](#basic)
    - [With a placeholder](#with-a-placeholder)
    - [Responsive images](#responsive-images)
    - [Props on `<Pic>`](#props-on-pic)
  - [`<Pic>` props](#pic-props)
    - [use](#use)
      - [Example](#example)
    - [placeholder](#placeholder)
  - [License](#license)

## Installation

```
npm install react-pics --save
```

or install with [Yarn](https://yarnpkg.com) if you prefer:

```
yarn add react-pics
```

## Usage

### Basic

Place your image component as a child to `<Pic>` and it will handle the lazy loading for you.

> Note: by default, `<Pic>` renders a `<picture>` component. To change this, you can [add a custom component with the `use` prop]().

```jsx
import Pic from 'react-pics';

function MyPics() {
  return (
    <Pic>
      <img src="/my-image-high-res.jpg" />
    </Pic>
  )
}
```

### With a placeholder

Give the `placeholder` component your image:

```jsx
import Pic from 'react-pics';

function MyPics() {
  return (
    <Pic placeholder={<img src="/my-image-low-res.jpg" />}>
      <img src="/my-image-high-res.jpg" />
    </Pic>
  )
}
```

### Responsive images

The `<Pics>` inherits the nature of the `<picture>` component. You can render different images for certain viewports using the `<source>` component.

```jsx
import Pic from 'react-pics';

function MyPics() {
  return (
    <Pic placeholder={<img src="/my-image-low-res.jpg" />}>
      <source media="(max-width: 480px)" src="/my-image-480w.jpg" />
      <source media="(max-width: 720px)" src="/my-image-720w.jpg" />
      <source media="(max-width: 1024px)" src="/my-image-1024w.jpg" />
      <img src="/my-image-high-res.jpg" />
    </Pic>
  )
}
```

### Props on `<Pic>`

You can add HTML props to `<Pic>` if you wish:

```jsx
import Pic from 'react-pics';

function MyPics() {
  return (
    <Pic style={{ width: '100%' }}>
      <img src="/my-image-high-res.jpg" />
    </Pic>
  )
}
```

```jsx
import Pic from 'react-pics';
import styled from 'styled-components';

const AwesomePic = styled(Pic)`
  height: 100%
`;

function MyPics() {
  return (
    <AwesomePic>
      <img src="/my-image-high-res.jpg" />
    </AwesomePic>
  )
}
```



## `<Pic>` props

### use

> `string | Element<any>` | Optional | Default: `"picture"`

Replaces the default `<picture>` component with something else.

#### Example

```jsx
function MyPics() {
  return (
    <Pic use="div">
      <img src="/my-image-high-res.jpg" />
    </Pic>
  )
}
```

### placeholder

> `Element<"img">` | Optional

Add a placeholder image to use while the image loads.

```jsx
import Pic from 'react-pics';

function MyPics() {
  return (
    <Pic placeholder={<img src="/my-image-low-res.jpg" />}>
      <img src="/my-image-high-res.jpg" />
    </Pic>
  )
}
```

## License

MIT © [Medipass Solutions Pty. Ltd.](https://github.com/medipass)

