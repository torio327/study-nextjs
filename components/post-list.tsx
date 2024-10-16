import React from 'react';
import {typePost} from "@/app/page";
type Props={
    postList:Array<typePost>
}

const PostList = ({postList}:Props) => {
    return (
        <div>
            {postList.map((post)=>(
                <div key={post.id}>
                <h1>{post.id}</h1>
                    <p>{post.name}</p>
                </div>
            ))}
        </div>
    );
};

export default PostList;