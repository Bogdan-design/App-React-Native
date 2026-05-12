import React, {useState} from 'react';
import {ThemedText} from "@/components/ThemedText";
import {StyleProp, StyleSheet, TextInput, TextStyle} from "react-native";

type EditableSpanPropsType = {
    value: string
    onChange: (newValue: string) => void
    style?: StyleProp<TextStyle>
}

export const EditableSpan = React.memo(function EditableSpan({ value, onChange, style }: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(value);

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(value);
    }
    const activateViewMode = () => {
        setEditMode(false);
        onChange(title);
    }

    return editMode
        ? <TextInput
            value={title}
            onChangeText={setTitle}
            autoFocus
            onBlur={activateViewMode}
            onSubmitEditing={activateViewMode}
            style={[styles.input, style]}
          />
        : <ThemedText
            style={style}
            onLongPress={activateEditMode}
            onPress={activateEditMode}
        >
            {value}
    </ThemedText>
});

const styles = StyleSheet.create({
    input: {
        fontSize: 16,
        padding: 0,
        margin: 0,
    }
})

// <TextField value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode}/>