import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Agent } from '../entity/agent.entity';

@Injectable()
export class AgentService {
    constructor(
        @InjectRepository(Agent)
        private agentRepo: Repository<Agent>,
    ) { }
    

    async findOne() { } 
    
    async findOneOrFail() { }
    
    async find() {
        return await this.agentRepo.find();
    }
    
    async findOrFail() { }
    
    async save() { }
    
    async remove() {}
}
