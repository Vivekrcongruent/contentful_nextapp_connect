import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid, Grid2, Stack, Typography } from "@/node_modules/@mui/material/index";
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';


export async function getContents() {
    const options = {
        method: "GET",
    };
    const res = await fetch(
      `https://cdn.contentful.com/spaces/ri5ifxinxai4/entries?access_token=uZ0SU7i7uYz3lGdYark5HuOwYDVwTIyrjRqPPiQ1vr0&content_type=blog`, options)
    .then((res) => res.json())
    .catch((err) => console.error(err));
 
    //setTrack(res.json());    
    return res;
}

export default function Cards() {

    getContents().then((recipes) => {
        console.log(recipes.items);

        return (
            <>
            <Typography variant="h5" sx={{ padding: "10px"}}>API consuming from Contenful App</Typography>
            <Stack  direction="" justifyContent="space-between" sx={{
                padding: "8px 0", margin: "1em"}}>
                {recipes.items.map((recipe) => (
                <Card sx={{ marginTop: "10px", width: '20em'}} key={recipe.sys.id}>
                    <CardHeader title="Header" title={recipe.fields.title} subheader={recipe.sys.createdAt}/>
                <CardContent>{recipe.fields.description}</CardContent>            
                </Card>
                ))}        
            </Stack>
            </>
        )
    });
}