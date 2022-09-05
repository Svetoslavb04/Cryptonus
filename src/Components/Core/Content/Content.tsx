import Footer from "../Footer/Footer"
import Header from "../Header/Header"

type Props = {
    theme: string,
    setTheme: React.Dispatch<React.SetStateAction<string>>
}

const Content: React.FC<Props> = ({ theme, setTheme }) => {
    return (
        <div id='content' className='content bg-primary dark:bg-primaryDark min-h-screen transition-colors duration-[400ms]'>
            <Header theme={theme} setTheme={setTheme} />
            <Footer />
        </div>
    )
}

export default Content