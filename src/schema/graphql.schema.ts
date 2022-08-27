
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateDestinationInput {
    name: string;
}

export interface CreateUserInput {
    name: string;
    email: string;
    password: string;
}

export interface UpdateUserInput {
    name?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export interface IQuery {
    health(): Nullable<string> | Promise<Nullable<string>>;
    getDestinations(): Nullable<Nullable<Destination>[]> | Promise<Nullable<Nullable<Destination>[]>>;
    getDestination(id: string): Nullable<Destination> | Promise<Nullable<Destination>>;
    getUsers(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
    getUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface Destination {
    id?: Nullable<string>;
    name?: Nullable<string>;
}

export interface IMutation {
    createDestination(input: CreateDestinationInput): Nullable<Destination> | Promise<Nullable<Destination>>;
    createUser(input: CreateUserInput): Nullable<User> | Promise<Nullable<User>>;
    updateUser(id: string, input: UpdateUserInput): Nullable<User> | Promise<Nullable<User>>;
    deleteUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface User {
    id?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
    name?: Nullable<string>;
}

type Nullable<T> = T | null;
