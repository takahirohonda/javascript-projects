declare module "*.svg" {
  const content:
    | React.FunctionComponent<React.SVGAttributes<SVGElement>>
    | FunctionComponent<SVGAttributes<SVGElement>>
    | { alt: string };

  export default content;
}

declare module "*.woff2";
declare module "*.ttf";

declare module "*.json" {
  const value: any;

  export default value;
}

type PolymorphicComponent =
  | keyof JSX.IntrinsicElements
  | React.ComponentType<any>;

interface WithChildrenRenderProp<T> {
  children: (props: T) => React.ReactElement | null;
}
