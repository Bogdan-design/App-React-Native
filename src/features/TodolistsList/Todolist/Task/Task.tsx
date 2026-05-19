import React, {useCallback} from 'react'
import {StyleSheet, TouchableOpacity} from 'react-native'
import {EditableSpan} from '@/src/components/EditableSpan/EditableSpan'
import {TaskStatuses, TaskType} from '@/src/api/todolists-api'
import {ThemedView} from "@/components/ThemedView";
import {Checkbox} from 'expo-checkbox'
import {Ionicons} from '@expo/vector-icons'
import {useThemeColor} from '@/hooks/useThemeColor'

type TaskPropsType = {
    task: TaskType
    todolistId: string
    changeTaskStatus: (id: string, status: TaskStatuses, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    removeTask: (taskId: string, todolistId: string) => void
}
export const Task = React.memo((props: TaskPropsType) => {
    const iconColor = useThemeColor({}, 'text');
    const tintColor = useThemeColor({}, 'tint');

    const onClickHandler = useCallback(() => props.removeTask(props.task.id, props.todolistId), [props.task.id, props.todolistId]);

    const onValueChangeHandler = useCallback((newValue: boolean) => {
        props.changeTaskStatus(props.task.id, newValue ? TaskStatuses.Completed : TaskStatuses.New, props.todolistId)
    }, [props.task.id, props.todolistId, props.changeTaskStatus]);

    const onTitleChangeHandler = useCallback((newValue: string) => {
        props.changeTaskTitle(props.task.id, newValue, props.todolistId)
    }, [props.task.id, props.todolistId, props.changeTaskTitle]);

    return <ThemedView key={props.task.id} style={styles.container}>
        <Checkbox
            value={props.task.status === TaskStatuses.Completed}
            color={props.task.status === TaskStatuses.Completed ? tintColor : undefined}
            onValueChange={onValueChangeHandler}
        />

        <ThemedView style={styles.titleWrapper}>
            <EditableSpan value={props.task.title} onChange={onTitleChangeHandler}/>
        </ThemedView>

        <TouchableOpacity
            onPress={onClickHandler}
            accessibilityLabel="Delete task"
            accessibilityRole="button"
            style={styles.deleteButton}
        >
            <Ionicons name="trash-outline" size={24} color={iconColor} />
        </TouchableOpacity>
    </ThemedView>
})

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        gap: 12,
    },
    titleWrapper: {
        flex: 1,
    },
    deleteButton: {
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
