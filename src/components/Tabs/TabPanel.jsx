import { Fade, Slide } from "@mui/material";

export function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            <Fade timeout={1000} in={value === index}>
                <div>
                    {children}
                </div>
            </Fade>
        </div>
    );
}