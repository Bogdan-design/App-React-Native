import React, {useCallback} from 'react'
import {EditableSpan} from '@/src/components/EditableSpan/EditableSpan'
import {TaskStatuses, TaskType} from '@/src/api/todolists-api'
import {ThemedView} from "@/components/ThemedView";
import {Checkbox} from "expo-checkbox";
import {Ionicons} from "@expo/vector-icons";
import {Pressable, StyleSheet} from "react-native";
import {useThemeColor} from "@/hooks/useThemeColor";

type TaskPropsType = {
    task: TaskType
    todolistId: string
    changeTaskStatus: (id: string, status: TaskStatuses, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    removeTask: (taskId: string, todolistId: string) => void
}
export const Task = React.memo((props: TaskPropsType) => {
    const iconColor = useThemeColor({}, 'icon');
    const tintColor = useThemeColor({}, 'tint');

    const onClickHandler = useCallback(() => props.removeTask(props.task.id, props.todolistId), [props.task.id, props.todolistId]);

    const onChangeHandler = useCallback((value: boolean) => {
        props.changeTaskStatus(props.task.id, value ? TaskStatuses.Completed : TaskStatuses.New, props.todolistId)
    }, [props.task.id, props.todolistId]);

    const onTitleChangeHandler = useCallback((newValue: string) => {
        props.changeTaskTitle(props.task.id, newValue, props.todolistId)
    }, [props.task.id, props.todolistId]);

    return <ThemedView key={props.task.id} style={styles.container}>
        <Checkbox
            value={props.task.status === TaskStatuses.Completed}
            color={props.task.status === TaskStatuses.Completed ? tintColor : undefined}
            onValueChange={onChangeHandler}
        />

        <ThemedView style={styles.titleContainer}>
            <EditableSpan value={props.task.title} onChange={onTitleChangeHandler}/>
        </ThemedView>

        <Pressable
            onPress={onClickHandler}
            accessibilityLabel="Delete task"
            accessibilityRole="button"
            style={({pressed}) => [
                styles.deleteButton,
                {opacity: pressed ? 0.5 : 1}
            ]}
        >
            <Ionicons name="trash-outline" size={20} color={iconColor}/>
        </Pressable>
    </ThemedView>
})

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        gap: 12,
    },
    titleContainer: {
        flex: 1,
    },
    deleteButton: {
        padding: 8,
    }
});
