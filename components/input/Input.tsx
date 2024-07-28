import React from 'react';
import {Button, StyleSheet, TextInput} from 'react-native';


type InputProps = {
    id:number,
    title: string,
    changeTitle: (title: string, id:number) => void,
}

const Input = (props:InputProps) => {
    const [value, setValue] = React.useState<string>(props.title);
    const onChangeTitle = (title: string) => {
        setValue(title);
    }

    return (
        <>
            <TextInput style={[styles.input]}
                       onChangeText={onChangeTitle}
                       value={value}
            />
            <Button title={'+'} onPress={()=>props.changeTitle(value,props.id)}/>
        </>
    );
};


const styles = StyleSheet.create({
    input: {
        backgroundColor: '#FFFFFF',
        fontSize: 18,
        width: 200,
        padding: 8,

    },
})

export {Input};