import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid, Grid2, Stack, Typography } from "@/node_modules/@mui/material/index";
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';


const data = [
    {
        title: 'Test Page',
        media: '',
        id: 1,
        desc: 'This is the test description',
        content: 'This is the test content',
    }, 
    {
        title: 'Test Page 2',
        media: '',
        id: 1,
        desc: 'This is the test description',
        content: 'This is the test content',
    }, 
    {
        title: 'Test Page 3',
        media: '',
        id: 1,
        desc: 'This is the test description',
        content: 'This is the test content',
    }, 
    {
        title: 'Test Page 4',
        media: '',
        id: 1,
        desc: 'This is the test description',
        content: 'This is the test content',
    }
]
    

function Statcards() {
    console.log(data);
    return (
        <>
        <Typography variant="h5" sx={{ padding: "10px"}}></Typography>
        <Stack  direction="" justifyContent="space-between" sx={{
            padding: "8px 0", margin: "1em"}}>
            {data.map((recipe) => (    
            <Card sx={{ marginTop: "10px", width: '20em'}} key={recipe.id}>
                <CardHeader title="Header" title={recipe.title} subheader={recipe.desc}/>
            <CardContent>{recipe.content}</CardContent>            
            </Card>
            ))}        
        </Stack>
        </>
    )
}


export default Statcards;