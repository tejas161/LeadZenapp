import { Box } from "@mui/material";
import Shortdesc from "./components/Shortdesc";
import { useState,useEffect } from 'react';
import Paginationcomp from "./components/Pagination";

const App = () => {

  const [users,setusers]=useState([]); // users array for storing the information from API
  const [currentPage,setcurrentPage]=useState(1); // Currentpage value for showing on th web
  const [postsperpage,setpostsperpage]=useState(3); // Total posts per page to be shown

  // calling useeffect as soon as page is viewed or opened by the client
useEffect(() => {

  // using normal fetch API for calling API and storing result in users array made
    fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(res => {
     setusers(res);
   })
  

},[]);

//Getting current posts
const indexOfLastPost = currentPage * postsperpage;
const indexOfFirstPost = indexOfLastPost - postsperpage;
if(users.length != 0) {var currentPosts = users.slice(indexOfFirstPost,indexOfLastPost);}
 
//changing the content of page as user clicks next page number
const paginate = (pageNumber) => {
  setcurrentPage(pageNumber)
}


  return (

    //main Box function (inside contents are wrapped)
    <Box spacing={4}
      sx={{
        margin: "12px 12px",
      }}>
      {
        currentPosts ? currentPosts.map((value, ind) => {
          return (
            <>
            {/* short description about users made */}
              <Shortdesc
               key={ind} 
               value={value} />            

            </>
          )
        })
        : ""  }
         {/* compnent created for pagination */}
         <Paginationcomp 
         postsperpage={postsperpage} 
         totalposts={users.length}
          paginate={paginate}/>
    </Box>

  );
}

export default App;