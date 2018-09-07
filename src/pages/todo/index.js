import React from 'react'
import Footer from '../../components/todo/footer'
import AddTodo from '../../containers/todo/addtodo'
import VisibleTodoList from '../../containers/todo/visibletodolist'

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)
export default App