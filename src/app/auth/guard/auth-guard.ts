import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { StorageService } from '../services/storage/storage.service';

export const authGuard: CanActivateFn & CanActivateChildFn = (route, state) => {
  const router = inject(Router);
  const isAuthenticated = StorageService.hasToken();
  if(isAuthenticated){
     return true;
  }else{
    router.navigate(['/login']);
    return false;
  }
  
};
