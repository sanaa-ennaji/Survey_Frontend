import { Survey } from './survey.model';

export interface PaginationResponse {
  content: Survey[];
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  mast: boolean;
}
