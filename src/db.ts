import { FastifyInstance } from 'fastify';
import { FastifyPluginAsync, FastifyPluginOptions } from 'fastify';
import fp from 'fastify-plugin';
import mongoose from 'mongoose';
//import mongooseIntl from 'mongoose-intl';
import { 
    Project, ProjectModel, 
    Company, CompanyModel, 
    Contact, ContactModel, 
    Cobenefit, CobenefitModel, 
    Media, MediaModel, 
    Method, MethodModel, 
    Sector, SectorModel, 
    Dossier, DossierModel 
} from './models/';

export interface Models {
    Project: ProjectModel;
    Company: CompanyModel;
    Contact: ContactModel;
    Cobenefit: CobenefitModel;
    Media: MediaModel;
    Method: MethodModel;
    Sector: SectorModel;
    Dossier: DossierModel;
}
export interface Db {
    models: Models;
}

// define options
export interface MyPluginOptions {
    uri: string;
}
const ConnectDB: FastifyPluginAsync<MyPluginOptions> = async (
    fastify: FastifyInstance,
    options: FastifyPluginOptions
) => {
    try {
        //mongoose.plugin(mongooseIntl, { languages: ['en', 'fr'], defaultLanguage: 'fr' });
        //projectSchema.plugin(mongooseIntl, { languages: ['en', 'fr'], defaultLanguage: 'fr' });
        mongoose.connection.on('connected', () => {
            fastify.log.info({ actor: 'MongoDB' }, 'connected');
        });
        mongoose.connection.on('disconnected', () => {
            fastify.log.error({ actor: 'MongoDB' }, 'disconnected');
        });
        await mongoose.connect(options.uri);
        const models: Models = { Project, Company, Contact, Cobenefit, Media, Method, Sector, Dossier };
        fastify.decorate('db', { models });
    } catch (error) {
        console.error(error);
    }
};
export default fp(ConnectDB);