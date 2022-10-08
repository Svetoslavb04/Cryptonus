import { render, screen } from "@testing-library/react";
import HappyCustomers from "./HappyCustomers";

test('Renders correct abbreviation to 1000', () => {
    const { rerender } = render(<HappyCustomers volumeTraded={21} />)

    const valueTradedDisplayed = screen
        .getAllByRole('heading')
        .find(h => h.classList.contains('happy-customers-volume-traded'));

    expect(valueTradedDisplayed.textContent).toBe('$21');

    rerender(<HappyCustomers volumeTraded={0.42} />);

    expect(valueTradedDisplayed.textContent).toBe('$0');

    rerender(<HappyCustomers volumeTraded={100} />);

    expect(valueTradedDisplayed.textContent).toBe('$100');

    rerender(<HappyCustomers volumeTraded={212} />);

    expect(valueTradedDisplayed.textContent).toBe('$212');

    rerender(<HappyCustomers volumeTraded={212.42} />);

    expect(valueTradedDisplayed.textContent).toBe('$212');

    rerender(<HappyCustomers volumeTraded={999} />);

    expect(valueTradedDisplayed.textContent).toBe('$999');
})

test('Renders correct abbreviation to 1 million (exclusive)', () => {

    const { rerender } = render(<HappyCustomers volumeTraded={1000} />)

    const valueTradedDisplayed = screen
        .getAllByRole('heading')
        .find(h => h.classList.contains('happy-customers-volume-traded'));

    expect(valueTradedDisplayed.textContent).toBe('$1K');

    rerender(<HappyCustomers volumeTraded={2192} />);

    expect(valueTradedDisplayed.textContent).toBe('$2K');

    rerender(<HappyCustomers volumeTraded={31234} />);

    expect(valueTradedDisplayed.textContent).toBe('$31K');

    rerender(<HappyCustomers volumeTraded={9999} />);

    expect(valueTradedDisplayed.textContent).toBe('$9K');

    rerender(<HappyCustomers volumeTraded={12345} />);

    expect(valueTradedDisplayed.textContent).toBe('$12K');

    rerender(<HappyCustomers volumeTraded={4512.51233123} />);

    expect(valueTradedDisplayed.textContent).toBe('$4K');

    rerender(<HappyCustomers volumeTraded={312412} />);

    expect(valueTradedDisplayed.textContent).toBe('$312K');

    rerender(<HappyCustomers volumeTraded={999999} />);

    expect(valueTradedDisplayed.textContent).toBe('$999K');
})

test('Renders correct abbreviation to 1 million (exclusive)', () => {

    const { rerender } = render(<HappyCustomers volumeTraded={1000000} />)

    const valueTradedDisplayed = screen
        .getAllByRole('heading')
        .find(h => h.classList.contains('happy-customers-volume-traded'));

    expect(valueTradedDisplayed.textContent).toBe('$1M');

    rerender(<HappyCustomers volumeTraded={2193132} />);

    expect(valueTradedDisplayed.textContent).toBe('$2M');

    rerender(<HappyCustomers volumeTraded={31234312} />);

    expect(valueTradedDisplayed.textContent).toBe('$31M');

    rerender(<HappyCustomers volumeTraded={12345627.51345} />);

    expect(valueTradedDisplayed.textContent).toBe('$12M');

    rerender(<HappyCustomers volumeTraded={999999999} />);

    expect(valueTradedDisplayed.textContent).toBe('$999M');
})

test('Renders correct abbreviation above 1 million (inclusive)', () => {

    const { rerender } = render(<HappyCustomers volumeTraded={1000000000} />)

    const valueTradedDisplayed = screen
        .getAllByRole('heading')
        .find(h => h.classList.contains('happy-customers-volume-traded'));

    expect(valueTradedDisplayed.textContent).toBe('$1B');

    rerender(<HappyCustomers volumeTraded={2193141332} />);

    expect(valueTradedDisplayed.textContent).toBe('$2B');

    rerender(<HappyCustomers volumeTraded={31234231312} />);

    expect(valueTradedDisplayed.textContent).toBe('$31B');

    rerender(<HappyCustomers volumeTraded={31234231312.312414} />);

    expect(valueTradedDisplayed.textContent).toBe('$31B');

    rerender(<HappyCustomers volumeTraded={999999999999} />);

    expect(valueTradedDisplayed.textContent).toBe('$999B');

    rerender(<HappyCustomers volumeTraded={111111111111111} />);

    expect(valueTradedDisplayed.textContent).toBe('$111111B');
})

test('Renders 0 upon negative values', () => {

    const { rerender } = render(<HappyCustomers volumeTraded={-123} supportedCountries={0.2} users={0.3123} />)

    const valueTradedDisplayed = screen
        .getAllByRole('heading')
        .find(h => h.classList.contains('happy-customers-volume-traded'));

    const supportedCountriesDisplayed = screen
        .getAllByRole('heading')
        .find(h => h.classList.contains('happy-customers-supported-countries'));

    const usersDisplayed = screen
        .getAllByRole('heading')
        .find(h => h.classList.contains('happy-customers-users'));

    expect(valueTradedDisplayed.textContent).toBe('$0');
    expect(supportedCountriesDisplayed.textContent).toBe('0');
    expect(usersDisplayed.textContent).toBe('0');

    rerender(<HappyCustomers volumeTraded={-443.5132} supportedCountries={-3123} users={-3213.3213} />)

    expect(valueTradedDisplayed.textContent).toBe('$0');
    expect(supportedCountriesDisplayed.textContent).toBe('0');
    expect(usersDisplayed.textContent).toBe('0');

    rerender(<HappyCustomers volumeTraded={-443.5132} supportedCountries={-3/12312.312} users={-333321}/>)
    expect(supportedCountriesDisplayed.textContent).toBe('0');
    expect(usersDisplayed.textContent).toBe('0');

})