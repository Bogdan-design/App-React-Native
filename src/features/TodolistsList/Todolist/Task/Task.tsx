import React, { useCallback } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import Ionicons from '@expo/vector-icons/Ionicons';
import { EditableSpan } from '@/src/components/EditableSpan/EditableSpan';
import { TaskStatuses, TaskType } from '@/src/api/todolists-api';
import { ThemedView } from '@/components/ThemedView';

type TaskPropsType = {
    task: TaskType
    todolistId: string
    changeTaskStatus: (id: string, status: TaskStatuses, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    removeTask: (taskId: string, todolistId: string) => void
}

export const Task = React.memo(({ task, todolistId, changeTaskStatus, changeTaskTitle, removeTask }: TaskPropsType) => {
    const { id, status, title } = task;
    const isCompleted = status === TaskStatuses.Completed;

    const onClickHandler = useCallback(() => removeTask(id, todolistId), [id, todolistId, removeTask]);

    const onChangeHandler = useCallback((newIsDoneValue: boolean) => {
        changeTaskStatus(id, newIsDoneValue ? TaskStatuses.Completed : TaskStatuses.New, todolistId);
    }, [id, todolistId, changeTaskStatus]);

    const onTitleChangeHandler = useCallback((newValue: string) => {
        changeTaskTitle(id, newValue, todolistId);
    }, [id, todolistId, changeTaskTitle]);

    return (
        <ThemedView style={styles.container}>
            <Checkbox
                value={isCompleted}
                onValueChange={onChangeHandler}
                accessibilityLabel={`Mark task "${title}" as ${isCompleted ? 'incomplete' : 'complete'}`}
            />
            <EditableSpan value={title} onChange={onTitleChangeHandler} />
            <TouchableOpacity
                onPress={onClickHandler}
                accessibilityLabel={`Delete task "${title}"`}
                accessibilityRole="button"
                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                style={styles.deleteButton}
            >
                <Ionicons name="trash-outline" size={20} color="#ff4d4f" />
            </TouchableOpacity>
        </ThemedView>
    );
});

Task.displayName = 'Task';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingVertical: 4,
    },
    deleteButton: {
        padding: 4,
    },
});
