import {Alert, Button, Image, Keyboard, Platform, StyleSheet, TextInput, TouchableWithoutFeedback} from 'react-native';

import React, {ReactElement, ReactNode} from "react";
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import {Checkbox} from "expo-checkbox";
import {Input} from "@/components/input/Input";
import {MainApp} from "@/src/app/MainApp";
import {Provider} from "react-redux";
import {store} from '@/src/app/store'

type TasksType = {
    id: number,
    title: string,
    isDone: boolean,
}

export default function HomeScreen() {
    <Provider store={store}>
        <ThemedText style={styles.titleContainer}>
            <MainApp/>
        </ThemedText>
    </Provider>

    // const [text, setText] = React.useState<string>('Text input');
    // const [show, setShow] = React.useState(0);
    // const [tasks, setTasks] = React.useState<TasksType[]>([
    //     {id: 1, title: 'HTML', isDone: true},
    //     {id: 2, title: 'CSS', isDone: true},
    //     {id: 3, title: 'JS', isDone: false},
    //     {id: 4, title: 'React', isDone: true},
    //     {id: 5, title: 'React Native', isDone: false},
    //
    // ]);
    //
    //
    // const addTask = () => {
    //     const newTask = {id: tasks.length + 1, title: text, isDone: false};
    //     Alert.alert('New task added')
    //     setTasks([...tasks, newTask])
    //     setText('')
    // }
    // const changeStatus = (tId: number, status: boolean) => {
    //     setTasks(tasks.map(t => t.id === tId ? {...t, isDone: status} : t))
    // }
    //
    // const changeTitle = (title: string, id: number) => {
    //     setTasks(tasks.map(t => t.id === id ? {...t, title} : t))
    //     setShow(0)
    // }
    //
    //
    // return (
    //     <ParallaxScrollView
    //         headerBackgroundColor={{light: '#A1CEDC', dark: '#1D3D47'}}
    //         headerImage={
    //             <Image
    //                 source={require('@/assets/images/partial-react-logo.png')}
    //                 style={styles.reactLogo}
    //             />
    //         }>
    //         <ThemedView style={styles.titleContainer}>
    //             <HideKeyboard>
    //                 <TextInput style={[styles.input]}
    //                            onChangeText={setText}
    //                            value={text}
    //                 />
    //             </HideKeyboard>
    //
    //             <ThemedView>
    //                 <ThemedView>
    //                     <Button
    //                         color={'white'}
    //                         title="Add task"
    //                         onPress={addTask}
    //                     />
    //                 </ThemedView>
    //
    //                 {tasks.map(t => {
    //                     return <ThemedView key={t.id} style={[styles.boxTasks]}>
    //                         <Checkbox
    //                             value={t.isDone}
    //
    //                             onValueChange={(value) => changeStatus(t.id, value)}
    //                             // style={styles.checkbox}
    //                         />
    //                         {show === t.id
    //                             ? <Input id={t.id} changeTitle={changeTitle} title={t.title}
    //                             />
    //                             : <ThemedText onPress={() => setShow(t.id)}>{t.title}</ThemedText>}
    //                     </ThemedView>
    //                 })}
    //             </ThemedView>
    //         </ThemedView>
    //         <ThemedView style={styles.stepContainer}>
    //             <ThemedText type="subtitle">Step 1: Try it</ThemedText>
    //             <ThemedText>
    //                 Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
    //                 Press{' '}
    //                 <ThemedText type="defaultSemiBold">
    //                     {Platform.select({ios: 'cmd + d', android: 'cmd + m'})}
    //                 </ThemedText>{' '}
    //                 to open developer tools.
    //             </ThemedText>
    //         </ThemedView>
    //         <ThemedView style={styles.stepContainer}>
    //             <ThemedText type="subtitle">Step 2: Explore</ThemedText>
    //             <ThemedText>
    //                 Tap the Explore tab to learn more about what's included in this starter app.
    //             </ThemedText>
    //         </ThemedView>
    //         <ThemedView style={styles.stepContainer}>
    //             <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
    //             <ThemedText>
    //                 When you're ready, run{' '}
    //                 <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
    //                 <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
    //                 <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
    //                 <ThemedText type="defaultSemiBold">app-example</ThemedText>.
    //             </ThemedText>
    //         </ThemedView>
    //     </ParallaxScrollView>
    // );
}

// const HideKeyboard = ({children}: { children: ReactNode }): ReactElement => (
//     <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//         {children}
//     </TouchableWithoutFeedback>
// )

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
    },
    input: {
        backgroundColor: '#FFFFFF',
        fontSize: 18,
        width: 200,
        padding: 8,

    },
    boxTasks: {
        flexDirection: 'row',
        gap: 16
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});


// export const globalStyles = StyleSheet.create({
//     reactLogo: {},
//     border: {
//         borderStyle: 'solid',
//         borderWidth: 1,
//         borderColor: 'red'
//     }
// })

// export const App = () => {
//     <Provider store={store}>
//         <MainApp/>
//     </Provider>
// }