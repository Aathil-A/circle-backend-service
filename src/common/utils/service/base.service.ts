import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Entity, EntitySchema, Repository } from "typeorm";
import { Newable } from "../types";

@Injectable()
export class BaseService<E extends Newable<any>>{
    constructor(
       @InjectRepository(User) 
       private entityRepo:Repository<E>
    ) {}
    
    async findOne() { }
    async findOneOrFail() { }
    async find() { }
    async findOrFail() { }
    async save() { }
    async remove(){}
}