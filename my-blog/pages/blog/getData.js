// export const getData = async () =>{

//     const data = await (
//       await fetch("https://jsonplaceholder.typicode.com/posts")
//     ).json();
//     console.log(data);
//     return data
// }

export const getData = async () =>{

    const data = await (
      await fetch(
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=4733b8f81b334ac0bdfb718def30fe5a"
      )
    ).json();
    console.log(data.articles);
    return data.articles;
}

getData()