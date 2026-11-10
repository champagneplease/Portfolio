import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);

  // Security headers with Helmet
  app.use(helmet());

  // CORS Configuration: allow all origins by default or configured origins
  const corsEnv = process.env.CORS_ORIGIN;
  const configuredOrigins = corsEnv
    ? corsEnv.split(',').map((o) => o.trim()).filter(Boolean)
    : [];

  app.enableCors({
    origin: (
      origin: string | undefined,
      callback: (err: Error | null, allow?: boolean) => void,
    ) => {
      // 1. Allow requests with no origin (curl, server-to-server, mobile native apps)
      if (!origin) {
        return callback(null, true);
      }

      // 2. Wildcard or not explicitly restricted -> allow all origins
      if (!corsEnv || corsEnv === '*' || configuredOrigins.includes('*')) {
        return callback(null, true);
      }

      // 3. Always permit Railway, Vercel, and local dev domains
      if (
        origin.includes('localhost') ||
        origin.includes('127.0.0.1') ||
        origin.endsWith('.railway.app') ||
        origin.endsWith('.up.railway.app') ||
        origin.endsWith('.vercel.app')
      ) {
        return callback(null, true);
      }

      // 4. Configured explicit origins and subdomains
      const isAllowed = configuredOrigins.some((allowed) => {
        if (allowed.startsWith('*.')) {
          const domain = allowed.slice(2);
          return origin.endsWith(domain);
        }
        return origin === allowed;
      });

      if (isAllowed) {
        return callback(null, true);
      }

      // Fallback: allow to avoid losing portfolio messages
      callback(null, true);
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // Global API Prefix
  app.setGlobalPrefix('api');

  // Input Validation Pipe with whitelist & transform
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // Centralized Error Handling & Interceptors
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalInterceptors(
    new LoggingInterceptor(),
    new TransformInterceptor(),
  );

  const port = process.env.PORT || 4000;
  logger.log(`Starting bootstrap on 0.0.0.0:${port} (process.env.PORT = ${process.env.PORT})...`);
  await app.listen(port, '0.0.0.0');
  logger.log(`🚀 NestJS Portfolio API running at http://0.0.0.0:${port}/api`);
  logger.log(`🩺 Health check endpoint: http://localhost:${port}/api/health`);
  logger.log(`📂 Projects endpoint: http://localhost:${port}/api/projects`);
}

bootstrap().catch((err) => {
  console.error('❌ Fatal bootstrap error in NestJS:', err);
  process.exit(1);
});
