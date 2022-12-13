import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { getTodos } from "../utils/fauna";

interface Todo {
    _id: string;
    title: string;
    completed: boolean;
}

type Props = {
    todos: Todo[];
};

export default function TodoIndex({ todos }: Props) {
    return (
        <>
            <h1>All Todos</h1>
            <p>Data fetched from server, and rendered SSR</p>

            {todos && todos.length > 0 ? (
                <div>
                    {todos.map((todo) => (
                        <div key={todo._id}>&rarr; {todo.title}</div>
                    ))}
                </div>
            ) : (
                <b>No todos found!</b>
            )}
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const todos = await getTodos();
    return { props: { todos } };
};
