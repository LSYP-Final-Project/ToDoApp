import { render, screen, cleanup } from '@testing-library/react';

import SprintsAdditionContainer from '../SprintsAdditionContainer';
import SprintOngoingTask from '../../styled-components/index';

test('should render SprintsAdditionContainer', () => {
    render(<SprintsAdditionContainer/>);

    const SprintsAdditionContainerElement = screen.getByTestId('test-2')

    expect(SprintsAdditionContainerElement).toBeInTheDocument();
})

test('should render SprintOngoingTask', () => {
    render(<SprintsAdditionContainer/>);

    const SprintOngoingTaskElement = screen.getByTestId('test-3');

    expect(SprintOngoingTaskElement).toBeInTheDocument();
})

test('should display &minus;', () => {
    render(<SprintsAdditionContainer/>);

    const MinusSignElement = screen.getByTestId('test-minus-sign');

    expect(MinusSignElement).toHaveTextContent("−");
    expect(MinusSignElement).toHaveStyle({backgroundColor: 'rgb(234, 134. 143)'})
})

test('should display text "Makieta" ', () => {
    render(<SprintsAdditionContainer/>);

    const paragraphElement = screen.getByTestId('test-p-tag')

    expect(paragraphElement).toHaveTextContent('Makieta');
})

test('should display text "5"', () => {
    render(<SprintsAdditionContainer/>);

    const divElement = screen.getByTestId('test-points');

    expect(divElement).toHaveTextContent('5');
})

test('should display submit button', () => {
    render(<SprintsAdditionContainer/>);

    const btnElement = screen.getByTestId('test-submit');

    expect(btnElement).toHaveTextContent('Submit the sprint');
    expect(btnElement).toHaveStyle({backgroundColor: 'rgb(234, 134. 143)'})
})

