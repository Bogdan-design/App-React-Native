import React, {ChangeEvent, useCallback} from 'react'
import {EditableSpan} from '@/src/components/EditableSpan/EditableSpan'
import {TaskStatuses, TaskType} from '@/src/api/todolists-api'
import {ThemedView} from "@/components/ThemedView";
import {StyleSheet, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";

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

    return <ThemedView key={props.task.id} style={styles.container}>

        {/*className={props.task.status === TaskStatuses.Completed ? 'is-done' : ''}*/}
        {/*<ThemedText>Checkbox</ThemedText>*/}
        {/*<Checkbox*/}
        {/*    checked={props.task.status === TaskStatuses.Completed}*/}
        {/*    color="primary"*/}
        {/*    onChange={onChangeHandler}*/}
        {/*/>*/}

        <ThemedView style={styles.titleContainer}>
            <EditableSpan value={props.task.title} onChange={onTitleChangeHandler}/>
        </ThemedView>

        <TouchableOpacity
            onPress={onClickHandler}
            accessibilityLabel="Delete task"
            accessibilityRole="button"
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
            style={styles.deleteButton}
        >
            <Ionicons name="trash-outline" size={24} color="#FF3B30" />
        </TouchableOpacity>
    </ThemedView>
})

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 4,
    },
    titleContainer: {
        flex: 1,
    },
    deleteButton: {
        padding: 8,
    },
});
