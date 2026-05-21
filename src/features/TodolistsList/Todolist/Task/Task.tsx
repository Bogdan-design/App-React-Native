import React, {useCallback} from 'react'
import {StyleSheet, TouchableOpacity} from 'react-native'
import {EditableSpan} from '@/src/components/EditableSpan/EditableSpan'
import {TaskStatuses, TaskType} from '@/src/api/todolists-api'
import {ThemedView} from "@/components/ThemedView";
import {Ionicons} from "@expo/vector-icons";
import {useThemeColor} from "@/hooks/useThemeColor";

type TaskPropsType = {
    task: TaskType
    todolistId: string
    changeTaskStatus: (id: string, status: TaskStatuses, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    removeTask: (taskId: string, todolistId: string) => void
}
export const Task = React.memo(({ task, todolistId, removeTask, changeTaskTitle }: TaskPropsType) => {
    const onClickHandler = useCallback(() => removeTask(task.id, todolistId), [task.id, todolistId, removeTask]);

    const onTitleChangeHandler = useCallback((newValue: string) => {
        changeTaskTitle(task.id, newValue, todolistId)
    }, [task.id, todolistId, changeTaskTitle]);

    const iconColor = useThemeColor({}, 'text');

    return (
        <ThemedView key={task.id} style={styles.container}>
            <EditableSpan value={task.title} onChange={onTitleChangeHandler}/>

            <TouchableOpacity
                onPress={onClickHandler}
                style={styles.deleteButton}
                accessibilityLabel="Delete task"
                accessibilityRole="button"
            >
                <Ionicons name="trash-outline" size={24} color={iconColor} />
            </TouchableOpacity>
        </ThemedView>
    );
});

Task.displayName = 'Task';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    deleteButton: {
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
