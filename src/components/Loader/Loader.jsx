import { Blocks } from "react-loader-spinner";

const Loader = () => {
    return (
        <Blocks
            visible={true}
            height="80"
            width="80"
            color="#5736A3" 
            ariaLabel="blocks-loading"
            wrapperStyle={{display: "flex", justifyContent: "center"}}
            wrapperClass="blocks-wrapper"
        />
    )
}

export default Loader;