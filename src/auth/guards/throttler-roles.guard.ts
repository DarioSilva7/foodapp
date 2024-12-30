// // src/auth/guards/throttler-roles.guard.ts
// import { Injectable, ExecutionContext } from '@nestjs/common';
// import { ThrottlerGuard } from '@nestjs/throttler';
// import { RolesGuard } from './roles.guard';
// import { Reflector } from '@nestjs/core';

// @Injectable()
// export class ThrottlerRolesGuard extends ThrottlerGuard {
//   private rolesGuard: RolesGuard;

//   constructor(protected readonly reflector: Reflector) {
//     super(
//       { throttlers: [{ ttl: 60, limit: 10 }] },
//       'storageService',
//       reflector,
//     );
//     this.rolesGuard = new RolesGuard(null);
//   }

//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     const throttlerResult = await super.canActivate(context);
//     if (!throttlerResult) {
//       return false;
//     }
//     return this.rolesGuard.canActivate(context);
//   }
// }
