import { fireEvent, render, screen } from "@testing-library/react"
import App from "../../App";
import Header from "./Header"

test('renders correct logo', () => {

    const mockSetState = jest.fn();

    render(<Header theme='dark' setTheme={mockSetState} />);

    expect(screen.getByRole('heading')).toHaveTextContent('Cryptonus');
})

test('changes theme correctly', async () => {

    render(<App />)

    fireEvent.click(screen.getByTestId('theme-toggler'));

    const moonSvg = screen.getByTestId('moon-svg');
    expect(moonSvg).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('theme-toggler'));

    expect(moonSvg).not.toBeInTheDocument();

})

test('mobile menu available on smaller screen', () => {

    const mockSetState = jest.fn();

    render(<Header theme='dark' setTheme={mockSetState} />);
    window.innerWidth = 900;
    window.dispatchEvent(new Event('resize'));

    expect(screen.getByTestId('menu-svg')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('menu-svg'));

    const navMobile = screen.getAllByRole('list')
        .find(list => list.classList.contains('nav-mobile'));

    expect(navMobile).toBeInTheDocument();
})

test('nav menu elements matches mobile menu elements', () => {

    const mockSetState = jest.fn();

    render(<Header theme='dark' setTheme={mockSetState} />);

    const nav = screen.getAllByRole('list')
        .find(list => list.classList.contains('nav'));

    expect(nav).toBeInTheDocument();

    const navNonMobilelistItemsCount = nav.children.length;

    window.innerWidth = 900;
    window.dispatchEvent(new Event('resize'));

    fireEvent.click(screen.getByTestId('menu-svg'));

    const navMobileListItemsCount = screen.getAllByRole('list')
        .find(list => list.classList.contains('nav-mobile'))
        .children
        .length;

    expect(navNonMobilelistItemsCount).toEqual(navMobileListItemsCount);

})

test('correct moon and sun size', () => {

    window.innerWidth = 2000;
    window.dispatchEvent(new Event('resize'));

    const { rerender } = render(<Header theme='light' />);

    let moonSvg = screen.getByTestId('moon-svg');
    let moonWidth = Number(moonSvg.getAttribute('width'));

    expect(moonWidth).toBe(26);

    rerender(<Header theme='dark' />);

    let sunSvg = screen.getByTestId('sun-svg');
    let sunWidth = Number(sunSvg.getAttribute('width'));

    expect(sunWidth).toBe(26);

    window.innerWidth = 400;
    window.dispatchEvent(new Event('resize'));

    rerender(<Header theme='light' />);

    moonSvg = screen.getByTestId('moon-svg');
    moonWidth = Number(moonSvg.getAttribute('width'));

    expect(moonWidth).toBe(20);

    rerender(<Header theme='dark' />);

    sunSvg = screen.getByTestId('sun-svg');
    sunWidth = Number(sunSvg.getAttribute('width'));

    expect(sunWidth).toBe(20);
    
});