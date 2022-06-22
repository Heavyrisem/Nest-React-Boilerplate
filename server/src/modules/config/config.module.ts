import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('development', 'production', 'test').required(),
        PORT: Joi.number(),
        REACT_URL: Joi.string().default('http://localhost:3000'),
        REACT_DIR: Joi.string().default('./build_react'),
      }),
    }),
  ],
})
export class ConfigurationModule {}
