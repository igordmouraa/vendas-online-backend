import { CacheModule as CacheModuleNest} from '@nestjs/cache-manager';
import { CacheService } from './cache.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    CacheModuleNest.register({
      ttl: 900000000,
    }),
  ],
  providers: [CacheService],
  exports: [CacheService],
})
export class CacheModule {}