import React, { useCallback, useState } from "react";
import { Form, Input, Button } from "antd";
import { LightText } from "../styles";

type AddTodoProps = {
    addTodo: (id: number, value: string) => void;
    lastId: number;
};

const AddTodo = ({ addTodo, lastId }: AddTodoProps) => {
    const [text, setText] = useState("");

    const onChangeText = useCallback(
        (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setText(e.target.value);
        },
        []
    );

    const onFinish = useCallback(() => {
        if (!text || !text.trim()) {
            return alert("텍스트를 입력해주세요");
        }
        addTodo(lastId + 1, text);
        setText("");
    }, [text, lastId]);

    return (
        <Form onFinish={onFinish}>
            <Form.Item rules={[{ required: true }]}>
                <Input.TextArea
                    id="addTodoForm"
                    style={{ resize: "none", height: 70 }}
                    value={text}
                    onChange={onChangeText}
                    placeholder="할 일을 추가해보세요!"
                />
            </Form.Item>
            <Form.Item>
                <LightText>
                    <Button type="primary" htmlType="submit" id="addTodoBtn">
                        추가
                    </Button>
                </LightText>
            </Form.Item>
        </Form>
    );
};

export default AddTodo;
