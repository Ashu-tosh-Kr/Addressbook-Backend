import { Request, Response, Router } from "express";
import Joi from "joi";
import { addAddr, deleteAddr, getAddr, updateAddr } from "../controllers/addrController";

const addrRouter = Router();

export default addrRouter
    .get('/',async (req, res) => {
        try {
            const schema = Joi.object({
                name: Joi.string(),
            })
            const { value, error } = schema.validate(req.body);
            if (error) {
                res.status(422).json({msg:"Validation Error"})
            } else {
                const data = await getAddr(value)
                res.status(200).json({msg:"Found",data:data})
            }
        } catch (err) {
            res.status(500).json({msg:"Server Error"})
        }

    })
    .post('/', async (req, res) => {
        try {
            const schema = Joi.object({
                name: Joi.string().required(),
                addr: Joi.string().required()
            })
            const { value, error } = schema.validate(req.body);
            if (error) {
                res.status(422).json({msg:"Validation Error"})
            } else {
                await addAddr(value)
                res.status(201).json({msg:"Added"})
            }
        } catch (err) {
            res.status(500).json({msg:"Server Error"})
        }

    })
    .delete('/:id', async (req: Request, res: Response) => {
        try {
            const schema = Joi.object({
                id: Joi.string().required(),
            })
            const { value, error } = schema.validate({ id:req.params.id });
            if (error) {
                res.status(422).json({msg:error})
            } else {
                await deleteAddr(value.id)
                res.status(201).json({msg:"Deleted"})
            }
        } catch (err) {
            res.status(500).json({msg:"Server Error"})
        }
    })
    .patch('/:id', async (req, res) => {
        try {
            const schema = Joi.object({
                name: Joi.string(),
                addr: Joi.string()
            })
            const { value, error } = schema.validate(req.body);
            if (error) {
                res.status(422).json({msg:"Validation Error"})
            } else {
                await updateAddr(req.params.id,value)
                res.status(201).json({msg:"Updated"})
            }
        } catch (err) {
            res.status(500).json({msg:"Server Error"})
        }

    });