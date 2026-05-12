import React, {useCallback} from 'react'
import {EditableSpan} from '@/src/components/EditableSpan/EditableSpan'
import {TaskStatuses, TaskType} from '@/src/api/todolists-api'
import {ThemedView} from "@/components/ThemedView";
import Checkbox from 'expo-checkbox';
import {StyleSheet, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";

type TaskPropsType = {
    task: TaskType
    todolistId: string
    changeTaskStatus: (id: string, status: TaskStatuses, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    removeTask: (taskId: string, todolistId: string) => void
}
export const Task = React.memo(function Task({task, todolistId, removeTask, changeTaskStatus, changeTaskTitle}: TaskPropsType) {
    const onClickHandler = useCallback(() => removeTask(task.id, todolistId), [task.id, todolistId, removeTask]);

    const onChangeHandler = useCallback((value: boolean) => {
        changeTaskStatus(task.id, value ? TaskStatuses.Completed : TaskStatuses.New, todolistId)
    }, [task.id, todolistId, changeTaskStatus]);

    const onTitleChangeHandler = useCallback((newValue: string) => {
        changeTaskTitle(task.id, newValue, todolistId)
    }, [task.id, todolistId, changeTaskTitle]);

    return <ThemedView key={task.id} style={styles.taskContainer}>

        <ThemedView style={styles.titleContainer}>
            <Checkbox
                value={task.status === TaskStatuses.Completed}
                onValueChange={onChangeHandler}
            />

            <EditableSpan
                value={task.title}
                onChange={onTitleChangeHandler}
                style={[
                    styles.title,
                    task.status === TaskStatuses.Completed && styles.completedTitle
                ]}
            />
        </ThemedView>

        <TouchableOpacity
            onPress={onClickHandler}
            accessibilityLabel="Delete task"
            accessibilityRole="button"
            style={styles.deleteButton}
        >
            <Ionicons name="trash-outline" size={24} color="#687076" />
        </TouchableOpacity>
    </ThemedView>
})

const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 4,
        justifyContent: 'space-between',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    title: {
        marginLeft: 12,
        fontSize: 16,
    },
    completedTitle: {
        textDecorationLine: 'line-through',
        opacity: 0.5,
    },
    deleteButton: {
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
