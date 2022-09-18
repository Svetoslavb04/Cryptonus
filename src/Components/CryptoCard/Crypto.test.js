import { render, screen } from "@testing-library/react"
import CryptoCard from "./CryptoCard.tsx"

test('renders correct logo when iconName is provided', () => {

    render(<CryptoCard iconName='btc' fullName="Bitocoin" nameFrom="BTC" nameTo="USD" price={30000} />);

    const imgSrc = screen.getByRole('img').getAttribute('src');

    expect(imgSrc).toContain('btc.svg');
})

test('renders correct logo when iconName is NOT provided', () => {

    render(<CryptoCard fullName="Bitocoin" nameFrom="BTC" nameTo="USD" price={30000} />);

    const imgSrc = screen.getByRole('img').getAttribute('src');

    expect(imgSrc).toContain('generic.svg');
})