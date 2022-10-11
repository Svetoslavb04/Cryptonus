import Routes from "../../../Routes/Routes"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

type Props = {
    theme: string,
    setTheme: React.Dispatch<React.SetStateAction<string>>
}

const Content: React.FC<Props> = ({ theme, setTheme }) => {
    return (
        <div id='content' className='content flex flex-col bg-primary dark:bg-primaryDark min-h-screen transition-colors duration-[400ms]'>
            <Header theme={theme} setTheme={setTheme} />
            <main className="flex-1 my-8 mx-2 sm:mx-6 md:mx-12">
                <Routes />
            </main>
            <Footer />
        </div>
    )
}

export default Content