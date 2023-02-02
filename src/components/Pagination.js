import { Stack } from "@mui/material";


const Paginationcomp = ({ postsperpage, totalposts, paginate }) => {

    const pageNumbers = [];
//calculating pagenumbers array for showing the toal number of pages 
    for (let i = 1; i <= Math.ceil(totalposts / postsperpage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <Stack direction="row" justifyContent="center" className="pagination"
            sx={{
                cursor:"pointer"
            }}>
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)}   className="page-link">
                            {number}
                        </a>
                    </li>

                ))}
            </Stack >

        </nav>
    )


}


export default Paginationcomp;