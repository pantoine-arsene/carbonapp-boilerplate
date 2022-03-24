import { CompanyController } from "../controllers/companyController";
import { FastifyInstance } from "fastify";
import { CreateCompanyDto } from '../models/companyModel';

export const CompanyRoutes = async (server: FastifyInstance) => {

    const companyController = new CompanyController(server);

    server.get('/companies', {}, async (request, reply) => companyController.getAll(request, reply));
    server.post<{ Body: CreateCompanyDto }>('/companies', {}, async (request, reply) => companyController.create(request, reply));
    server.get<{ Params: {id: string} }>('/companies/:id', {}, async (request, reply) => companyController.getById(request, reply));
    server.patch<{ Params: {id: string}, Body: CreateCompanyDto }>('/companies/:id', {}, async (request, reply) => companyController.update(request, reply));
    server.delete<{ Params: {id: string} }>('/companies/:id', {}, async (request, reply) => companyController.delete(request, reply));
}