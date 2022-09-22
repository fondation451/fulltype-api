import * as ft from "fulltype";

export type ApiEndpoint = (
  input: ft.Schema<{ [param: string]: ft.Schema<any> }>,
) => ft.Schema<{ [param: string]: ft.Schema<any> }>;

export type ApiSchema = { [routeName: string]: ApiEndpoint };

export const buildApiSchema = <ApiSchemaT extends ApiSchema>(
  apiSchema: ApiSchemaT,
): ApiSchemaT => apiSchema;
