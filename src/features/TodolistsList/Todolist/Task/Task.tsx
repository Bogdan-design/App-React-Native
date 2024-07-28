import React, {ChangeEvent, useCallback} from 'react'
import {EditableSpan} from '@/src/components/EditableSpan/EditableSpan'
import {TaskStatuses, TaskType} from '@/src/api/todolists-api'
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";

type TaskPropsType = {
    task: TaskType
    todolistId: string
    changeTaskStatus: (id: string, status: TaskStatuses, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    removeTask: (taskId: string, todolistId: string) => void
}
export const Task = React.memo((props: TaskPropsType) => {
    const onClickHandler = useCallback(() => props.removeTask(props.task.id, props.todolistId), [props.task.id, props.todolistId]);

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked
        props.changeTaskStatus(props.task.id, newIsDoneValue ? TaskStatuses.Completed : TaskStatuses.New, props.todolistId)
    }, [props.task.id, props.todolistId]);

    const onTitleChangeHandler = useCallback((newValue: string) => {
        props.changeTaskTitle(props.task.id, newValue, props.todolistId)
    }, [props.task.id, props.todolistId]);

    return <ThemedView key={props.task.id}>

        {/*className={props.task.status === TaskStatuses.Completed ? 'is-done' : ''}*/}
        <ThemedText>Checkbox</ThemedText>
        {/*<Checkbox*/}
        {/*    checked={props.task.status === TaskStatuses.Completed}*/}
        {/*    color="primary"*/}
        {/*    onChange={onChangeHandler}*/}
        {/*/>*/}

        <EditableSpan value={props.task.title} onChange={onTitleChangeHandler}/>
        <ThemedText>Del</ThemedText>
        {/*<IconButton onClick={onClickHandler}>*/}
        {/*    <Delete/>*/}
        {/*</IconButton>*/}
    </ThemedView>
})
