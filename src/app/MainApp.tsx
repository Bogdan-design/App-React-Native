import React from 'react'
import './App.css'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import {useAppSelector} from './store'
import {RequestStatusType} from './app-reducer'
import {ThemedView} from "@/components/ThemedView";


import {useAppDispatch} from './store'
import {setAppErrorAC} from './app-reducer'
import {Pressable} from 'react-native'
import {ThemedText} from '@/components/ThemedText'

export const MainApp =()=> {
    const status = useAppSelector<RequestStatusType>((state) => state.app.status)
    const error = useAppSelector<string | null>((state) => state.app.error)
    const dispatch = useAppDispatch()

    return (
        <ThemedView style={{ flex: 1 }}>
            {error && (
                <Pressable
                    onPress={() => dispatch(setAppErrorAC(null))}
                    style={{ backgroundColor: '#ff4d4f', padding: 12, borderRadius: 8, marginBottom: 8 }}
                    accessibilityRole="button"
                    accessibilityLabel="Dismiss error message"
                >
                    <ThemedText style={{ color: 'white', fontWeight: 'bold' }}>
                        Error: {error} (Tap to dismiss)
                    </ThemedText>
                </Pressable>
            )}
            {/*<AppBar position="static">*/}
            {/*    <Toolbar>*/}
            {/*        <IconButton edge="start" color="inherit" aria-label="menu">*/}
            {/*            <Menu/>*/}
            {/*        </IconButton>*/}
            {/*        <Typography variant="h6">*/}
            {/*            News*/}
            {/*        </Typography>*/}
            {/*        <Button color="inherit">Login</Button>*/}
            {/*    </Toolbar>*/}
            {/*    {status === 'loading' && <LinearProgress/>}*/}
            {/*</AppBar>*/}
            <ThemedView>
                <TodolistsList/>
            </ThemedView>
        </ThemedView>
    )
}
