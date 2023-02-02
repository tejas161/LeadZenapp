import { Stack, Typography } from "@mui/material";


//Passing value props from Short Desc to Long Desc
const Longdesc = ({ value }) => {

    // Destructuring the value object got from props
    const { id, name, username, email, address, phone, website, company } = value;

    return (
        // creating a box for showing all description about the user
        <Stack direction="row" sx={{
            margin: "12px 8px",
            height: "46vh",
            position: "relative",
            top: "-28px",
            bgcolor: "white",
            padding: "12px",
            borderRadius: "10px",
        }}>
            <Stack sx={{
                width: "50%",
                marginLeft: "30px"

            }}>

                <Typography variant="h5" sx={{ fontWeight: "bold" }} >Address</Typography>
                <Typography variant="h6">Street: <Typography variant="p">{address.street}</Typography></Typography>
                <Typography variant="h6">Suite: <Typography variant="p">{address.suite}</Typography></Typography>
                <Typography variant="h6">City:  <Typography variant="p">{address.city}</Typography></Typography>
                <Typography variant="h6">zipcode: <Typography variant="p">{address.zipcode}</Typography></Typography>
                <Typography variant="h5" sx={{
                    fontWeight: "bold",
                    marginTop: "14px"
                }}>Geo Location</Typography>
                <Typography variant="h6">Latitude Coordinates: <Typography variant="p">{address.geo.lat}</Typography></Typography>
                <Typography variant="h6">Longitude Coordinates: <Typography variant="p">{address.geo.lng}</Typography></Typography>

            </Stack>

            <Stack sx={{
                width: "50%",

                marginLeft: "30px",
                padding: "15px"
            }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: "4px" }}>Phone: <Typography variant="p">{phone}</Typography></Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: "4px" }}>Website: <Typography variant="p">{website}</Typography></Typography>
                <Stack sx={{
                    marginTop: "20px"
                }}>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>Company Info: </Typography>
                    <Typography variant="h6" >Name: <Typography variant="p">{company.name}</Typography></Typography>
                    <Typography variant="h6">CatchPhrase: <Typography variant="p">{company.catchPhrase}</Typography></Typography>
                    <Typography variant="h6">BS: <Typography variant="p">{company.bs}</Typography></Typography>
                </Stack>

            </Stack>
        </Stack>

    );
}



export default Longdesc;