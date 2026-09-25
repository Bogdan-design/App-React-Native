import React, {ChangeEvent, useCallback} from 'react'
import {TouchableOpacity, StyleSheet} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import {EditableSpan} from '@/src/components/EditableSpan/EditableSpan'
import {TaskStatuses, TaskType} from '@/src/api/todolists-api'
import {ThemedView} from "@/components/ThemedView"
import {ThemedText} from "@/components/ThemedText"
import {useThemeColor} from "@/hooks/useThemeColor"

type TaskPropsType = {
    task: TaskType
    todolistId: string
    changeTaskStatus: (id: string, status: TaskStatuses, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    removeTask: (taskId: string, todolistId: string) => void
}
export const Task = React.memo((props: TaskPropsType) => {
    const {task, todolistId, removeTask, changeTaskStatus, changeTaskTitle} = props;
    const iconColor = useThemeColor({ light: '#666666', dark: '#999999' }, 'text');

    const onClickHandler = useCallback(() => removeTask(task.id, todolistId), [task.id, todolistId, removeTask]);

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked
        changeTaskStatus(task.id, newIsDoneValue ? TaskStatuses.Completed : TaskStatuses.New, todolistId)
    }, [task.id, todolistId, changeTaskStatus]);

    const onTitleChangeHandler = useCallback((newValue: string) => {
        changeTaskTitle(task.id, newValue, todolistId)
    }, [task.id, todolistId, changeTaskTitle]);

    return <ThemedView key={task.id} style={styles.container}>

        {/*className={task.status === TaskStatuses.Completed ? 'is-done' : ''}*/}
        <ThemedText>Checkbox</ThemedText>
        {/*<Checkbox*/}
        {/*    checked={task.status === TaskStatuses.Completed}*/}
        {/*    color="primary"*/}
        {/*    onChange={onChangeHandler}*/}
        {/*/>*/}

        <EditableSpan value={task.title} onChange={onTitleChangeHandler}/>
        <TouchableOpacity
            onPress={onClickHandler}
            style={styles.deleteButton}
            accessibilityRole="button"
            accessibilityLabel={`Delete task ${task.title}`}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
            <Ionicons name="trash-outline" size={20} color={iconColor} />
        </TouchableOpacity>
    </ThemedView>
})

Task.displayName = 'Task'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    deleteButton: {
        padding: 8,
        minWidth: 44,
        minHeight: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
