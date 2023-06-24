export type CommonApiResponse<T = any> = {
  status: "ok";
  data: T;
};

export type CommonApiError = {
  status: "error";
  error: string;
};
