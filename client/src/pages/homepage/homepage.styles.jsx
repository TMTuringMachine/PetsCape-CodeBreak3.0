import {styled} from '@mui/material';


export const HomeImage = styled("div")(({url})=>({
    width:'100%',
    height:'400px',
    backgroundImage:`url('${url}')`,
    backgroundPosition:'center',
    backgroundSize:'cover',
}))