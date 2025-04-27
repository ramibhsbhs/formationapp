import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private messageService: MessageService) { }

  showSuccess(title: string, description: string): void {
    this.messageService.add({ severity: 'success', summary: title, detail: description });
  }

  showError(title: string, description: string): void {
    this.messageService.add({ severity: 'error', summary: title, detail: description });
  }

  showWarn(title: string, description: string): void {
    this.messageService.add({ severity: 'warn', summary: title, detail: description });
  }

  showInfo(title: string, description: string): void {
    this.messageService.add({ severity: 'info', summary: title, detail: description });
  }

  handleHttpError(error: any): void {
    if (typeof error === 'string') {
      this.showError('Error', error);
    } else if (error?.message) {
      this.showError('Error', error.message);
    } else if (typeof error === 'object') {
      Object.keys(error).forEach(field => {
        const fieldErrors = error[field];
        if (Array.isArray(fieldErrors)) {
          fieldErrors.forEach((msg: string) => {
            this.showError(field, msg);
          });
        }
      });
    } else {
      this.showError('Error', 'An unexpected error occurred.');
    }
  }
}
