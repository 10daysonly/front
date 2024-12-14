type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};

declare module "*.svg" {
  const content: StaticImageData;

  export default content;
}
