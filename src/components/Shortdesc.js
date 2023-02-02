import { Stack, Typography, Button } from "@mui/material";
import { useState } from 'react';
import Longdesc from "./Longdesc";


//Getting props from App component
const Shortdesc = ({ value }) => {

    const [open, setopen] = useState(false); // using if user clicks open details 

    //destructuring the object 'value' got from props
    const { id, name, username, email, address, phone, website, company } = value;


    return (
        <div>
            {/* creating Short Description of all users */}
            <Stack direction="row" sx={{
                margin: "12px 8px",
                height: "25vh",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                bgcolor: "white",
                padding: "12px",
                borderRadius: "10px"
            }}>
                <Stack spacing={1} sx={{
                    width: "15%",

                }}>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }} >Name</Typography>
                    <Typography variant="h6">{name}</Typography>
                </Stack>
                <Stack spacing={1} sx={{
                    width: "15%",

                }}>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>Email</Typography>
                    <Typography variant="h6">{email}</Typography>
                </Stack>
                <Stack spacing={1} sx={{
                    width: "20%",

                }}>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>Contact No</Typography>
                    <Typography variant="h6">{phone}</Typography>
                </Stack>
                <Stack spacing={1} sx={{
                    width: "15%",

                }}>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>Website</Typography>
                    <Typography variant="h6">{website}</Typography>
                </Stack>
                <Stack>
                    <Button onClick={() => setopen(!open)} variant="contained" color="error" sx={{
                        borderRadius: "12px"
                    }}>{open ? "Close Details" : "Show Details"}</Button>

                </Stack>
            </Stack>
            {/* if user click view details then all descrption of the user will be shown */}
            {open ? <Longdesc value={value} /> : " "}

        </div>


    );
}


export default Shortdesc;