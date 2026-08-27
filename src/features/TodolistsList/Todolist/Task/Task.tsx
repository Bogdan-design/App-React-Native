import React, {useCallback} from 'react'
import {StyleSheet, TouchableOpacity} from 'react-native'
import {Checkbox} from 'expo-checkbox'
import Ionicons from '@expo/vector-icons/Ionicons'
import {EditableSpan} from '@/src/components/EditableSpan/EditableSpan'
import {TaskStatuses, TaskType} from '@/src/api/todolists-api'
import {ThemedView} from "@/components/ThemedView"
import {useThemeColor} from "@/hooks/useThemeColor"

type TaskPropsType = {
    task: TaskType
    todolistId: string
    changeTaskStatus: (id: string, status: TaskStatuses, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    removeTask: (taskId: string, todolistId: string) => void
}

export const Task = React.memo((props: TaskPropsType) => {
    const {task, todolistId, changeTaskStatus, changeTaskTitle, removeTask} = props
    const iconColor = useThemeColor({}, 'icon')

    const onClickHandler = useCallback(() => removeTask(task.id, todolistId), [removeTask, task.id, todolistId]);

    const onChangeHandler = useCallback((value: boolean) => {
        changeTaskStatus(task.id, value ? TaskStatuses.Completed : TaskStatuses.New, todolistId)
    }, [changeTaskStatus, task.id, todolistId]);

    const onTitleChangeHandler = useCallback((newValue: string) => {
        changeTaskTitle(task.id, newValue, todolistId)
    }, [changeTaskTitle, task.id, todolistId]);

    const isCompleted = task.status === TaskStatuses.Completed

    return (
        <ThemedView style={styles.container}>
            <Checkbox
                value={isCompleted}
                onValueChange={onChangeHandler}
                accessibilityLabel={`Mark task "${task.title}" as ${isCompleted ? 'incomplete' : 'complete'}`}
            />
            <EditableSpan value={task.title} onChange={onTitleChangeHandler}/>
            <TouchableOpacity
                onPress={onClickHandler}
                accessibilityLabel={`Delete task "${task.title}"`}
                accessibilityRole="button"
                style={styles.deleteButton}
            >
                <Ionicons name="trash-outline" size={20} color={iconColor} />
            </TouchableOpacity>
        </ThemedView>
    )
})

Task.displayName = 'Task'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingVertical: 4,
    },
    deleteButton: {
        padding: 4,
        minWidth: 44,
        minHeight: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
