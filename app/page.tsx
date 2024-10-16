import {getRangePosts} from "@/utils/utils";
import UseGemini from "@/components/use-gemini";



export type typePost={
    name:string,
    id:number,
    content:string
}

export default async function Home() {
    const posts:Array<typePost>=await getRangePosts(1,10)
    console.log(posts)
  return (
   <>
   <h1 className={"text-2xl"}>Hello</h1>
     {/*<PostList postList={posts}/>*/}
       <UseGemini/>
   </>
  );
}
