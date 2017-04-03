/**
 * Created by muratguney on 29/03/2017.
 */
import React from 'react'
import {Card, CardHeader, CardActions, CardBody} from '../Card';
import Acordion from '../Acordion';
import Button from '../Button';
import {List, ListItem} from '../List';


const data2 = [
    {dsc: "List 7",id:1},
    {dsc: "List 8",id:1},
    {dsc: "List 9",id:1},
    {dsc: "List 10",id:1},
    {dsc: "List 11",id:1},
    {dsc: "List 12",id:1},
];
const data3 = [
    {dsc: "List 13",id:2},
    {dsc: "List 14",id:2},
    {dsc: "List 15",id:2},
    {dsc: "List 16",id:3},
    {dsc: "List 17",id:3},
    {dsc: "List 18",id:3},
];
const data4 = [
    {dsc: "List 19"},
    {dsc: "List 20"},
    {dsc: "List 21"},
    {dsc: "List 22"},
    {dsc: "List 23"},
    {dsc: "List 24"},
];

const data5 = [
    {dsc: "List 25"},
    {dsc: "List 26"},
    {dsc: "List 27"},
    {dsc: "List 28"},
    {dsc: "List 29"},
    {dsc: "List 30"},
];



const data1 = [
    {dsc: "List 1",id:1,children:data2},
    {dsc: "List 2",id:2,children:data3},
    {dsc: "List 3",id:3,children:data4},
    {dsc: "List 4",id:4,children:data5},
    {dsc: "List 5",id:5},
    {dsc: "List 6",id:6},
];

export default class AcordionPage extends React.Component {
    state = {};

    render() {
        return (
            <Card style={{justifyContent: "flex-start",height:"100%"}}>
                <CardHeader title="Title"/>

                    <Acordion label="İlk">
                        <Acordion label="İki" />
                        <Acordion label="Üç" />
                        <Acordion label="Dört" />
                    </Acordion>
                    <Acordion label="Ana">
                        <Acordion label="İki" />
                        <Acordion label="Üç" />
                        <Acordion label="Dört" />
                    </Acordion>


                    <Acordion itemHeight={48} data={data1} child={(child,index)=> {
                        if(child.item.children)
                        return(
                            <Acordion data={child.item.children} child={(child2,index2)=>{
                                return(
                                    <Card style={{justifyContent: "flex-start",height:"100%"}}>
                                        <CardHeader title="Title"/>
                                        <CardBody>{child2.item.dsc}</CardBody>
                                    </Card>
                                )
                            }} />
                        );
                        else {
                            return(
                            <span>aaa</span>
                            )
                        }
                    }
                    }>
                    </Acordion>

            </Card>
        )
    }
}