import React from 'react';
import ReactDOM from 'react-dom';
import { toHaveNoViolations } from 'jest-axe';
import '@testing-library/jest-dom/extend-expect';

expect.extend(toHaveNoViolations);

// Replace useLayoutEffect with useEffect to avoid exceptions when render on server
React.useLayoutEffect = React.useEffect;

// Mock createPortal
// See: https://github.com/facebook/react/issues/11565
ReactDOM.createPortal = (node) => node;
