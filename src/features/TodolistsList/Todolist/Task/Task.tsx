import React, {useCallback} from 'react'
import {StyleSheet, TouchableOpacity} from 'react-native'
import {EditableSpan} from '@/src/components/EditableSpan/EditableSpan'
import {TaskStatuses, TaskType} from '@/src/api/todolists-api'
import {ThemedView} from "@/components/ThemedView";
import {Checkbox} from "expo-checkbox";
import {Ionicons} from "@expo/vector-icons";

type TaskPropsType = {
    task: TaskType
    todolistId: string
    changeTaskStatus: (id: string, status: TaskStatuses, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    removeTask: (taskId: string, todolistId: string) => void
}
export const Task = React.memo((props: TaskPropsType) => {
    const {removeTask, task, todolistId, changeTaskStatus, changeTaskTitle} = props;
    const onClickHandler = useCallback(() => removeTask(task.id, todolistId), [task.id, todolistId, removeTask]);

    const onChangeHandler = useCallback((value: boolean) => {
        changeTaskStatus(task.id, value ? TaskStatuses.Completed : TaskStatuses.New, todolistId)
    }, [task.id, todolistId, changeTaskStatus]);

    const onTitleChangeHandler = useCallback((newValue: string) => {
        changeTaskTitle(task.id, newValue, todolistId)
    }, [task.id, todolistId, changeTaskTitle]);

    return <ThemedView key={task.id} style={styles.taskContainer}>
        <Checkbox
            value={task.status === TaskStatuses.Completed}
            onValueChange={onChangeHandler}
            color={task.status === TaskStatuses.Completed ? '#4630EB' : undefined}
        />

        <EditableSpan value={task.title} onChange={onTitleChangeHandler}/>

        <TouchableOpacity
            onPress={onClickHandler}
            accessibilityLabel="Delete task"
            accessibilityRole="button"
            style={styles.deleteButton}
        >
            <Ionicons name="trash-outline" size={24} color="red" />
        </TouchableOpacity>
    </ThemedView>
})

const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        gap: 12,
    },
    deleteButton: {
        padding: 4,
    }
})
