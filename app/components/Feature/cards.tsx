import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid, Grid2, Stack } from "@/node_modules/@mui/material/index";
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';

async function getContents() {
    const res = await fetch(
      `https://cdn.contentful.com/spaces/ri5ifxinxai4/entries?access_token=uZ0SU7i7uYz3lGdYark5HuOwYDVwTIyrjRqPPiQ1vr0&content_type=blog`
    );
  
    return res.json();
}

async function Cards() {
    const recipes = await getContents();
    console.log('testsrsrr')
    console.log(recipes.items);

    return (
        <Stack  direction="flex-row" justifyContent="space-between" sx={{
            padding: "8px 0", margin: "1em"}}>
            {recipes.items.map((recipe) => (    
            <Card sx={{ marginTop: "10px", width: '20em'}} key={recipe.sys.id}>
                <CardHeader title="Header" title={recipe.fields.title} subheader={recipe.fields.description}/>
                <CardMedia component="img" height="194" image='https://mui.com/static/images/cards/paella.jpg'/>
            <CardContent>{recipe.fields.description}</CardContent>            
            </Card>
            ))}        
        </Stack>
    )
    
}


export default Cards;