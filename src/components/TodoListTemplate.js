import React from "react";
import "../asset/TodoListTemplate.scss";

const TodoListTemplate = ({palette, form, children}) => {
    return(
        <main className="todo-list">
            <div className="title">
                오늘 할 일
            </div>
            <section className="palette-wrapper">
                {palette}
            </section>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    );
};

export default TodoListTemplate;
