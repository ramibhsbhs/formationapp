import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Attachment } from '../models/formation.model';

/**
 * Supported file types for attachments
 */
export enum FileType {
  PDF = 'pdf',
  DOC = 'doc',
  DOCX = 'docx',
  XLS = 'xls',
  XLSX = 'xlsx',
  PPT = 'ppt',
  PPTX = 'pptx',
  JPG = 'jpg',
  JPEG = 'jpeg',
  PNG = 'png',
  GIF = 'gif',
  MP4 = 'mp4',
  AVI = 'avi',
  MOV = 'mov',
  ZIP = 'zip',
  RAR = 'rar',
  SEVENZ = '7z',
  UNKNOWN = 'unknown'
}

@Injectable({
  providedIn: 'root'
})
export class AttachmentService {
  private apiUrl = `${environment.baseUrl}/attachment`;

  constructor(private http: HttpClient) { }

  /**
   * Upload a file as an attachment to a module
   * @param moduleId The ID of the module to attach the file to
   * @param file The file to upload
   * @returns Observable with the created attachment
   */
  uploadAttachment(moduleId: number, file: File): Observable<Attachment> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<Attachment>(`${this.apiUrl}/module/${moduleId}`, formData);
  }

  /**
   * Delete an attachment
   * @param attachmentId The ID of the attachment to delete
   * @returns Observable with void result
   */
  deleteAttachment(attachmentId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${attachmentId}`);
  }

  /**
   * Get file icon based on file type
   * @param fileType The type of the file
   * @returns Path to the icon image
   */
  getFileIcon(fileType: string): string {
    if (!fileType) return 'assets/icons/file.svg';

    switch (fileType.toLowerCase()) {
      // Document types
      case FileType.PDF:
        return 'assets/icons/pdf.svg';

      // Microsoft Office - Word
      case FileType.DOC:
      case FileType.DOCX:
        return 'assets/icons/doc.svg';

      // Microsoft Office - Excel
      case FileType.XLS:
      case FileType.XLSX:
        return 'assets/icons/xls.svg';

      // Microsoft Office - PowerPoint
      case FileType.PPT:
      case FileType.PPTX:
        return 'assets/icons/ppt.svg';

      // Image types
      case FileType.JPG:
      case FileType.JPEG:
      case FileType.PNG:
      case FileType.GIF:
        return 'assets/icons/image.svg';

      // Video types
      case FileType.MP4:
      case FileType.AVI:
      case FileType.MOV:
        return 'assets/icons/video.svg';

      // Archive types
      case FileType.ZIP:
      case FileType.RAR:
      case FileType.SEVENZ:
        return 'assets/icons/zip.svg';

      // Default for unknown types
      default:
        return 'assets/icons/file.svg';
    }
  }

  /**
   * Get file icon color based on file type
   * @param fileType The type of the file
   * @returns Tailwind CSS color class
   */
  getFileIconColor(fileType: string): string {
    if (!fileType) return 'text-gray-500';

    switch (fileType.toLowerCase()) {
      // Document types
      case FileType.PDF:
        return 'text-red-500';

      // Microsoft Office - Word
      case FileType.DOC:
      case FileType.DOCX:
        return 'text-blue-700';

      // Microsoft Office - Excel
      case FileType.XLS:
      case FileType.XLSX:
        return 'text-green-600';

      // Microsoft Office - PowerPoint
      case FileType.PPT:
      case FileType.PPTX:
        return 'text-orange-500';

      // Image types
      case FileType.JPG:
      case FileType.JPEG:
      case FileType.PNG:
      case FileType.GIF:
        return 'text-purple-500';

      // Video types
      case FileType.MP4:
      case FileType.AVI:
      case FileType.MOV:
        return 'text-pink-500';

      // Archive types
      case FileType.ZIP:
      case FileType.RAR:
      case FileType.SEVENZ:
        return 'text-yellow-500';

      // Default for unknown types
      default:
        return 'text-gray-500';
    }
  }



  /**
   * Get file type from filename
   * @param filename The name of the file
   * @returns The file type
   */
  getFileType(filename: string): string {
    if (!filename) return FileType.UNKNOWN;

    const extension = filename.split('.').pop()?.toLowerCase() || '';

    // Check if the extension matches any of the known file types
    for (const type in FileType) {
      if (FileType[type as keyof typeof FileType] === extension) {
        return extension;
      }
    }

    return FileType.UNKNOWN;
  }

  /**
   * Extract filename from URL
   * @param url The URL of the file
   * @returns The filename
   */
  getFileName(url: string): string {
    if (!url) return 'Unknown file';

    // Extract filename from URL
    const parts = url.split('/');
    let filename = parts[parts.length - 1];

    // Remove query parameters if any
    if (filename.includes('?')) {
      filename = filename.split('?')[0];
    }

    // Try to decode the filename (in case it's URL encoded)
    try {
      filename = decodeURIComponent(filename);
    } catch (e) {
      // If decoding fails, use the original filename
    }

    // If the filename is too long, truncate it
    if (filename.length > 25) {
      const extension = filename.split('.').pop() || '';
      const name = filename.substring(0, 20);
      filename = `${name}...${extension ? '.' + extension : ''}`;
    }

    return filename;
  }

  /**
   * Get a human-readable file size
   * @param bytes File size in bytes
   * @returns Formatted file size (e.g., "1.5 MB")
   */
  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }
}
