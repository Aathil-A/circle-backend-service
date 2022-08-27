import { HttpException, Injectable } from "@nestjs/common";
import axios from "axios"
import { AgentService } from "src/agent/service/agent.service";

Injectable()
export class NotificationService {
  constructor(private agentService: AgentService){

  }
  public async send(){
    const body = "You have a new enquiry"
    const regIds = (await this.agentService.find()).map(e => e.firebaseId)
 
    axios.post('https://fcm.googleapis.com/fcm/send', {
        "registration_ids": regIds,
        "notification": {
            "body": body,
            "title": "Circle"
        }
    },{
      headers: {
      'Content-Type': 'application/json',
      'Authorization': 'key=AAAAfN2r3M0:APA91bGck-1IpaFw9iEqnnuvOhSLZ_KVL4Xm8Vafr5E9CvSPCMa_hON26OwKIG_0XBzpZNN2JyzryxOiwB5Nha3EyNIbYmtf-75PC7xpI6ap765krmRrfq68kqySHq-aLef3YRKG2uQM'
      }
    })
    .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

}}

