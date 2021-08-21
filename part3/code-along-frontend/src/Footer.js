import { useContext } from "react";
import DarkModeContext from "./DarkModeContext";

const Footer = () => {
    const [theme, setTheme] = useContext(DarkModeContext);

    const footerStyle = {
        color: "green",
        fontStyle: "italic",
        fontSize: 16,
    };

    return (
        <div style={footerStyle}>
            <br />
            <em style={{ color: theme }}>
                Note app, Department of Computer Science, University of Helsinki
            </em>
            <br />
            <button
                onClick={(e) => {
                    if (theme === "green") setTheme("blue");
                    else setTheme("green");
                }}
            >
                Change Accents
            </button>
        </div>
    );
};

export default Footer;
