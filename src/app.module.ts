import { Module } from '@nestjs/common';
import { HealthModule } from './api/health/health.module';
import { AgentModule } from './domain/agent/agent.module';
import { RetrievalModule } from './domain/retrieval/retrieval.module';
import { IngestionModule } from './domain/ingestion/ingestion.module';

@Module({
  imports: [HealthModule, AgentModule, RetrievalModule, IngestionModule],
})
export class AppModule {}
