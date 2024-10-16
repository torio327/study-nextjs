import React from 'react';
import {completion} from "@/utils/utils";

const UseChatGptApi = async () => {
    const response=await completion()
    console.log(response)
    return (
        <div>

        </div>
    );
};

export default UseChatGptApi;