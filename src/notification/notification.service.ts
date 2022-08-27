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
    })
    .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

}}

