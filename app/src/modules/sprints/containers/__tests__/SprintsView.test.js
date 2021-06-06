import { render, screen, cleanup } from '@testing-library/react';

import SprintsView from '../SprintsView';

test('should render SprintsView container', () => {
    render(<SprintsView />)
    const SprintsViewContainer = screen.getByTestId('test-1');
    expect(SprintsViewContainer).toBeInTheDocument();
})