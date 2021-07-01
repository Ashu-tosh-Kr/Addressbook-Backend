import { ObjectId } from "mongodb";
import database from "../../loaders/database";
import IAddress from "../models/addrModel";


export const getAddr = async (query) => {
    const dataCursor = await (await database()).collection('addresses').find(query);
    const data = await dataCursor.toArray()    
    return data;
}

export const addAddr = async (entry:IAddress) => {
    await (await database()).collection('addresses').insertOne(entry);
}

export const deleteAddr = async (id:string) => {
    await(await database()).collection('addresses').deleteOne({_id:new ObjectId(id)});
}

export const updateAddr = async (id:string,update) => {
    await(await database()).collection('addresses').updateOne({_id:new ObjectId(id)},{$set:update});
}