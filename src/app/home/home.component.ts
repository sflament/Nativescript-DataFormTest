import { Component, OnInit } from "@angular/core";
import { Topic } from "./topics.model";
import { SelectorsMap } from "tns-core-modules/ui/styling/css-selector/css-selector";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    private topic: Topic = new Topic("","nothing else to add !",1);
    private topicMetaData =  {
        "isReadOnly": false,
        "commitMode": "Immediate",
        "validationMode": "Immediate",
        "propertyAnnotations":
        [
            {
                "name": "title",
                "displayName": "Topic Title",
                "hintText": "How To describe Life ?",
                "index": 0
            },
            {
                "name": "description",
                "displayName": "Topic Description",
                "editor":"MultilineText",
                "index": 1
            },
            {
                "name": "priority",
                "displayName": "Topic Priority",
                "editor":"Number",
                "index": 2
             },
        ]
    }; 

    constructor() {
    }

    ngOnInit(): void {
        console.log("init");
    }

    addDone() : void {
        console.log("addDone");
    }
}
