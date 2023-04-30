import { Link } from "react-router-dom";

export default function LinkButton(props) {
    return (
        <>
            <Link {...props}>
                {props.name}
            </Link>
        </>
    );
}