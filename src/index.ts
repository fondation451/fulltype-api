import * as ft from "fulltype";

export type ApiEndpoint = {
  input: ft.Schema<any>;
  output: ft.Schema<any>;
};

export const buildApiSchema = <ApiT extends { [routeName: string]: ApiEndpoint }>(
  apiSchema: ApiT,
): ApiT => apiSchema;
