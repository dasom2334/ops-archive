import { Module } from '@nestjs/common';
import { HealthModule } from './api/health/health.module';
import { AgentModule } from './agent/agent.module';
import { RetrievalModule } from './retrieval/retrieval.module';
import { IngestionModule } from './ingestion/ingestion.module';

@Module({
  imports: [HealthModule, AgentModule, RetrievalModule, IngestionModule],
})
export class AppModule {}
