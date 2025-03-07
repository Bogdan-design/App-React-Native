import React, {useCallback, useEffect} from 'react'
import {AddItemForm} from '@/src/components/AddItemForm/AddItemForm'
import {EditableSpan} from '@/src/components/EditableSpan/EditableSpan'
import {Task} from './Task/Task'
import {TaskStatuses, TaskType} from '@/src/api/todolists-api'
import {FilterValuesType, TodolistDomainType} from '../todolists-reducer'
import {fetchTasksTC} from '../tasks-reducer'
import {useAppDispatch} from "@/src/app/store";
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";

type PropsType = {
    todolist: TodolistDomainType
    tasks: Array<TaskType>
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, status: TaskStatuses, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    removeTask: (taskId: string, todolistId: string) => void
    removeTodolist: (id: string) => void
    changeTodolistTitle: (id: string, newTitle: string) => void
}

export const Todolist = React.memo(function ({...props}: PropsType) {
    console.log('Todolist called')

    const dispatch = useAppDispatch()
    useEffect(() => {
        const thunk = fetchTasksTC(props.todolist.id)
        dispatch(thunk)
    }, [])

    const addTask = useCallback((title: string) => {
        props.addTask(title, props.todolist.id)
    }, [props.addTask, props.todolist.id])

    const removeTodolist = () => {
        props.removeTodolist(props.todolist.id)
    }
    const changeTodolistTitle = useCallback((title: string) => {
        props.changeTodolistTitle(props.todolist.id, title)
    }, [props.todolist.id, props.changeTodolistTitle])

    const onAllClickHandler = useCallback(() => props.changeFilter('all', props.todolist.id), [props.todolist.id, props.changeFilter])
    const onActiveClickHandler = useCallback(() => props.changeFilter('active', props.todolist.id), [props.todolist.id, props.changeFilter])
    const onCompletedClickHandler = useCallback(() => props.changeFilter('completed', props.todolist.id), [props.todolist.id, props.changeFilter])


    let tasksForTodolist = props.tasks

    if (props.todolist.filter === 'active') {
        tasksForTodolist = props.tasks.filter(t => t.status === TaskStatuses.New)
    }
    if (props.todolist.filter === 'completed') {
        tasksForTodolist = props.tasks.filter(t => t.status === TaskStatuses.Completed)
    }

    return <ThemedView>
        <EditableSpan value={props.todolist.title} onChange={changeTodolistTitle}/>
        <ThemedText>Del</ThemedText>
            {/*<IconButton onClick={removeTodolist} disabled={props.todolist.entityStatus === 'loading'}>*/}
            {/*    <Delete/>*/}
            {/*</IconButton>*/}

        <AddItemForm addItem={addTask} disabled={props.todolist.entityStatus === 'loading'}/>
        <ThemedView>
            {
                tasksForTodolist.map(t => <Task key={t.id} task={t} todolistId={props.todolist.id}
                                                removeTask={props.removeTask}
                                                changeTaskTitle={props.changeTaskTitle}
                                                changeTaskStatus={props.changeTaskStatus}
                />)
            }
        </ThemedView>
        {/*<div style={{paddingTop: '10px'}}>*/}
        {/*    <Button variant={props.todolist.filter === 'all' ? 'outlined' : 'text'}*/}
        {/*            onClick={onAllClickHandler}*/}
        {/*            color={'inherit'}*/}
        {/*    >All*/}
        {/*    </Button>*/}
        {/*    <Button variant={props.todolist.filter === 'active' ? 'outlined' : 'text'}*/}
        {/*            onClick={onActiveClickHandler}*/}
        {/*            color={'primary'}>Active*/}
        {/*    </Button>*/}
        {/*    <Button variant={props.todolist.filter === 'completed' ? 'outlined' : 'text'}*/}
        {/*            onClick={onCompletedClickHandler}*/}
        {/*            color={'secondary'}>Completed*/}
        {/*    </Button>*/}
        {/*</div>*/}
    </ThemedView>
})


