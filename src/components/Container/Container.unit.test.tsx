import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { RenderFn } from '../../types/RenderFn';
import { axe, create } from '../../utils/test-utils';

import Container, { ContainerProps } from './Container';

describe('Container', () => {
  const setup = (renderFn: RenderFn, props?: ContainerProps) =>
    renderFn(<Container {...props} />);

  it('should render correctly with default props', () => {
    const actual = setup(create);
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with as prop', () => {
    const actual = setup(create, { as: 'section' });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with children prop', () => {
    const actual = setup(create, { children: <p>Element with text.</p> });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with height prop', () => {
    const actual = setup(create, { height: 500 });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with height responsive prop', () => {
    const actual = setup(create, {
      height: {
        xs: 'auto',
        sm: 0.75,
        md: 500,
        lg: 625,
        xl: 750,
        xxl: 875,
      },
    });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with margin prop', () => {
    const actual = setup(create, { margin: 2 });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with margin responsive prop', () => {
    const actual = setup(create, {
      margin: {
        xs: '2px',
        sm: 1,
        md: 2,
        lg: [0, 1],
        xl: [0, 1, 2],
        xxl: [0, 1, 2, 3],
      },
    });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with max-height prop', () => {
    const actual = setup(create, { maxHeight: 500 });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with max-height responsive prop', () => {
    const actual = setup(create, {
      maxHeight: {
        xs: 'auto',
        sm: 0.75,
        md: 500,
        lg: 625,
        xl: 750,
        xxl: 875,
      },
    });

    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with max-width prop', () => {
    const actual = setup(create, { maxWidth: 500 });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with max-width responsive prop', () => {
    const actual = setup(create, {
      maxWidth: {
        xs: 'auto',
        sm: 0.75,
        md: 500,
        lg: 625,
        xl: 750,
        xxl: 875,
      },
    });

    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with min-height prop', () => {
    const actual = setup(create, { minHeight: 500 });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with min-height responsive prop', () => {
    const actual = setup(create, {
      minHeight: {
        xs: 'auto',
        sm: 0.75,
        md: 500,
        lg: 625,
        xl: 750,
        xxl: 875,
      },
    });

    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with min-width prop', () => {
    const actual = setup(create, { minWidth: 500 });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with min-width responsive prop', () => {
    const actual = setup(create, {
      minWidth: {
        xs: 'auto',
        sm: 0.75,
        md: 500,
        lg: 625,
        xl: 750,
        xxl: 875,
      },
    });

    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with padding prop', () => {
    const actual = setup(create, { padding: 2 });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with padding responsive prop', () => {
    const actual = setup(create, {
      padding: {
        xs: '2px',
        sm: 1,
        md: 2,
        lg: [0, 1],
        xl: [0, 1, 2],
        xxl: [0, 1, 2, 3],
      },
    });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with width prop', () => {
    const actual = setup(create, { width: 500 });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with width responsive prop', () => {
    const actual = setup(create, {
      width: {
        xs: 'auto',
        sm: 0.75,
        md: 500,
        lg: 625,
        xl: 750,
        xxl: 875,
      },
    });

    expect(actual).toMatchSnapshot();
  });

  it('should meet accessibility guidelines', async () => {
    const wrapper = setup(renderToStaticMarkup);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
