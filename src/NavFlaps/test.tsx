import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import NavFlaps, { Tab } from './index';

const ComponentOne = () => <div data-testid="componentOne">component one</div>;
const ComponentTwo = () => <div data-testid="componentTwo">component two</div>;

describe('NavFlaps', () => {
  it('should render without throwing an error', () => {
    render(
      <NavFlaps>
        <Tab label="Test 1" content={<ComponentOne />} />
        <Tab label="Test 2" content={<ComponentTwo />} />
      </NavFlaps>,
    );
  });

  it('should show the correct content', () => {
    const { queryByTestId, getByTestId } = render(
      <NavFlaps>
        <Tab label="Test 1" content={<ComponentOne />} />
        <Tab label="Test 2" content={<ComponentTwo />} />
      </NavFlaps>,
    );

    expect(queryByTestId('componentOne')).toBeInTheDocument();
    expect(queryByTestId('componentTwo')).not.toBeInTheDocument();

    fireEvent.click(getByTestId('navLabel1'));

    expect(queryByTestId('componentOne')).not.toBeInTheDocument();
    expect(queryByTestId('componentTwo')).toBeInTheDocument();
  });
});
