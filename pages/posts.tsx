import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import { getPosts } from '../utils/api'


interface Post{
  id: number,
  userId: number,
  title: string,
  body: string
}


export default function PostIndexClientSide() {

  const [posts, setPosts] = useState<Post[]>()
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    async function fetchTodos() {
        const response = await getPosts()
        setPosts(response)
    }  
    setLoading(false)
    fetchTodos();
  }, [])

  if (isLoading) {
    return (
        <span className='px-1 bg-warning'>loading...</span>
    )
  } else {

    return (
        <Layout>
        <>
        <h1>All Todos</h1>
        <p>Client side render</p>

        { posts && posts.length > 0 ?
            <div>{posts.map(post => <div key={post.id}>&rarr; {post.title}</div> )}</div>
            : <b>No posts found!</b>
        }

        </>
        </Layout>
    )
  }
}
