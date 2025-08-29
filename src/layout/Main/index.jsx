import { MainWrapper, TopContentWrapper } from './Main.styles'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useLocation } from 'react-router-dom';

const MainLayout = (props) => {
    const location = useLocation();
    
    const hideFooter=location.pathname === "/404";
    return (
        <MainWrapper>
            <TopContentWrapper>
                <Navbar />
                {props.children}
            </TopContentWrapper>
            {!hideFooter?<Footer />:null}
        </MainWrapper>
    )
}

export default MainLayout
