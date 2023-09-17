import { createContext, ReactNode, useState } from "react";

export const PostContext = createContext<any>(null)
interface ContextProps {
    children: ReactNode;
  }
  export default function PostDetails({ children }: ContextProps) {
    const [post, setPost] = useState<object | null>();
    
  
    return (
      <PostContext.Provider value={{ post, setPost }}>
        {children}
      </PostContext.Provider>
    );
  }
  