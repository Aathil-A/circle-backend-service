import { HttpException, Injectable } from "@nestjs/common";
import axios from "axios"

Injectable()
export class NotificationService {
  public async send(body,registrationIds,title){
    axios.post('https://fcm.googleapis.com/fcm/send', {
        "registration_ids": registrationIds,
        "notification": {
            "body": body,
            "title": title
        }
    })
    .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

}}

