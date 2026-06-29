export type HeliaThread = { version: string; head: string };

export type InitResult = {
  trust?: string;
  root?: string;
  rotations?: Array<{ head: string; trust?: string }>;
};

export type HeliaLayerApi = {
  init: () => Promise<InitResult>;
  thread: HeliaThread;
};

let thread: HeliaThread = { version: 'golden', head: 'NONE' };

function nextHead(candidate: string) {
  if (!candidate || candidate === thread.head) return;
  thread = { version: 'golden', head: candidate };
}

export async function initHelia(candidate?: string): Promise<InitResult> {
  await new Promise((resolve) => setTimeout(resolve, 10));
  if (candidate) nextHead(candidate);
  return { trust: thread.head, root: thread.head, rotations: [] };
}

export function getHeliaThread(): HeliaThread {
  return { ...thread };
}

export function setHeliaHead(candidate: string) {
  nextHead(candidate);
}
