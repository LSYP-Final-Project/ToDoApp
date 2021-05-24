import React, { useEffect } from 'react'
import { CommentsService, PostsService, ProfileService, TodosService, UsersService } from './services'

export default function ExampleServices() {
    async function getComments() {
        try {
            const results = await CommentsService.getComments();
            console.log(results)

        } catch(error) {
            console.error(error);
        } finally {
            
        }
    }

    async function getTodos() {
        try {
            const results = await TodosService.getTodos();
            console.log(results)

        } catch(error) {
            console.error(error);
        } finally {

        }
    }
    async function getUsers() {
        try {
            const results = await UsersService.getUsers();
            console.log(results)

        } catch(error) {
            console.error(error);
        } finally {

        }
    }
    async function getPosts() {
        try {
            const results = await PostsService.getPosts();
            console.log(results)

        } catch(error) {
            console.error(error);
        } finally {

        }
    }
    async function getProfile() {
        try {
            const results = await ProfileService.getProfile();
            console.log(results)

        } catch(error) {
            console.error(error);
        } finally {

        }
    }

    useEffect(() => {
        
        return () => {
            
        }
    }, [])

    return (
        <div className="pb-4">
            <h1>Services</h1>
            <button className="btn btn-primary me-3" onClick={getUsers}>get Users</button>
            <button className="btn btn-primary me-3" onClick={getTodos}>get Todos</button>
            <button className="btn btn-primary me-3" onClick={getPosts}>get Posts</button>
            <button className="btn btn-primary me-3" onClick={getComments}>get Comments</button>
            <button className="btn btn-primary me-3" onClick={getProfile}>get Profile</button>
        </div>
    )
}
