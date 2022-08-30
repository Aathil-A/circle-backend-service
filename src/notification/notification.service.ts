import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { AgentService } from 'src/agent/service/agent.service';
import { Repository } from 'typeorm';
import { Agent } from '../agent/entity/agent.entity';

Injectable();
export class NotificationService {
  constructor(
    private agentService: AgentService,
    @InjectRepository(Agent)
    private agentRepo: Repository<Agent>,
  ) {}
  public async send() {
    console.log('here');

    const body = 'You have a new enquiry';
    const agents = await this.agentRepo.find();
    const regIds = agents.map((e) => e.firebaseId);

    axios
      .post(
        'https://fcm.googleapis.com/fcm/send',
        {
          registration_ids: regIds,
          notification: {
            body: body,
            title: 'You have a new notification',
          },
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'key=AAAAfN2r3M0:APA91bGck-1IpaFw9iEqnnuvOhSLZ_KVL4Xm8Vafr5E9CvSPCMa_hON26OwKIG_0XBzpZNN2JyzryxOiwB5Nha3EyNIbYmtf-75PC7xpI6ap765krmRrfq68kqySHq-aLef3YRKG2uQM',
          },
        },
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async notifyUser(userFireBaseId:string) {
    const body = 'You have a new enquiry';
    axios
    .post(
      'https://fcm.googleapis.com/fcm/send',
      {
        registration_ids: [userFireBaseId],
        notification: {
          body: body,
          title: 'Circle',
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'key=AAAAfN2r3M0:APA91bGck-1IpaFw9iEqnnuvOhSLZ_KVL4Xm8Vafr5E9CvSPCMa_hON26OwKIG_0XBzpZNN2JyzryxOiwB5Nha3EyNIbYmtf-75PC7xpI6ap765krmRrfq68kqySHq-aLef3YRKG2uQM',
        },
      },
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
