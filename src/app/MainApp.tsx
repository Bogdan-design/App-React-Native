import React from 'react'
import './App.css'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import {useAppSelector} from './store'
import {RequestStatusType} from './app-reducer'
import {ThemedView} from "@/components/ThemedView";


export const MainApp =()=> {
    const status = useAppSelector<RequestStatusType>((state) => state.app.status)
    return (
        <ThemedView>
            <ThemedView>
                <TodolistsList/>
            </ThemedView>
        </ThemedView>
    )
}
