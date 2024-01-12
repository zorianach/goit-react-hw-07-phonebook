import { RotatingLines } from "react-loader-spinner";
import { LoaderWrapper } from "./Loader.styled";


const Loader =()=>{
    return(
    <LoaderWrapper>
        <RotatingLines
            strokeColor="rgb(81, 29, 131)"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
            />
    </LoaderWrapper>)
    
}

export default Loader;