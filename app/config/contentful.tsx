export async function Contentful() {
    const res = await fetch(
      `https://cdn.contentful.com/spaces/ri5ifxinxai4/entries?access_token=uZ0SU7i7uYz3lGdYark5HuOwYDVwTIyrjRqPPiQ1vr0&content_type=blog`
    );
  
    return res.json();
}
