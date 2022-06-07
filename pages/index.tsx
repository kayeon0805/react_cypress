import { useCallback, useState } from "react";
import AddTodo from "../components/main/AddTodo";
import AppLayout from "../components/AppLayout";
import List from "../components/main/List";

type Todo = { id: number; value: string };

const Home = () => {
    const initialTodo = [
        { id: 1, value: "투두 리스트 만들기" },
        { id: 2, value: "테스트 코드 연습하기" },
        { id: 3, value: "데이트 가기" },
    ];
    const [todo, setTodo] = useState(initialTodo);
    const [done, setDone] = useState([]);

    const modifyTodo = useCallback((id: number, value: string) => {
        setTodo((prev: []) => {
            const arr: any[] = [...prev];
            const index = arr.findIndex((v: Todo) => v.id === id);
            arr[index] = { id, value };
            return arr;
        });
    }, []);

    const addTodo = useCallback((id: number, value: string) => {
        setTodo((prev: []) => [...prev, { id, value }]);
    }, []);

    const removeTodo = useCallback((id: number) => {
        setTodo((prev: []) => prev.filter((todo: Todo) => todo.id !== id));
    }, []);

    const addDone = useCallback((id: number, value: string) => {
        setDone((prev: []) => [...prev, { id, value }]);
    }, []);

    const removeDone = useCallback((id: number) => {
        setDone((prev: []) => prev.filter((todo: Todo) => todo.id !== id));
    }, []);

    return (
        <AppLayout>
            <>
                <AddTodo addTodo={addTodo} lastId={todo[todo.length - 1]?.id} />
                {todo.length > 0 &&
                    todo.map((v: Todo) => {
                        return (
                            <List
                                key={v.id}
                                id={v.id}
                                value={v.value}
                                check={done
                                    .map((v: Todo) => v.id)
                                    .includes(v.id)}
                                removeTodo={removeTodo}
                                addDone={addDone}
                                removeDone={removeDone}
                                modifyTodo={modifyTodo}
                            />
                        );
                    })}
            </>
        </AppLayout>
    );
};

export default Home;
