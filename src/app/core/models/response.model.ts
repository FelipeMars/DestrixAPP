export interface ResponseModel<t> {
  error: boolean;
  errorMessages: string[] | null;
  notFound: boolean;
  result: t;
}
