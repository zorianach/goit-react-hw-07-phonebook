import {LayoutBox} from './Layout.styled'

const Layout = ({children}) => {
    return (
    <LayoutBox>
        {children}
    </LayoutBox>
    )
};

export default Layout ;