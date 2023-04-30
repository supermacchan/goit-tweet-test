import { Grid } from "react-loader-spinner";
import { LoaderContainer } from "./Loader.styled";

const Loader = () => {
    return (
        <LoaderContainer>
            <Grid
                height="80"
                width="80"
                color="#5736A3" 
                ariaLabel="grid-loading"
                radius="12.5"
                visible={true}
            />
        </LoaderContainer>
    )
}

export default Loader;