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

    expect(screen.getByTestId('moon-svg')).toBeInTheDocument()

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