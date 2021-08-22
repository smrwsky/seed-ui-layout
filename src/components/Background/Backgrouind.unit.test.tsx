import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { RenderFn } from '../../types/RenderFn';
import { axe, create } from '../../utils/test-utils';

import Background, { BackgroundProps } from './Background';

describe('Background', () => {
  const setup = (renderFn: RenderFn, props?: BackgroundProps) =>
    renderFn(<Background {...props} />);

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

  it('should render correctly with background-image prop', () => {
    const actual = setup(create, { backgroundImage: '/images/image.jpg' });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with background-image responsive prop', () => {
    const actual = setup(create, {
      backgroundImage: {
        xs: '/images/image.jpg',
        sm: '/images/image-sm.jpg',
        md: '/images/image-md.jpg',
        lg: '/images/image-lg.jpg',
        xl: '/images/image-xl.jpg',
        xxl: '/images/image-xxl.jpg',
      },
    });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with background-position prop', () => {
    const actual = setup(create, { backgroundPosition: 'center' });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with background-position responsive prop', () => {
    const actual = setup(create, {
      backgroundPosition: {
        xs: 'left',
        sm: 0.5,
        md: 50,
        lg: [0.5, 50],
        xl: ['left', 50],
        xxl: ['left', 'top'],
      },
    });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with background-size prop', () => {
    const actual = setup(create, { backgroundSize: 'cover' });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with background-size responsive prop', () => {
    const actual = setup(create, {
      backgroundSize: {
        xs: 'cover',
        sm: 'contain',
        md: [250, 375],
        lg: [250, 0.375],
        xl: [0.25, 375],
        xxl: [250, '75vh'],
      },
    });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with background-repeat prop', () => {
    const actual = setup(create, { backgroundRepeat: 'no-repeat' });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with background-repeat responsive prop', () => {
    const actual = setup(create, {
      backgroundRepeat: {
        xs: 'no-repeat',
        sm: 'repeat',
        md: 'repeat-x',
        lg: 'repeat-y',
        xl: 'round',
        xxl: ['space', 'no-repeat'],
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
