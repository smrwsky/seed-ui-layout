<div style="text-align:center;">

[![Seed UI](https://raw.githubusercontent.com/srgmrwsk/seed-ui-layout/main/seed-ui-logo.png)](https://github.com/srgmrwsk/seed-ui-layout)

Components and style-utilities for creating responsive layouts.

</div>

- 💅 Styled with SCSS. You can import SCSS to use build-in mixins and variables.
- 🪶 Uses utility-first approach and CSS variables for dynamic styles, so final CSS is much smaller.
- 💪 Has simple API typed with TypeScript.
- 🍞 Compatible with any UI-kit. This package is responsible only for layouts.
- 🛠️ Includes reusable style-utils for creating new components and styles.
- 🍂 Allows tree-shaking. Unused code can be removed by Webpack or another bundler with tree-shaking support.

## Install

```shell
yarn add @seed-ui/layout
```

## API

### Container

Used for sizing and spacings around wrapped components.

```typescript jsx
import { Container } from '@seed-ui/layout';

function Page() {
  return (
    <Container
      margin={[0, 'auto']}
      maxWidth={{
        xs: 1,
        sm: 540,
        md: 720,
        lg: 960,
        xl: 1140,
        xxl: 1320
      }}
      padding={[0, 2]}
      width={1}
    >
      {/** Inner content  **/}
    </Container>
  )
}

```

#### Container props

| Name | Description | Default value |
|--|--|--|
| as | ElementType | 'div' |
| height | ResponsiveValue\<Sizing\> | - |
| margin | ResponsiveValue\<Spacing\> | - |
| maxHeight | ResponsiveValue\<Sizing\> | - |
| maxWidth | ResponsiveValue\<Sizing\> | - |
| minHeight | ResponsiveValue\<Sizing\> | - |
| minWidth | ResponsiveValue\<Sizing\> | - |
| padding | ResponsiveValue\<Spacing\> | - |
| [elementProps] | AllHTMLAttributes\<HTMLElement\> | - |

### Row and Col

Used for grid layouts. Must be used together.

```typescript jsx
import { Row, Col } from '@seed-ui/layout';

function Page() {
  return (
    <Row
      align="center"
      justify={{ xs: 'center', md: 'start' }}
      gutter={[3, 4]}
    >
      <Col xs={6} md={4} xl="auto" >
        {/** Inner content **/}
      </Col>

      <Col xs={6} md={4} xl="auto" >
        {/** Inner content **/}
      </Col>
    </Row>
  )
}
```

#### Row props

| Name | Description | Default value |
|--|--|--|
| as | ElementType | 'div' |
| align | ResponsiveValue\<Align\> | - |
| justify | ResponsiveValue\<Justify\> | - |
| gutter | ResponsiveValue\<RowGutter\> | - |
| [elementProps] | AllHTMLAttributes\<HTMLElement\> | - |

#### Col props

| Name | Description | Default value |
|--|--|--|
| as | ElementType | 'div' |
| xs | ColSpan | - |
| sm | ColSpan | - |
| md | ColSpan | - |
| lg | ColSpan | - |
| xl | ColSpan | - |
| xxl | ColSpan | - |
| order | ResponsiveValue\<number\> | - |
| align | ResponsiveValue\<Align\> | '' |
| [elementProps] | AllHTMLAttributes\<HTMLElement\> | - |

### Space

Wraps child components into additional divs and creates spacings between them.

```typescript jsx
import { Space } from '@seed-ui/layout';

function Page() {
  return (
    <Space
      align="start"
      justify="cener"
      gutter={3}
    >
      <Button>Button 1</Button>
      <Button>Button 2</Button>
    </Space>
  )
}

```

#### Space props

| Name | Description | Default value |
|--|--|--|
| as | ElementType | 'div' |
| align | \<Align\> | - |
| direction | \<Direction\> | - |
| justify | \<Justify\> | - |
| gutter | \<Sizing\> | - |
| [elementProps] | AllHTMLAttributes\<HTMLElement\> | - |

### Bar

Used for sizing, position and offsets.

```typescript jsx
import { Bar } from '@seed-ui/layout';

function Page() {
  return (
    <Bar
      height={56}
      left={0}
      position="fixed"
      top={0}
      width={1}
    >
      {/** Inner content **/}
    </Bar>
  )
}

```

#### Bar props

| Name | Description | Default value |
|--|--|--|
| as | ElementType | 'div' |
| height | ResponsiveValue\<Sizing\> | - |
| maxHeight | ResponsiveValue\<Sizing\> | - |
| maxWidth | ResponsiveValue\<Sizing\> | - |
| minHeight | ResponsiveValue\<Sizing\> | - |
| minWidth | ResponsiveValue\<Sizing\> | - |
| offset | ResponsiveValue\<Offset\> | - |
| position | ResponsiveValue\<Position\> | - |
| [elementProps] | AllHTMLAttributes\<HTMLElement\> | - |

### Background

Used for background-images.

```typescript jsx
import { Bar } from '@seed-ui/layout';

function Page() {
  return (
    <Background
      backgroundImage={{
        xs: 'pictue.jpg',
        md: 'pictue-md.jpg',
        xl: 'pictue-xl.jpg',
      }}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      {/** Inner content **/}
    </Background>
  )
}

```

#### Background props

| Name | Description | Default value |
|--|--|--|
| as | ElementType | 'div' |
| backgroundImage | ResponsiveValue\<string\> | - |
| backgroundPosition | ResponsiveValue\<BackgroundPosition\> | - |
| backgroundRepeat | ResponsiveValue\<BackgroundPosition\> | - |
| backgroundSize | ResponsiveValue\<BackgroundSize\> | - |
| [elementProps] | AllHTMLAttributes\<HTMLElement\> | - |

### Hidden

Hides elements according to screen size.

```typescript jsx
import { Hidden } from '@seed-ui/layout';

function Page() {
  return (
    <Hidden
      lgUp
      smDown
    >
      {/** Inner content **/}
    </Hidden>
  )
}

```

#### Hidden props

| Name | Description | Default value |
|--|--|--|
| as | ElementType | 'div' |
| xsDown | boolean | - |
| sm | boolean | - |
| smDown | boolean | - |
| smUp | boolean | - |
| md | boolean | - |
| mdDown | boolean | - |
| mdUp | boolean | - |
| lg | boolean | - |
| lgDown | boolean | - |
| lgUp | boolean | - |
| xl | boolean | - |
| xlDown | boolean | - |
| xlUp | boolean | - |
| xxlUp | boolean | - |
| [elementProps] | AllHTMLAttributes\<HTMLElement\> | - |

## Types

| Name | Description |
|--|--|
| Maybe | T \| null \| undefined |
| Pair | [T, T] |
| Sizing | number \| string |
| Spacing | Sizing \| [Sizing, Sizing] \| [Sizing, Sizing, Sizing] \| [Sizing, Sizing, Sizing, Sizing] |
| Align | 'start' \| 'end' \| 'center' \| 'baseline' \| 'stretch' |
| BackgroundXPosition | 'left' \| 'center' \| 'right' \| Sizing |
| BackgroundYPosition | 'top' \| 'center' \| 'bottom' \| Sizing |
| BackgroundPosition | BackgroundXPosition \| BackgroundYPosition \| [BackgroundYPosition, BackgroundXPosition] |
| BackgroundRepeatValue | 'no-repeat' \| 'repeat' \| 'repeat-x' \| 'repeat-y' \| 'round' \| 'space' |
| BackgroundRepeat | BackgroundRepeatValue \| Pair\<Omit\<BackgroundRepeatValue, 'repeat-x' \| 'repeat-y'\>\> |
| BackgroundSize | 'contain' \| 'cover' \| Pair\<Sizing\> |
| Direction | 'column' \| 'column-reverse' \| 'row' \| 'row-reverse' |
| Justify | 'start' \| 'end' \| 'center' \| 'space-between' \| 'space-around' \| 'space-evenly' |
| Offset | Spacing |
| Position | 'absolute' \| 'fixed' \| 'relative' \| 'static' \| 'sticky' |
| RowGuter | Sizing \| Pair\<Sizing\> |
| ResponsiveValueObject | { xs?: Maybe\<T\>, sm: Maybe\<T\>, md?: Maybe\<T\>, lg?: Maybe\<T\>, xl?: Maybe\<T\>, xxl?: Maybe\<T\> } |
| ResponsiveValue | T \| ResponsiveValueObject\<T\> |










