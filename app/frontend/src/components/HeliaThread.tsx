export type HeliaThreadView = {
  head: string;
  onRotate: (candidate: string) => void;
};

export function HeliaThread({ head, onRotate }: HeliaThreadView) {
  return (
    <div aria-label="HeliaThread" role="status">
      <div>Thread:{head}</div>
      <button type="button" onClick={() => onRotate('NONE')}>
        Helia rotate{' '}
      </button>
    </div>
  );
}
