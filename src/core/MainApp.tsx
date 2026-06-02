import React from "react"
import {TodolistsList} from "../features/TodolistsList/TodolistsList"
import {useAppSelector} from "./store"
import {RequestStatusType} from "./app-reducer"
import {ThemedView} from "@/components/ThemedView"
import {ThemedText} from "@/components/ThemedText"


export const MainApp =()=> {
    const status = useAppSelector<RequestStatusType>((state) => state.app.status)
    return (
        <ThemedView style={{ flex: 1, padding: 10 }}>
            <ThemedText type="title" style={{ textAlign: "center", marginVertical: 20 }}>
                My Tasks
            </ThemedText>
            {status === "loading" && <ThemedText>Loading...</ThemedText>}
            <ThemedView style={{ flex: 1 }}>
                <TodolistsList/>
            </ThemedView>
        </ThemedView>
    )
}
