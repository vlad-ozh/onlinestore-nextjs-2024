import { getTranslations } from 'next-intl/server';

export class ApiError {
  public status: number | null;
  public errors: string[] | null;
  public message: string | null;

  constructor(
    status: number | null,
    message: string | null,
    errors: string[] | null = []
  ) {
    this.status = status;
    this.errors = errors;
    this.message = message;
  }

  static BadRequest(message: string, errors: string[] = []) {
    return new ApiError(400, message, errors);
  }

  static UnauthorizedError(message: string) {
    return new ApiError(401, message);
  }

  static NotFound(message: string) {
    return new ApiError(404, message);
  }
}

export const returnError = async (error: any) => {
  const t = await getTranslations('Errors');

  if (error instanceof ApiError) {
    return { error: error.message, errors: error.errors };
  }

  return { error: new ApiError(500, t('unexpected')).message };
};
