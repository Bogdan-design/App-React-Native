import React, {useCallback} from 'react'
import {EditableSpan} from '@/src/components/EditableSpan/EditableSpan'
import {TaskStatuses, TaskType} from '@/src/api/todolists-api'
import {ThemedView} from "@/components/ThemedView";
import {Checkbox} from "expo-checkbox";
import {Ionicons} from "@expo/vector-icons";
import {useThemeColor} from "@/hooks/useThemeColor";
import {TouchableOpacity} from "react-native";

type TaskPropsType = {
    task: TaskType
    todolistId: string
    changeTaskStatus: (id: string, status: TaskStatuses, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    removeTask: (taskId: string, todolistId: string) => void
}
export const Task = React.memo((props: TaskPropsType) => {
    const iconColor = useThemeColor({}, 'text');

    const onClickHandler = useCallback(() => props.removeTask(props.task.id, props.todolistId), [props.removeTask, props.task.id, props.todolistId]);

    const onChangeHandler = useCallback((value: boolean) => {
        props.changeTaskStatus(props.task.id, value ? TaskStatuses.Completed : TaskStatuses.New, props.todolistId)
    }, [props.changeTaskStatus, props.task.id, props.todolistId]);

    const onTitleChangeHandler = useCallback((newValue: string) => {
        props.changeTaskTitle(props.task.id, newValue, props.todolistId)
    }, [props.changeTaskTitle, props.task.id, props.todolistId]);

    return <ThemedView key={props.task.id} style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 4, gap: 8}}>
        <Checkbox
            value={props.task.status === TaskStatuses.Completed}
            onValueChange={onChangeHandler}
        />

        <EditableSpan value={props.task.title} onChange={onTitleChangeHandler}/>

        <TouchableOpacity
            onPress={onClickHandler}
            accessibilityLabel={`Delete task ${props.task.title}`}
            accessibilityRole="button"
            style={{padding: 8}}
        >
            <Ionicons name="trash-outline" size={20} color={iconColor} />
        </TouchableOpacity>
    </ThemedView>
})
