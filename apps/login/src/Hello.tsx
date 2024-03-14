export interface HelloProps {
  /**
   * Prop comment
   */
  text?: string;
}

/**
 * Element comment
 */
function Hello({text}: HelloProps) {
  return <div>{text}<span>Hello</span></div>;
}

export default Hello;

Hello.defaultProps = {
  text: "default",
};
Hello.defaultName = 'ZUIHello';
