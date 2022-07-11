interface ITemplateVariables {
  [key: string]: string | number;
}

export default interface IParseMailTempalteDTO {
  file: string;
  variables: ITemplateVariables;
}
