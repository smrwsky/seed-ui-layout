import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { RenderFn } from '../../types/RenderFn';
import { axe, create } from '../../utils/test-utils';

import Col, { ColProps } from './Col';

describe('Col', () => {
  const setup = (renderFn: RenderFn, props?: ColProps) =>
    renderFn(<Col {...props} />);

  it('should render correctly with default props', () => {
    const actual = setup(create);
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with as prop', () => {
    const actual = setup(create, { as: 'article' });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with children prop', () => {
    const actual = setup(create, { children: <p>Element with text.</p> });
    expect(actual).toMatchSnapshot();
  });

  /**
   *  @prop xs
   */

  it('should render correctly with xs number prop', () => {
    const actual = setup(create, { xs: 3 });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with xs true prop', () => {
    const actual = setup(create, { xs: true });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with xs false prop', () => {
    const actual = setup(create, { xs: false });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with xs auto prop', () => {
    const actual = setup(create, { xs: 'auto' });
    expect(actual).toMatchSnapshot();
  });

  /**
   *  @prop sm
   */

  it('should render correctly with sm number prop', () => {
    const actual = setup(create, { sm: 3 });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with sm true prop', () => {
    const actual = setup(create, { sm: true });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with sm false prop', () => {
    const actual = setup(create, { sm: false });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with sm auto prop', () => {
    const actual = setup(create, { sm: 'auto' });
    expect(actual).toMatchSnapshot();
  });

  /**
   *  @prop md
   */

  it('should render correctly with md number prop', () => {
    const actual = setup(create, { md: 3 });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with md true prop', () => {
    const actual = setup(create, { md: true });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with md false prop', () => {
    const actual = setup(create, { md: false });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with md auto prop', () => {
    const actual = setup(create, { md: 'auto' });
    expect(actual).toMatchSnapshot();
  });

  /**
   *  @prop lg
   */

  it('should render correctly with lg number prop', () => {
    const actual = setup(create, { lg: 3 });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with lg true prop', () => {
    const actual = setup(create, { lg: true });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with lg false prop', () => {
    const actual = setup(create, { lg: false });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with lg auto prop', () => {
    const actual = setup(create, { lg: 'auto' });
    expect(actual).toMatchSnapshot();
  });

  /**
   *  @prop xl
   */

  it('should render correctly with xl number prop', () => {
    const actual = setup(create, { xl: 3 });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with xl true prop', () => {
    const actual = setup(create, { xl: true });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with xl false prop', () => {
    const actual = setup(create, { xl: false });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with xl auto prop', () => {
    const actual = setup(create, { xl: 'auto' });
    expect(actual).toMatchSnapshot();
  });

  /**
   *  @prop xxl
   */

  it('should render correctly with xxl number prop', () => {
    const actual = setup(create, { xxl: 3 });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with xxl true prop', () => {
    const actual = setup(create, { xxl: true });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with xxl false prop', () => {
    const actual = setup(create, { xxl: false });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with xxl auto prop', () => {
    const actual = setup(create, { xxl: 'auto' });
    expect(actual).toMatchSnapshot();
  });

  /**
   *  @prop align
   */

  it('should render correctly with align prop', () => {
    const actual = setup(create, { align: 'center' });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with align responsive prop', () => {
    const actual = setup(create, {
      align: {
        xs: 'baseline',
        sm: 'center',
        md: 'end',
        lg: 'start',
        xl: 'stretch',
        xxl: 'baseline',
      },
    });

    expect(actual).toMatchSnapshot();
  });

  /**
   *  @prop order
   */

  it('should render correctly with order prop', () => {
    const actual = setup(create, { order: 2 });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with order responsive prop', () => {
    const actual = setup(create, {
      order: {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 5,
        xxl: 6,
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
