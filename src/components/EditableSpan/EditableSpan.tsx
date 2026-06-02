import React, {useState} from 'react';
import {ThemedText} from "@/components/ThemedText";
import {TextInput, StyleSheet} from "react-native";
import {useThemeColor} from "@/hooks/useThemeColor";

type EditableSpanPropsType = {
    value: string
    onChange: (newValue: string) => void
}

export const EditableSpan = React.memo(function (props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.value);
    const color = useThemeColor({}, 'text');

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.value);
    }
    const activateViewMode = () => {
        setEditMode(false);
        props.onChange(title);
    }
    const changeTitle = (value: string) => {
        setTitle(value)
    }

    return editMode
        ? <TextInput
            value={title}
            onChangeText={changeTitle}
            autoFocus
            onBlur={activateViewMode}
            style={[styles.input, {color}]}
          />
        : <ThemedText
            onPress={activateEditMode}
            style={{flex: 1}}
        >
            {props.value}
    </ThemedText>
});

const styles = StyleSheet.create({
    input: {
        fontSize: 16,
        padding: 4,
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    }
})

// <TextField value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode}/>