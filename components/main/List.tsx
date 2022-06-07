import { Button } from "antd";
import { useCallback, useState } from "react";
import { LightText, ListDiv } from "../styles";
import React from "react";

interface Props {
    id: number;
    value: string;
    check: boolean;
    removeTodo: (id: number) => void;
    addDone: (id: number, value: string) => void;
    removeDone: (id: number) => void;
    modifyTodo: (id: number, value: string) => void;
}

const List = ({
    id,
    value,
    check,
    removeTodo,
    addDone,
    removeDone,
    modifyTodo,
}: Props) => {
    const [isModify, setIsModify] = useState(false);
    const [text, setText] = useState(value);

    const onRemoveTodo = useCallback(() => {
        removeTodo(id);
    }, [id]);

    const onModifyTodo = useCallback(() => {
        modifyTodo(id, text);
        changeIsModify();
    }, [text]);

    const changeIsModify = useCallback(() => {
        setIsModify((prev: boolean) => !prev);
    }, []);

    const onEditTodo = useCallback(
        (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setText(e.target.value);
        },
        []
    );

    const onCheck = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const check = e.target.checked;
        if (check) {
            addDone(Number(e.target.id), e.target.value);
        } else {
            removeDone(Number(e.target.id));
        }
    }, []);

    return (
        <ListDiv check={check} id={`list${id}`}>
            <>
                <input
                    type="checkbox"
                    id={id.toString()}
                    style={{ marginRight: "10px" }}
                    value={value}
                    onChange={onCheck}
                />
                {!isModify ? (
                    value
                ) : (
                    <>
                        <textarea
                            style={{
                                width: "50%",
                                height: "100px",
                                resize: "none",
                            }}
                            id="modifyTodoForm"
                            value={text}
                            onChange={onEditTodo}
                        />
                        <LightText>
                            <Button onClick={onModifyTodo} id="modifydone">
                                수정
                            </Button>
                        </LightText>
                        <LightText>
                            <Button onClick={changeIsModify}>취소</Button>
                        </LightText>
                    </>
                )}
                {!isModify && (
                    <>
                        <LightText>
                            <Button onClick={changeIsModify}>수정</Button>
                        </LightText>
                        <LightText>
                            <Button onClick={onRemoveTodo}>삭제</Button>
                        </LightText>
                    </>
                )}
            </>
        </ListDiv>
    );
};
export default List;
